import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/data/site';
import { hrefTo } from '@/lib/router';

interface ProductCardProps {
  product: Product;
}

export function formatPrice(price: number | string): string {
  if (typeof price === 'string') {
    return price.includes('GH₵') ? price : `GH₵ ${price.replace(/\$/g, '').trim()}`;
  }
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS',
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white font-sans transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
        <img
          src={product.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold tracking-tight text-white">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary-800">{product.category}</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-neutral-950">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{product.summary}</p>
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-neutral-100 pt-5">
          <p className="text-lg font-semibold tracking-tight text-neutral-950">
            {formatPrice(product.price)}
            <span className="ml-1 text-xs font-normal text-neutral-500">from</span>
          </p>
          <a
            href={hrefTo('/contact', { type: 'enquiry', product: product.name })}
            className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium tracking-tight text-white transition-colors hover:bg-primary-600"
          >
            Enquire
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}