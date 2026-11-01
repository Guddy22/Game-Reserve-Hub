import { useMemo, useState } from 'react';
import { Headphones } from 'lucide-react';
import ArticleCard from '@/components/news/ArticleCard';
import { PageHero, SectionHeading } from '@/components/ui/PageSections';
import { ARTICLES, PLAYLISTS } from '@/data/site';

const FILTERS = ['All', 'Interview', 'Guide', 'News', 'Playlist'] as const;
type Filter = (typeof FILTERS)[number];

export default function NewsPage() {
  const [filter, setFilter] = useState<Filter>('All');

  const visibleArticles = useMemo(
    () => (filter === 'All' ? ARTICLES : ARTICLES.filter((article) => article.category === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="News and articles"
        title="Creative news, honest interviews and useful guides"
        description="Read the stories behind the work, learn how to buy and book creative services, and discover playlists picked by our curators."
        image="https://images.pexels.com/photos/6131925/pexels-photo-6131925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        imageAlt="A vintage record shop with rows of vinyl"
      />

      <section className="bg-neutral-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Latest" title="Articles and updates" />
            <div role="tablist" aria-label="Filter articles" className="flex flex-wrap gap-2">
              {FILTERS.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={filter === item}
                  onClick={() => setFilter(item)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    filter === item
                      ? 'bg-neutral-900 text-white'
                      : 'bg-white text-neutral-700 ring-1 ring-neutral-200 hover:ring-neutral-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {visibleArticles.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p className="mt-12 rounded-2xl border border-dashed border-neutral-300 p-10 text-center text-neutral-600">
              No articles in this category yet. Check back soon.
            </p>
          )}
        </div>
      </section>

      <section className="bg-neutral-950 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Playlist discovery"
            title="Listen to what our curators are playing"
            description="Hand-picked playlists from our editorial team, Ghana desk and talent scouts."
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {PLAYLISTS.map((playlist) => (
              <li
                key={playlist.id}
                className="group flex items-start gap-5 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/60"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-500 text-neutral-950 transition-transform duration-300 group-hover:rotate-6">
                  <Headphones className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{playlist.title}</h3>
                  <p className="mt-1 text-sm text-neutral-300">{playlist.mood}</p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wider text-neutral-400">
                    {playlist.tracks} tracks · {playlist.curator}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
