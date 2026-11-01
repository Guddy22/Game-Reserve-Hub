export const NAV_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'News', path: '/news' },
  { label: 'Artists', path: '/artists' },
  { label: 'Producers', path: '/producers' },
  { label: 'Designers', path: '/designers' },
  { label: 'Photo & Video', path: '/photographers' },
  { label: 'DJs', path: '/djs' },
  { label: 'Shop', path: '/shop' },
  { label: 'Contact', path: '/contact' },
] as const;

export type DirectorySlug = 'artists' | 'producers' | 'designers' | 'photographers' | 'djs';

export interface Creative {
  id: string;
  name: string;
  location: string;
  headline: string;
  services: string[];
  startingFrom: string;
  image: string;
  tags: string[];
}

export interface DirectoryConfig {
  slug: DirectorySlug;
  path: string;
  title: string;
  eyebrow: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  serviceNoun: string;
  services: { title: string; description: string }[];
  creatives: Creative[];
}

export const DIRECTORIES: DirectoryConfig[] = [
  {
    slug: 'artists',
    path: '/artists',
    title: 'Artists and performers',
    eyebrow: 'Artists',
    intro:
      'Discover musicians and performers, explore their work and find the collaborators, services and bookings they need to grow.',
    heroImage:
      'https://images.pexels.com/photos/7715347/pexels-photo-7715347.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Musician performing on stage under coloured lights',
    serviceNoun: 'artist',
    services: [
      { title: 'Artist packages', description: 'Bundled releases, visuals and promotion with clearly scoped deliverables.' },
      { title: 'Collaborations', description: 'Find producers, writers and session players who match your sound.' },
      { title: 'Live bookings', description: 'Enquire about performance slots and event appearances.' },
    ],
    creatives: [
      {
        id: 'artist-1',
        name: 'Kofi Mensah',
        location: 'Accra, Ghana',
        headline: 'Afro-soul vocalist and songwriter',
        services: ['Live performance', 'Songwriting', 'Artist packages'],
        startingFrom: 'Rates confirmed per offer',
        image:
          'https://images.pexels.com/photos/8186275/pexels-photo-8186275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Afrobeats', 'Soul', 'Live'],
      },
      {
        id: 'artist-2',
        name: 'Nia Delacroix',
        location: 'London, UK',
        headline: 'Indie guitarist with a cinematic live set',
        services: ['Session guitar', 'Live performance'],
        startingFrom: 'Rates confirmed per offer',
        image:
          'https://images.pexels.com/photos/8044204/pexels-photo-8044204.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Indie', 'Rock', 'Session'],
      },
      {
        id: 'artist-3',
        name: 'Tomi Adeyemi',
        location: 'Lagos, Nigeria',
        headline: 'Highlife-inspired acoustic performer',
        services: ['Acoustic sets', 'Event bookings'],
        startingFrom: 'Rates confirmed per offer',
        image:
          'https://images.pexels.com/photos/7715347/pexels-photo-7715347.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Highlife', 'Acoustic'],
      },
    ],
  },
  {
    slug: 'producers',
    path: '/producers',
    title: 'Producers and engineers',
    eyebrow: 'Producers and engineers',
    intro:
      'Find beats, production, recording, mixing and mastering support from engineers who know how to make a track land.',
    heroImage:
      'https://images.pexels.com/photos/36936571/pexels-photo-36936571.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Close-up of a professional audio mixing console',
    serviceNoun: 'producer',
    services: [
      { title: 'Beats and licensing', description: 'Browse ready-made beats and buy licences that suit your release.' },
      { title: 'Production', description: 'Full production from demo to final arrangement.' },
      { title: 'Recording and mixing', description: 'Studio time, vocal recording, mixing and stem preparation.' },
      { title: 'Mastering', description: 'Final polish for streaming, vinyl and broadcast.' },
    ],
    creatives: [
      {
        id: 'producer-1',
        name: 'Mensah Beats',
        location: 'Kumasi, Ghana',
        headline: 'Hybrid beatmaker and mix engineer',
        services: ['Beats', 'Mixing', 'Mastering'],
        startingFrom: 'Rates confirmed per offer',
        image:
          'https://images.pexels.com/photos/32215665/pexels-photo-32215665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Beats', 'Mixing'],
      },
      {
        id: 'producer-2',
        name: 'Lumen Audio',
        location: 'Berlin, Germany',
        headline: 'Recording and mastering engineer',
        services: ['Recording', 'Mastering'],
        startingFrom: 'Rates confirmed per offer',
        image:
          'https://images.pexels.com/photos/39332198/pexels-photo-39332198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Recording', 'Mastering'],
      },
    ],
  },
  {
    slug: 'designers',
    path: '/designers',
    title: 'Graphic designers',
    eyebrow: 'Graphic designers',
    intro:
      'Explore portfolios and request visual design for album covers, brand identities, posters, merchandise and digital campaigns.',
    heroImage:
      'https://images.pexels.com/photos/7675029/pexels-photo-7675029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Designers collaborating on a creative project at a desktop',
    serviceNoun: 'designer',
    services: [
      { title: 'Album and single artwork', description: 'Cover art built around your sound and story.' },
      { title: 'Brand identity', description: 'Logos, colour systems and typography for artists and labels.' },
      { title: 'Merchandise design', description: 'Print-ready designs for tees, posters and sleeves.' },
    ],
    creatives: [
      {
        id: 'designer-1',
        name: 'Ada Kwarteng',
        location: 'Accra, Ghana',
        headline: 'Cover art and brand identity for independent artists',
        services: ['Album artwork', 'Brand identity'],
        startingFrom: 'Rates confirmed per offer',
        image:
          'https://images.pexels.com/photos/13451104/pexels-photo-13451104.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Cover art', 'Branding'],
      },
      {
        id: 'designer-2',
        name: 'Marco Vidal',
        location: 'Lisbon, Portugal',
        headline: 'Poster and merchandise designer',
        services: ['Posters', 'Merchandise'],
        startingFrom: 'Rates confirmed per offer',
        image:
          'https://images.pexels.com/photos/7675031/pexels-photo-7675031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Posters', 'Print'],
      },
    ],
  },
  {
    slug: 'photographers',
    path: '/photographers',
    title: 'Photographers and videographers',
    eyebrow: 'Photo and video',
    intro:
      'Find visual storytellers for portraits, press shoots, music videos and event coverage, and book clearly scoped projects.',
    heroImage:
      'https://images.pexels.com/photos/16135656/pexels-photo-16135656.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Photographer aiming a camera in a studio',
    serviceNoun: 'creative',
    services: [
      { title: 'Portrait and press shoots', description: 'Studio and location sessions for artists and brands.' },
      { title: 'Music videos', description: 'Concept, shoot and edit for singles and visual albums.' },
      { title: 'Event coverage', description: 'Photo and video coverage for gigs, launches and festivals.' },
    ],
    creatives: [
      {
        id: 'photo-1',
        name: 'Efua Boateng',
        location: 'Accra, Ghana',
        headline: 'Portrait and press photographer',
        services: ['Portraits', 'Press shoots'],
        startingFrom: 'Rates confirmed per offer',
        image:
          'https://images.pexels.com/photos/36697247/pexels-photo-36697247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Portrait', 'Studio'],
      },
      {
        id: 'video-1',
        name: 'Samuel Okoro',
        location: 'Lagos, Nigeria',
        headline: 'Music video director and cinematographer',
        services: ['Music videos', 'Editing'],
        startingFrom: 'Rates confirmed per offer',
        image:
          'https://images.pexels.com/photos/6621440/pexels-photo-6621440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Video', 'Cinematography'],
      },
    ],
  },
  {
    slug: 'djs',
    path: '/djs',
    title: 'DJs',
    eyebrow: 'DJs',
    intro:
      'Discover DJs, listen to their mixes and find suitable booking opportunities for clubs, weddings, launches and festivals.',
    heroImage:
      'https://images.pexels.com/photos/9005458/pexels-photo-9005458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'DJ mixing live in a nightclub with coloured lights',
    serviceNoun: 'DJ',
    services: [
      { title: 'Club nights', description: 'Resident and guest sets for venues and promoters.' },
      { title: 'Private events', description: 'Weddings, birthdays and corporate functions.' },
      { title: 'Festival slots', description: 'Warm-up and main-stage bookings for festivals.' },
    ],
    creatives: [
      {
        id: 'dj-1',
        name: 'DJ Sika',
        location: 'Accra, Ghana',
        headline: 'Amapiano and afrohouse selector',
        services: ['Club nights', 'Private events'],
        startingFrom: 'Rates confirmed per offer',
        image:
          'https://images.pexels.com/photos/40614690/pexels-photo-40614690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Amapiano', 'Afrohouse'],
      },
      {
        id: 'dj-2',
        name: 'Rhythm Oracle',
        location: 'Johannesburg, South Africa',
        headline: 'Deep house and techno resident',
        services: ['Club nights', 'Festival slots'],
        startingFrom: 'Rates confirmed per offer',
        image:
          'https://images.pexels.com/photos/9005483/pexels-photo-9005483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Deep house', 'Techno'],
      },
    ],
  },
];

