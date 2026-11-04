import { Compass, Crown, Megaphone, Mic2, Newspaper, UserRound } from 'lucide-react';
import { PageHero, SectionHeading } from '@/components/ui/PageSections';
import { hrefTo } from '@/lib/router';
import musicMeetImage from '@/components/assets/IMG_3765.png';
import whyChooseImage from '@/components/assets/IMG_3772.png';

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
        title="Where creatives connect and grow."
        description="Based in Ghana and building connections worldwide, Game Reserve Hub brings creative talent, services and original work together. Find collaborators, access affordable services, and reach customers who value what you create."
        image={musicMeetImage}
        imageAlt="Creatives collaborating and connecting"
      />

      <section className="bg-white py-20 lg:py-28 font-sans">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="rounded-3xl bg-neutral-50 p-8 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-800">Our mission</p>
            <h2>Make creative connections count.</h2>
            <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-neutral-950 sm:text-3xl">
              Connect creatives with collaborators and paying customers, making quality services and original work easier to find, access, and afford.
            </p>
          </div>
          <div className="rounded-3xl bg-neutral-950 p-8 text-white lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-400">Our vision</p>
            <div className="mt-4 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              <p>A world where talent supports talent.</p>
              <p className="mt-2 text-lg font-normal text-neutral-300 sm:text-xl">
                A connected creative economy where original work reaches wider audiences and more creatives build sustainable careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Increased height section & crisp image styling */}
      <section className="bg-neutral-50 py-24 lg:py-32 font-sans">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <SectionHeading
                eyebrow="Why choose game reserve hub"
                title="The right connections. More possibilities."
                description="Find the people, services, and support to move your next project forward."
              />
              
              <div className="mt-8 space-y-6 text-neutral-700">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-950">Find your creative match</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    Explore portfolios across music, design, animation, photography, video, and more, all in one place.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neutral-950">Make your budget go further</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    Access negotiated partner rates and coordinated packages, with pricing and any savings explained for each offer.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neutral-950">Know what you’re buying</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    Understand the scope, timeline, price, and deliverables before your project begins.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neutral-950">Give your work more visibility</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    Showcase your craft and connect with fellow creatives, fans, brands, and potential customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Viewport container height boosted to 550px mobile / 750px desktop with crisp rendering */}
            <div className="relative flex min-h-[550px] w-full items-center justify-center overflow-hidden rounded-3xl bg-neutral-900 shadow-xl lg:min-h-[750px]">
              <img
                src={whyChooseImage}
                alt="Why Choose Game Reserve Hub"
                className="h-full w-full object-cover object-center contrast-[1.03] saturate-[1.05] filter [image-rendering:crisp-edges]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28 font-sans">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="How we earn"
            title="Built around creative work."
            description="We earn when customers book services or buy products through Game Reserve Hub. Pricing and any applicable fees are explained before you commit."
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