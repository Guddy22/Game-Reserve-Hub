import { useMemo, useState } from 'react';
import { ClipboardCheck, PackageCheck, Send } from 'lucide-react';
import ProductCard from '@/components/shop/ProductCard';
import { PageHero, SectionHeading } from '@/components/ui/PageSections';
import { PRODUCT_CATEGORIES, PRODUCTS } from '@/data/site';

type CategoryFilter = (typeof PRODUCT_CATEGORIES)[number];

const STEPS = [
  {
    icon: Send,
    title: 'Send an enquiry',
    description: 'Tell us which product or package you want and any details that matter to you.',
  },
  {
    icon: ClipboardCheck,
    title: 'Confirm the offer',
    description: 'We confirm the price, any savings and the deliverables before anything is charged.',
  },
  {
    icon: PackageCheck,
    title: 'Receive your work',
    description: 'Files, licences or bookings are delivered to you by the creative behind the work.',
  },
];

export default function ShopPage() {
  const [category, setCategory] = useState<CategoryFilter>('All');

  const visibleProducts = useMemo(
    () => {
      const filtered = category === 'All' ? PRODUCTS : PRODUCTS.filter((product) => product.category === category);
      
      // Convert dollar signs ($) to Ghana Cedi (GH₵) across all visible products
      return filtered.map((product) => ({
        ...product,
        price: typeof product.price === 'string' 
          ? product.price.replace(/\$/g, 'GH₵ ') 
          : product.price,
      }));
    },
    [category],
  );

  return (
    <div className="font-['Neue_Haas_Grotesk_Text','Helvetica_Neue',Helvetica,Arial,sans-serif] antialiased tracking-tight">
      <PageHero
        eyebrow="Shop"
        title="Buy beats, merchandise, artwork and artist packages"
        description="Original work from the Game Reserve community. Every product is delivered by the creative who made it, with clearly scoped terms."
        image="https://images.pexels.com/photos/6862364/pexels-photo-6862364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        imageAlt="Vintage vinyl records on display in a shop"
      />

      <section className="bg-neutral-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Catalogue" title="Browse by category" />
            <div role="tablist" aria-label="Filter products" className="flex flex-wrap gap-2">
              {PRODUCT_CATEGORIES.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={category === item}
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    category === item
                      ? 'bg-neutral-900 text-white'
                      : 'bg-white text-neutral-700 ring-1 ring-neutral-200 hover:ring-neutral-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="How ordering works" title="From enquiry to delivery in three steps" />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-neutral-200 p-8">
                <div className="flex items-center justify-between">
                  <step.icon className="h-6 w-6 text-primary-700" aria-hidden="true" />
                  <span className="text-3xl font-semibold text-neutral-300">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-neutral-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}