import { Compass, Crown, Megaphone, Mic2, Newspaper, UserRound } from 'lucide-react';
import { PageHero, SectionHeading } from '@/components/ui/PageSections';
import { hrefTo } from '@/lib/router';
import musicMeetImage from '@/components/assets/musicmeet.jpg';

const TEAM = [
  {
    icon: Crown,
    role: 'Founder-led leadership',
    description: 'Sets direction and keeps the community, partner standards and client promise aligned.',
  },
  {
    icon: Newspaper,
    role: 'News, articles and playlists',
    description: 'Creative news, interviews, practical guides and playlist curation for the wider public.',
  },
  {
    icon: UserRound,
    role: 'Ghana PR and local representation',
    description: 'Builds local relationships, introduces artists and represents Game Reserve Hub on the ground.',
  },
  {
    icon: Compass,
    role: 'Talent scouting and partner coordination',
    description: 'Finds new creatives, vets their work and coordinates delivery between partners and clients.',
  },
  {
    icon: Megaphone,
    role: 'Sales and marketing',
    description: 'Takes proactive partnerships to market and promotes the people behind the work.',
  },
  {
    icon: Mic2,
    role: 'Creative partners',
    description: 'Specialist producers, engineers, designers, photographers, videographers and DJs deliver under agreed terms.',
  },
];

const EARNINGS = [
  { title: 'Agreed service margins', description: 'A transparent margin on services booked through the platform.' },
  { title: 'Coordination fees', description: 'For scoping, scheduling and managing multi-creative projects.' },
  { title: 'Product margins', description: 'On beats, merchandise, artwork, digital products and artist packages.' },
  { title: 'Creator revenue shares', description: 'Partners earn a share of the sales their original work generates.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Game Reserve Hub"
        title="A connected creative economy, built by creatives"
        description="We connect musicians, producers, engineers, designers, photographers, videographers and DJs with each other and with paying customers, making quality creative work easier to access and more affordable."
        image={musicMeetImage}
        imageAlt="Creatives collaborating and connecting"
      />

      <section className="bg-white py-20 lg:py-28 font-sans">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="rounded-3xl bg-neutral-50 p-8 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-800">Our mission</p>
            <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-neutral-950 sm:text-3xl">
              To connect creatives with one another and with paying customers, making quality creative services and
              original work easier to access and more affordable.
            </p>
          </div>
          <div className="rounded-3xl bg-neutral-950 p-8 text-white lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-400">Our vision</p>
            <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              A connected creative economy where talent supports talent, original work reaches wider audiences, and more
              creatives build sustainable careers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 lg:py-28 font-sans">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Why people choose us"
            title="Discovery, trusted connections and shopping in one place"
            description="Through negotiated partner rates, clearly scoped packages and shared production opportunities, we aim to offer better value than buying equivalent services separately. Savings are confirmed for each offer, with fair partner payment and clear deliverables."
          />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28 font-sans">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="How we earn"
            title="Transparent income that rewards the whole community"
            description="We earn when customers purchase services, artist packages, beats, merchandise, artwork or other approved products. Discovery and participation never require a launch membership fee."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {EARNINGS.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl border border-neutral-200 p-7 transition-colors hover:border-primary-300 hover:bg-primary-50/40"
              >
                <span className="text-3xl font-bold tracking-tight text-primary-600">0{index + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-20 text-white lg:py-28 font-sans">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="The team behind the connections"
            title="A founder-led team with local roots"
            description="Our team connects talent, supports partners and promotes the people behind the work."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-800 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <div key={member.role} className="bg-neutral-950 p-8 transition-colors hover:bg-neutral-900">
                <member.icon className="h-6 w-6 text-primary-400" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{member.role}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28 font-sans">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">Our promise</h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            We make it easier to find the right creative, understand what you are buying and move from an idea to a
            completed project. We promote the people behind the work and give customers practical ways to support their
            craft.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={hrefTo('/contact', { type: 'apply' })}
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-primary-600"
            >
              Apply to join
            </a>
            <a
              href={hrefTo('/contact', { type: 'partnership' })}
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-7 py-3.5 font-semibold text-neutral-900 transition-colors hover:border-neutral-900"
            >
              Discuss a partnership
            </a>
          </div>
        </div>
      </section>
    </>
  );
}