import type { ContentSection } from '@/lib/content';

type DetailPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  meta: string;
  sections: ContentSection[];
  backHref: string;
  backLabel: string;
  nextHref: string;
  nextTitle: string;
};

export function DetailPage({ eyebrow, title, summary, meta, sections, backHref, backLabel, nextHref, nextTitle }: DetailPageProps) {
  return (
    <main className="detail-page" id="top">
      <div className="detail-hero">
        <a className="back-link" href={backHref}>← {backLabel}</a>
        <p className="kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="detail-summary">{summary}</p>
        <div className="detail-meta"><span>内容示例</span><span>{meta}</span></div>
      </div>

      <div className="detail-layout">
        <aside className="detail-aside" aria-label="本页目录">
          <p>本页目录</p>
          {sections.map((section, index) => <a key={section.heading} href={`#section-${index + 1}`}>{String(index + 1).padStart(2, '0')} / {section.heading}</a>)}
        </aside>
        <article className="detail-article">
          <p className="sample-notice">这是展示网站阅读体验的示例内容，不代表已完成的真实项目或已发表文章。</p>
          {sections.map((section, index) => (
            <section key={section.heading} id={`section-${index + 1}`}>
              <p className="section-number">{String(index + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}</p>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <a className="next-card" href={nextHref}><span>继续阅读</span><strong>{nextTitle}</strong><b aria-hidden="true">↗</b></a>
        </article>
      </div>
    </main>
  );
}
