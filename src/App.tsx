import { useEffect, type ReactNode } from 'react';
import SiteLayout from '@/components/layout/SiteLayout';
import { PageHero } from '@/components/ui/PageSections';
import { DIRECTORIES } from '@/data/site';
import { hrefTo, useRoute } from '@/lib/router';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import DirectoryPage from '@/pages/DirectoryPage';
import HomePage from '@/pages/HomePage';
import NewsPage from '@/pages/NewsPage';
import ShopPage from '@/pages/ShopPage';

function NotFoundPage() {
  return (
    <>
      <PageHero
        eyebrow="Page not found"
        title="This page has moved or never existed"
        description="Head back to the home page or explore the creative directories and shop."
      >
        <a
          href={hrefTo('/')}
          className="inline-flex items-center rounded-full bg-primary-500 px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-primary-400 font-sans tracking-tight"
        >
          Back to home
        </a>
      </PageHero>
      <section className="bg-white py-16 font-sans">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-5 lg:px-8">
          {DIRECTORIES.map((dir) => (
            <a
              key={dir.slug}
              href={hrefTo(dir.path)}
              className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-900 tracking-tight"
            >
              {dir.eyebrow}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default function App() {
  const route = useRoute();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [route.path]);

  const directory = DIRECTORIES.find((dir) => dir.path === route.path);

  let page: ReactNode;
  if (route.path === '/') page = <HomePage />;
  else if (route.path === '/about') page = <AboutPage />;
  else if (route.path === '/news') page = <NewsPage />;
  else if (route.path === '/shop') page = <ShopPage />;
  else if (route.path === '/contact') page = <ContactPage route={route} />;
  else if (directory) page = <DirectoryPage key={directory.slug} config={directory} />;
  else page = <NotFoundPage />;

  return <SiteLayout currentPath={route.path}>{page}</SiteLayout>;
}