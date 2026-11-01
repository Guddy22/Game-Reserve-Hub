import type { ReactNode } from 'react';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

interface SiteLayoutProps {
  currentPath: string;
  children: ReactNode;
}

export default function SiteLayout({ currentPath, children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-neutral-900 focus:shadow-lg"
      >
        Skip to content
      </a>
      <SiteHeader currentPath={currentPath} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
