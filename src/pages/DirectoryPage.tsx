import { useMemo, useState } from 'react';
import { ArrowUpRight, MapPin, Search } from 'lucide-react';
import { PageHero, SectionHeading } from '@/components/ui/PageSections';
import type { Creative, DirectoryConfig } from '@/data/site';
import { hrefTo } from '@/lib/router';

interface DirectoryPageProps {
  config: DirectoryConfig;
}

function matchesQuery(creative: Creative, query: string): boolean {
  const haystack = [creative.name, creative.location, creative.headline, ...creative.services, ...creative.tags]
    .join(' ')
    .toLowerCase();
  return haystack.includes(query);
}

export default function DirectoryPage({ config }: DirectoryPageProps) {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();

  const results = useMemo(
    () => (normalizedQuery ? config.creatives.filter((creative) => matchesQuery(creative, normalizedQuery)) : config.creatives),
    [config.creatives, normalizedQuery],
  );

  return (
    <div className="font-['Neue_Haas_Grotesk_Text','Helvetica_Neue',Helvetica,Arial,sans-serif] antialiased tracking-tight">
      <PageHero
        eyebrow={config.eyebrow}
        title={config.title}
        description={config.intro}
        image={config.heroImage}
        imageAlt={config.heroAlt}
      >
        <a
          href={hrefTo('/contact', { type: 'brief' })}
          className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-primary-400"
        >
          Submit a {config.serviceNoun} brief
        </a>
      </PageHero>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="What you can book" title="Services and opportunities" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {config.services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-neutral-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Featured" title={`Featured ${config.serviceNoun}s`} />
            <label className="relative block w-full md:max-w-sm">
              <span className="sr-only">Search creatives</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name, skill or genre"
                className="w-full rounded-full border border-neutral-300 bg-white py-3 pl-11 pr-5 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
              />
            </label>
          </div>

          {results.length > 0 ? (
            <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {results.map((creative) => (
                <li key={creative.id}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden bg-neutral-200">
                      <img
                        src={creative.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-semibold text-neutral-950">{creative.name}</h3>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-neutral-600">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {creative.location}
                      </p>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-700">{creative.headline}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {creative.services.map((service) => (
                          <span key={service} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                            {service}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex items-center justify-between gap-3 border-t border-neutral-100 pt-5">
                        <p className="text-xs font-medium text-neutral-500">{creative.startingFrom}</p>
                        <a
                          href={hrefTo('/contact', { type: 'brief', creative: creative.name })}
                          className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600"
                        >
                          Request
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-12 rounded-2xl border border-dashed border-neutral-300 bg-white p-12 text-center">
              <p className="text-xl font-semibold text-neutral-900">No matches for "{query.trim()}"</p>
              <p className="mt-2 text-sm text-neutral-600">Try another skill or genre, or submit a brief and we will find someone.</p>
              <button
                type="button"
                onClick={() => setQuery('')}
                className="mt-6 rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-900"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}