export const PRODUCT_CATEGORIES = ['All', 'Beats', 'Artist packages', 'Artwork', 'Merchandise', 'Digital'] as const;

export type ProductCategory = Exclude<(typeof PRODUCT_CATEGORIES)[number], 'All'>;

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  summary: string;
  image: string;
  badge?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'beat-midnight-drive',
    name: 'Midnight Drive beat licence',
    category: 'Beats',
    price: 35,
    summary: 'Moody trap-soul instrumental with stems available for the Premium licence.',
    image:
      'https://images.pexels.com/photos/36936571/pexels-photo-36936571.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Bestseller',
  },
  {
    id: 'pkg-launch',
    name: 'Single launch package',
    category: 'Artist packages',
    price: 480,
    summary: 'Mix, master, cover artwork and a short promo clip, delivered with a fixed timeline.',
    image:
      'https://images.pexels.com/photos/8044204/pexels-photo-8044204.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'art-cover-set',
    name: 'Album cover artwork',
    category: 'Artwork',
    price: 220,
    summary: 'Original cover design with two revisions, print-ready and digital files.',
    image:
      'https://images.pexels.com/photos/13451104/pexels-photo-13451104.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'merch-tee',
    name: 'Reserve Signature tee',
    category: 'Merchandise',
    price: 28,
    summary: 'Heavyweight cotton tee with an original Game Reserve print by our in-house designers.',
    image:
      'https://images.pexels.com/photos/6131925/pexels-photo-6131925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'New',
  },
  {
    id: 'digital-sample-pack',
    name: 'Afro percussion sample pack',
    category: 'Digital',
    price: 42,
    summary: 'Over 300 royalty-free percussion one-shots and loops recorded in a live studio.',
    image:
      'https://images.pexels.com/photos/6862364/pexels-photo-6862364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'beat-golden-hour',
    name: 'Golden Hour beat licence',
    category: 'Beats',
    price: 50,
    summary: 'Uplifting Afrobeats instrumental with a full stem pack for commercial releases.',
    image:
      'https://images.pexels.com/photos/32215665/pexels-photo-32215665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'pkg-video',
    name: 'Music video package',
    category: 'Artist packages',
    price: 1200,
    summary: 'Concept development, a one-day shoot, edit and colour grade, with agreed deliverables.',
    image:
      'https://images.pexels.com/photos/6621440/pexels-photo-6621440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'digital-presets',
    name: 'Photo colour presets',
    category: 'Digital',
    price: 18,
    summary: 'A set of colour grading presets built from our photographers’ live shoots.',
    image:
      'https://images.pexels.com/photos/16135656/pexels-photo-16135656.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export interface Article {
  id: string;
  category: 'Interview' | 'Guide' | 'News' | 'Playlist';
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export const ARTICLES: Article[] = [
  {
    id: 'a-1',
    category: 'Interview',
    title: 'Inside the studio: how a mix engineer shapes a song',
    excerpt: 'A conversation about balance, space and the small decisions that make a track feel finished.',
    date: 'October 2026',
    readTime: '6 min read',
    image:
      'https://images.pexels.com/photos/39332198/pexels-photo-39332198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'a-2',
    category: 'Guide',
    title: 'Licensing a beat: what you need to know before you release',
    excerpt: 'Know the difference between leases, exclusive rights and stems before you publish your song.',
    date: 'October 2026',
    readTime: '4 min read',
    image:
      'https://images.pexels.com/photos/36936571/pexels-photo-36936571.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'a-3',
    category: 'News',
    title: 'Creative partners join Game Reserve Hub across West Africa',
    excerpt: 'Our local representatives are onboarding engineers, designers and performers for new regional projects.',
    date: 'October 2026',
    readTime: '3 min read',
    image:
      'https://images.pexels.com/photos/39190569/pexels-photo-39190569.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'a-4',
    category: 'Interview',
    title: 'From bedroom producer to booked DJ: a career in progress',
    excerpt: 'How one DJ turned mixes shared online into club nights and festival slots.',
    date: 'September 2026',
    readTime: '5 min read',
    image:
      'https://images.pexels.com/photos/9005458/pexels-photo-9005458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'a-5',
    category: 'Guide',
    title: 'Scoping a photo shoot so the price and the deliverables match',
    excerpt: 'A simple checklist for briefing photographers and videographers clearly.',
    date: 'September 2026',
    readTime: '4 min read',
    image:
      'https://images.pexels.com/photos/36697538/pexels-photo-36697538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'a-6',
    category: 'Playlist',
    title: 'Five new playlists from our curators this month',
    excerpt: 'Late-night soul, Accra street sounds, studio-ready afrobeats and more, picked by our team.',
    date: 'October 2026',
    readTime: '2 min listen',
    image:
      'https://images.pexels.com/photos/6131925/pexels-photo-6131925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export interface Playlist {
  id: string;
  title: string;
  mood: string;
  tracks: number;
  curator: string;
}

export const PLAYLISTS: Playlist[] = [
  { id: 'p-1', title: 'Late Night Soul', mood: 'Warm, slow, intimate', tracks: 24, curator: 'Editorial team' },
  { id: 'p-2', title: 'Accra Street Sounds', mood: 'Up-tempo and local', tracks: 30, curator: 'Ghana PR desk' },
  { id: 'p-3', title: 'Studio Ready', mood: 'Fresh mixes and demos', tracks: 18, curator: 'Talent scout' },
];

export const CONTACT_REQUEST_TYPES = [
  { value: 'brief', label: 'Submit a brief', description: 'Tell us what you need made or booked.' },
  { value: 'enquiry', label: 'Make an enquiry', description: 'Ask about a product, service or offer.' },
  { value: 'apply', label: 'Apply to join', description: 'Creatives: join the partner network.' },
  { value: 'partnership', label: 'Discuss a partnership', description: 'Brands, labels and event organisers.' },
] as const;

export type ContactRequestType = (typeof CONTACT_REQUEST_TYPES)[number]['value'];
