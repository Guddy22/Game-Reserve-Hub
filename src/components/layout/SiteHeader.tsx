import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data/site';
import { hrefTo } from '@/lib/router';
import logoImage from '@/components/assets/logo1.jpeg';

interface SiteHeaderProps {
  currentPath: string;
}

export default function SiteHeader({ currentPath }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-neutral-200 bg-white/95 shadow-sm backdrop-blur'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <div className="flex items-center gap-3">
          {/* Larger logo container with vinyl disc ring and click-to-rotate trigger */}
          <button
            type="button"
            onClick={() => setIsRotating((prev) => !prev)}
            aria-label="Toggle spinning vinyl logo"
            className={`group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-neutral-800 bg-neutral-900 shadow-md transition-transform duration-500 hover:rotate-180 ${
              isRotating ? 'animate-spin' : ''
            }`}
          >
            {/* Vinyl Record Disc Grooves */}
            <span className="absolute inset-0 rounded-full border-2 border-neutral-700/50" />
            <span className="absolute inset-1 rounded-full border border-neutral-800/80" />

            {/* Inner Logo Image */}
            <img
              src={logoImage}
              alt="Game Reserve Hub Logo"
              className="h-8 w-8 rounded-full object-cover"
            />
          </button>

          <a href={hrefTo('/')} className="font-sans text-lg font-semibold tracking-tight text-neutral-900">
            Game Reserve Hub
          </a>
        </div>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const active = currentPath === link.path;
            return (
              <a
                key={link.path}
                href={hrefTo(link.path)}
                aria-current={active ? 'page' : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={hrefTo('/contact', { type: 'brief' })}
            className="hidden items-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition-all duration-200 hover:bg-primary-400 hover:shadow-md sm:inline-flex"
          >
            Submit a brief
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-800 transition-colors hover:bg-neutral-100 xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-neutral-200 bg-white xl:hidden" aria-label="Mobile">
          <div className="mx-auto grid max-w-7xl gap-1 px-5 py-4 sm:grid-cols-2 lg:px-8">
            {NAV_LINKS.map((link) => {
              const active = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={hrefTo(link.path)}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    active ? 'bg-neutral-900 text-white' : 'text-neutral-800 hover:bg-neutral-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}