import { useState, type FormEvent, type ReactNode } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { CONTACT_REQUEST_TYPES, type ContactRequestType } from '@/data/site';
import { supabase } from '@/lib/supabase';

interface ContactFormProps {
  initialType: ContactRequestType;
  initialMessage: string;
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 4000;
const MAX_NAME_LENGTH = 120;

const INPUT_CLASS =
  'w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200';

export default function ContactForm({ initialType, initialMessage }: ContactFormProps) {
  const [requestType, setRequestType] = useState<ContactRequestType>(initialType);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(initialMessage);
  const [errors, setErrors] = useState<Partial<Record<'name' | 'email' | 'message', string>>>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [serverError, setServerError] = useState('');

  const selectedType = CONTACT_REQUEST_TYPES.find((type) => type.value === requestType) ?? CONTACT_REQUEST_TYPES[0];

  function validate(): boolean {
    const next: typeof errors = {};
    if (!name.trim()) next.name = 'Please tell us your name.';
    else if (name.trim().length > MAX_NAME_LENGTH) next.name = `Keep your name under ${MAX_NAME_LENGTH} characters.`;
    if (!EMAIL_PATTERN.test(email.trim())) next.email = 'Enter an email address we can reply to.';
    if (!message.trim()) next.message = 'Add a few details so we can help.';
    else if (message.trim().length > MAX_MESSAGE_LENGTH)
      next.message = `Keep your message under ${MAX_MESSAGE_LENGTH} characters.`;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitState === 'submitting' || !validate()) return;

    setSubmitState('submitting');
    setServerError('');

    const { error } = await supabase.from('contact_submissions').insert({
      request_type: requestType,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    if (error) {
      setServerError('We could not send your message just now. Please try again in a moment.');
      setSubmitState('error');
      return;
    }

    setSubmitState('success');
  }

  function resetForm() {
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
    setSubmitState('idle');
  }

  if (submitState === 'success') {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-success-200 bg-success-50 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-success-600" aria-hidden="true" />
        <h2 className="mt-6 font-display text-2xl font-semibold text-neutral-950">Thank you, {name.trim()}</h2>
        <p className="mt-3 max-w-md text-neutral-700">
          Your {selectedType.label.toLowerCase()} has been received. Our team will reply to {email.trim()} with next steps.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-8 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8" aria-label="Contact Game Reserve Hub">
      <fieldset>
        <legend className="text-sm font-semibold text-neutral-900">What do you need?</legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {CONTACT_REQUEST_TYPES.map((type) => {
            const selected = type.value === requestType;
            return (
              <label
                key={type.value}
                className={`cursor-pointer rounded-2xl border p-4 transition-all duration-200 ${
                  selected
                    ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                    : 'border-neutral-200 bg-white hover:border-neutral-400'
                }`}
              >
                <input
                  type="radio"
                  name="request-type"
                  value={type.value}
                  checked={selected}
                  onChange={() => setRequestType(type.value)}
                  className="sr-only"
                />
                <span className="block text-sm font-semibold text-neutral-950">{type.label}</span>
                <span className="mt-1 block text-xs leading-relaxed text-neutral-600">{type.description}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your name" error={errors.name}>
          <input
            type="text"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={INPUT_CLASS}
            placeholder="Ada Mensah"
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field label="Email address" error={errors.email}>
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={INPUT_CLASS}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
      </div>

      <Field label={messageLabel(requestType)} error={errors.message}>
        <textarea
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${INPUT_CLASS} resize-y`}
          placeholder={messagePlaceholder(requestType)}
          aria-invalid={Boolean(errors.message)}
        />
        <span className="mt-2 block text-right text-xs text-neutral-500">
          {message.length} / {MAX_MESSAGE_LENGTH}
        </span>
      </Field>

      {submitState === 'error' && serverError && (
        <div role="alert" className="flex items-start gap-3 rounded-xl border border-error-200 bg-error-50 p-4 text-sm text-error-800">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>{serverError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitState === 'submitting'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-primary-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {submitState === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending
          </>
        ) : (
          <>
            Send {selectedType.label.toLowerCase()}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}

interface FieldProps {
  label: string;
  error?: string;
  children: ReactNode;
}

function Field({ label, error, children }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-neutral-900">{label}</span>
      {children}
      {error && <span className="mt-2 block text-xs font-medium text-error-700">{error}</span>}
    </label>
  );
}

function messageLabel(type: ContactRequestType): string {
  switch (type) {
    case 'brief':
      return 'Describe your project';
    case 'enquiry':
      return 'What would you like to know?';
    case 'apply':
      return 'Tell us about your creative work';
    case 'partnership':
      return 'Tell us about your partnership idea';
  }
}

function messagePlaceholder(type: ContactRequestType): string {
  switch (type) {
    case 'brief':
      return 'What do you need, your timeline, budget range and links to references.';
    case 'enquiry':
      return 'Your question about a product, service or offer.';
    case 'apply':
      return 'Your discipline, location, notable work and the services you offer.';
    case 'partnership':
      return 'Who you are, what you have in mind and what you hope to achieve together.';
  }
}
