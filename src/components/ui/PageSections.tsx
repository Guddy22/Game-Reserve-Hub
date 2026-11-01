import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, image, imageAlt = '', children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 pt-32 pb-20 text-white lg:pt-40 lg:pb-28 font-sans">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/30" />
        </>
      )}
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-primary-400">{eyebrow}</p>
        <h1 className="animate-fade-up mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl [animation-delay:80ms]">
          {title}
        </h1>
        <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-neutral-200 [animation-delay:160ms]">
          {description}
        </p>
        {children && <div className="animate-fade-up mt-10 [animation-delay:240ms]">{children}</div>}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';
  return (
    <div className={`max-w-2xl font-sans ${alignment}`}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-semibold leading-[1.2] tracking-tight text-neutral-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">{description}</p>}
    </div>
  );
}