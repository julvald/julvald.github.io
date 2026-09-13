import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DetailPage } from '@/components/detail-page';
import { getProject, projects } from '@/lib/content';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: '项目未找到 — JULVALD' };
  return {
    title: `${project.name} — JULVALD`,
    description: project.summary,
    openGraph: { title: `${project.name} — JULVALD`, description: project.summary },
    twitter: { title: `${project.name} — JULVALD`, description: project.summary },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <DetailPage eyebrow="PROJECT / CONCEPT" title={project.name} summary={project.summary} meta={project.meta} sections={project.sections} backHref="/#work" backLabel="返回项目" nextHref={`/projects/${next.slug}/`} nextTitle={next.name} />;
}
