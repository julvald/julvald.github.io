import { notes, projects } from '@/lib/content';

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> JULVALD / ENGINEER & BUILDER</p>
          <h1>构建长期可用的<br /><span>软件与系统。</span></h1>
          <p className="lede">关注底层原理、开发工具与开放技术。相信清晰胜过聪明，可靠胜过新奇。</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">探索项目 <span>↓</span></a>
            <a className="button ghost" href="#notes">阅读文章</a>
          </div>
        </div>
        <div className="terminal" aria-label="个人状态终端">
          <div className="terminal-bar"><div className="terminal-dots"><i /><i /><i /></div><span>julvald@home:~</span></div>
          <div className="terminal-body">
            <p><b>$</b> whoami</p><p className="output">engineer / builder / lifelong learner</p>
            <p><b>$</b> cat focus.txt</p><p className="output">systems, tools, open source</p>
            <p><b>$</b> uptime</p><p className="output">learning continuously</p>
            <p className="cursor-line"><b>$</b> <span className="cursor" /></p>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="技术方向"><span>01 / SYSTEMS</span><span>02 / OPEN SOURCE</span><span>03 / DEVELOPER TOOLS</span><span>04 / WRITING</span></section>

      <section className="section" id="work">
        <div className="section-heading">
          <div><p className="kicker">SELECTED WORK</p><h2>项目空间</h2></div>
          <p>从问题出发，留下清晰的设计过程。</p>
        </div>
        <p className="demo-label">下列为可点击的概念示例，后续可替换为真实作品。</p>
        <div className="project-list">
          {projects.map((project, index) => (
            <a className="project-row" href={`/projects/${project.slug}/`} key={project.slug}>
              <span className="project-index">0{index + 1}</span>
              <div className="project-main"><div className="project-title"><h3>{project.name}</h3><span className="badge">{project.status}</span></div><p>{project.description}</p></div>
              <span className="project-meta">{project.meta}</span><span className="arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="split-section" id="notes">
        <div className="split-intro">
          <p className="kicker">FIELD NOTES</p><h2>从实践中<br />写下来的东西。</h2>
          <p>关于工程判断、系统设计，以及如何把问题说清楚。</p>
          <a href={`/notes/${notes[0].slug}/`}>从第一篇开始 →</a>
        </div>
        <div className="note-list">
          {notes.map((note, index) => (
            <a href={`/notes/${note.slug}/`} className="note" key={note.slug}>
              <span>0{index + 1}</span>
              <div><small>{note.category} · 示例文章 · {note.readingTime}</small><h3>{note.title}</h3></div>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <p className="kicker">/ PHILOSOPHY</p>
        <blockquote>“好技术应该让复杂的问题变得可以理解，而不是让简单的问题看起来很复杂。”</blockquote>
        <div className="principles"><p><span>01</span> 先理解问题，再选择工具。</p><p><span>02</span> 默认保持简单，直到证据要求复杂。</p><p><span>03</span> 写给人读，顺便让机器执行。</p></div>
      </section>
    </main>
  );
}
