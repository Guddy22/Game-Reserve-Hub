import { Clock, Globe2, Mail } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import { PageHero } from '@/components/ui/PageSections';
import { CONTACT_REQUEST_TYPES, type ContactRequestType } from '@/data/site';
import type { Route } from '@/lib/router';

interface ContactPageProps {
  route: Route;
}

function resolveRequestType(value: string | null): ContactRequestType {
  const match = CONTACT_REQUEST_TYPES.find((type) => type.value === value);
  return match ? match.value : 'brief';
}

function buildInitialMessage(params: URLSearchParams): string {
  const product = params.get('product');
  const creative = params.get('creative');
  if (product) return `I would like to enquire about: ${product}\n\n`;
  if (creative) return `I would like to request ${creative} for a project.\n\n`;
  return '';
}

const PROMISES = [
  { icon: Clock, title: 'Every message is read', description: 'A real person reviews each submission and replies with next steps.' },
  { icon: Mail, title: 'Clear terms before any payment', description: 'You see the scope, deliverables and confirmed savings first.' },
  { icon: Globe2, title: 'Working with clients worldwide', description: 'We match you with creatives across our global network.' },
];

export default function ContactPage({ route }: ContactPageProps) {
  const initialType = resolveRequestType(route.params.get('type'));
  const initialMessage = buildInitialMessage(route.params);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need, or how you want to get involved"
        description="Submit a brief, make an enquiry, apply to join the partner network or discuss a partnership. We reply to every message."
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_380px] lg:gap-16 lg:px-8">
          <div>
            <ContactForm
              key={`${initialType}-${route.params.toString()}`}
              initialType={initialType}
              initialMessage={initialMessage}
            />
          </div>

          <aside className="space-y-4 lg:pt-2">
            {PROMISES.map((promise) => (
              <div key={promise.title} className="flex gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                <promise.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary-700" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-neutral-950">{promise.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">{promise.description}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
