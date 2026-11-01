import { ArrowRight, Handshake, Layers, Search, ShoppingBag } from 'lucide-react';
import ArticleCard from '@/components/news/ArticleCard';
import ProductCard from '@/components/shop/ProductCard';
import { SectionHeading } from '@/components/ui/PageSections';
import { ARTICLES, DIRECTORIES, PRODUCTS } from '@/data/site';
import { hrefTo } from '@/lib/router';
import heroBackground from '@/components/assets/musicalIns.jpg';

const PILLARS = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'Find musicians, producers, designers, photographers, videographers and DJs in one searchable place.',
  },
  {
    icon: Handshake,
    title: 'Trusted connections',
    description: 'Work with creatives we know. Every partner is introduced through our talent scouts and local representatives.',
  },
  {
    icon: Layers,
    title: 'Coordinated services',
    description: 'Combine beats, recording, artwork and video into one clearly scoped project with agreed deliverables.',
  },
  {
    icon: ShoppingBag,
    title: 'Shopping in one place',
    description: 'Buy beats, merchandise, artwork, digital products and artist packages without juggling suppliers.',
  },
];

const WHO_WE_SERVE = [
  {
    label: 'Creatives first',
    title: 'For the people who make the work',
    description:
      'Artists and creative professionals find collaborators, affordable services, buyers and visibility. A musician can buy a beat, hire an engineer or book a photographer in the same place.',
    href: hrefTo('/contact', { type: 'apply' }),
    cta: 'Apply to join',
  },
  {
    label: 'Then the public',
    title: 'For fans, collectors and brands',
    description:
      'Fans, collectors, brands and event organisers can buy original creative work, hire talent and discover what is coming next from the community.',
    href: hrefTo('/shop'),
    cta: 'Shop the marketplace',
  },
];

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 3);
  const latestArticles = ARTICLES.slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
        <img
          src={heroBackground}
          alt="Musical Instruments"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
          loading="eager"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950" />
        <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pt-28 pb-24 lg:px-8">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.25em] text-primary-400">
            Game Reserve Hub
          </p>
          <h1 className="animate-fade-up mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl [animation-delay:100ms]">
            Connect. Create. <span className="text-primary-400">Sell.</span>
          </h1>
          <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-neutral-200 sm:text-xl [animation-delay:200ms]">
            Easy, affordable access to creative talent, services and original work. We help creatives find each other,
            buy what they need and sell their work to the wider public.
          </p>
          <div className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row [animation-delay:300ms]">
            <a
              href={hrefTo('/contact', { type: 'brief' })}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-7 py-3.5 text-base font-semibold text-neutral-950 transition-all duration-200 hover:bg-primary-400 hover:shadow-lg"
            >
              Submit a brief
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={hrefTo('/artists')}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-neutral-950"
            >
              Discover creatives
            </a>
          </div>
          <dl className="animate-fade-up mt-16 grid max-w-3xl grid-cols-2 gap-8 border-t border-white/15 pt-8 sm:grid-cols-4 [animation-delay:400ms]">
            {[
              ['7', 'creative disciplines'],
              ['1', 'place to discover, buy and book'],
              ['Per offer', 'savings confirmed upfront'],
              ['Global', 'clients and creatives'],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl font-semibold text-white">{value}</dd>
                <p className="mt-1 text-sm text-neutral-300">{label}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Who we serve"
            title="Creatives are our first customers"
            description="The same community creates both supply and demand. A designer, producer or DJ can buy services while earning through their own work."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {WHO_WE_SERVE.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex flex-col rounded-3xl border border-neutral-200 bg-neutral-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:bg-white hover:shadow-xl lg:p-10"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-800">{item.label}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-neutral-950">{item.title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-neutral-600">{item.description}</p>
                <span className="mt-8 inline-flex items-center gap-2 font-semibold text-neutral-900">
                  {item.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Find your creative"
              title="A directory built around every discipline"
              description="Explore portfolios, listen to work and find the right collaborator for your next release, shoot or night out."
            />
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DIRECTORIES.map((dir) => (
              <a
                key={dir.slug}
                href={hrefTo(dir.path)}
                className="group relative isolate flex min-h-[260px] overflow-hidden rounded-3xl bg-neutral-900 text-white"
              >
                <img
                  src={dir.heroImage}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                <div className="mt-auto p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">{dir.eyebrow}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{dir.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-200 transition-colors group-hover:text-primary-300">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </a>
            ))}
            <a
              href={hrefTo('/news')}
              className="flex min-h-[260px] flex-col justify-between rounded-3xl border border-dashed border-neutral-300 bg-white p-7 transition-colors hover:border-primary-400 hover:bg-primary-50"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-800">News and playlists</p>
              <div>
                <h3 className="font-display text-2xl font-semibold text-neutral-950">Read, listen and discover</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Interviews, practical guides and playlists from our curators.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Why people choose us"
            title="Better value, one connected place"
            description="Negotiated partner rates, clearly scoped packages and shared production opportunities. Savings are confirmed for each offer, with fair partner payment and clear deliverables."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-800 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="group bg-neutral-950 p-8 transition-colors hover:bg-neutral-900">
                <pillar.icon className="h-7 w-7 text-primary-400 transition-transform duration-300 group-hover:-translate-y-1" aria-hidden="true" />
                <h3 className="mt-6 font-display text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Shop" title="Beats, artwork and packages" description="Original work from our community, ready to buy." />
            <a href={hrefTo('/shop')} className="inline-flex items-center gap-2 font-semibold text-neutral-900 hover:text-primary-700">
              View all products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="News and articles" title="Stories from the community" description="Creative news, interviews and useful guides." />
            <a href={hrefTo('/news')} className="inline-flex items-center gap-2 font-semibold text-neutral-900 hover:text-primary-700">
              All news
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary-500 px-8 py-16 text-neutral-950 sm:px-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              From an idea to a completed project
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-800">
              We make it easier to find the right creative, understand what you are buying and move from an idea to a
              finished piece of work. Tell us what you need and we will match you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={hrefTo('/contact', { type: 'brief' })}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-neutral-800"
              >
                Submit a brief
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={hrefTo('/about')}
                className="inline-flex items-center justify-center rounded-full border border-neutral-950/30 px-7 py-3.5 font-semibold text-neutral-950 transition-colors hover:bg-neutral-950 hover:text-white"
              >
                About the platform
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}