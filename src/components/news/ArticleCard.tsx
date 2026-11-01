import { Clock } from 'lucide-react';
import type { Article } from '@/data/site';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[16/10] overflow-hidden bg-neutral-200">
        <img
          src={article.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
          <span className="rounded-full bg-primary-100 px-2.5 py-1 text-primary-800">{article.category}</span>
          <span className="text-neutral-500">{article.date}</span>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-neutral-950">{article.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{article.excerpt}</p>
        <p className="mt-5 flex items-center gap-1.5 text-xs font-medium text-neutral-500">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {article.readTime}
        </p>
      </div>
    </article>
  );
}
