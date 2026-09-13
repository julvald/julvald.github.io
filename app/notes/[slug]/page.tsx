import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DetailPage } from '@/components/detail-page';
import { getNote, notes } from '@/lib/content';

export const dynamicParams = false;

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return { title: '文章未找到 — JULVALD' };
  return {
    title: `${note.title} — JULVALD`,
    description: note.summary,
    openGraph: { title: `${note.title} — JULVALD`, description: note.summary },
    twitter: { title: `${note.title} — JULVALD`, description: note.summary },
  };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();
  const next = notes[(notes.indexOf(note) + 1) % notes.length];
  return <DetailPage eyebrow="FIELD NOTE / WRITING" title={note.title} summary={note.summary} meta={`${note.category} · ${note.readingTime}`} sections={note.sections} backHref="/#notes" backLabel="返回文章" nextHref={`/notes/${next.slug}/`} nextTitle={next.title} />;
}
