import { NAV_LINKS } from '@/data/site';
import { hrefTo } from '@/lib/router';
import logoImage from '@/components/assets/logo1.jpeg';

export default function SiteFooter() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 font-sans">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3.5">
            {/* Prominent, large vinyl logo ring with crisp image presentation */}
            <div className="group relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-neutral-700 bg-neutral-900 shadow-md transition-transform duration-500 hover:rotate-180">
              <span className="absolute inset-0 rounded-full border border-neutral-600/40" />
              <img
                src={logoImage}
                alt="Game Reserve Hub Logo"
                className="h-10 w-10 rounded-full object-cover object-center shadow-inner"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Game Reserve Hub
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
            Connect. Create. Sell. Easy, affordable access to creative talent, services and original work.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {NAV_LINKS.slice(0, 5).map((link) => (
              <li key={link.path}>
                <a href={hrefTo(link.path)} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Marketplace</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {NAV_LINKS.slice(5).map((link) => (
              <li key={link.path}>
                <a href={hrefTo(link.path)} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Work with us</h3>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            Creatives can join the partner network. Clients can submit a brief and get matched with the right talent.
          </p>
          <a
            href={hrefTo('/contact', { type: 'apply' })}
            className="mt-4 inline-flex items-center rounded-full border border-primary-500/60 px-4 py-2 text-sm font-medium text-primary-300 transition-colors hover:bg-primary-500 hover:text-neutral-950"
          >
            Apply to join
          </a>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Game Reserve Hub. All rights reserved.</p>
          <p>Savings are confirmed for each offer. Partner rates and packages are subject to agreed terms.</p>
        </div>
      </div>
    </footer>
  );
}