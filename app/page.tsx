const projects = [
  { name: 'tiny-runtime', description: '一个用来理解调度、内存与并发的实验性运行时。', meta: 'C · Systems', status: 'active' },
  { name: 'packet-lab', description: '面向开发者的网络诊断工具，输出尽可能接近事实。', meta: 'Rust · Networking', status: 'stable' },
  { name: 'plain-notes', description: '以纯文本为核心的技术笔记与发布系统。', meta: 'TypeScript · Web', status: 'building' },
];

const notes = [
  ['2026-08-18', '软件的复杂度，通常从“以后也许会用”开始'],
  ['2026-07-29', '一次没有框架的 Web 性能实验'],
  ['2026-06-11', '读代码时，我到底在寻找什么'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="返回首页"><span className="prompt">~/</span>julvald.com</a>
        <nav aria-label="主导航"><a href="#work">项目</a><a href="#notes">文章</a><a href="#about">关于</a></nav>
        <a className="header-link" href="mailto:hello@example.com">联系我 ↗</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR GOOD PROBLEMS</p>
          <h1>构建长期可用的<br /><span>软件与系统。</span></h1>
          <p className="lede">我是一名关注底层原理、开发工具与开放技术的工程师。相信清晰胜过聪明，可靠胜过新奇。</p>
          <div className="hero-actions"><a className="button primary" href="#work">查看项目 <span>↓</span></a><a className="button ghost" href="#notes">阅读笔记</a></div>
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
        <div className="section-heading"><div><p className="kicker">SELECTED WORK</p><h2>正在构建</h2></div><p>少做一些，但把它们做扎实。</p></div>
        <div className="project-list">
          {projects.map((project, index) => (
            <a className="project-row" href="#contact" key={project.name}>
              <span className="project-index">0{index + 1}</span>
              <div className="project-main"><div className="project-title"><h3>{project.name}</h3><span className={`badge ${project.status}`}>{project.status}</span></div><p>{project.description}</p></div>
              <span className="project-meta">{project.meta}</span><span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="split-section" id="notes">
        <div className="split-intro"><p className="kicker">FIELD NOTES</p><h2>从实践中<br />写下来的东西。</h2><p>关于工程判断、系统设计，以及偶尔失败的实验。</p><a href="#contact">浏览全部文章 →</a></div>
        <div className="note-list">
          {notes.map(([date, title], index) => <a href="#contact" className="note" key={title}><span>0{index + 1}</span><div><time>{date}</time><h3>{title}</h3></div><b>↗</b></a>)}
        </div>
      </section>

      <section className="about" id="about">
        <p className="kicker">/ PHILOSOPHY</p>
        <blockquote>“好技术应该让复杂的问题变得可以理解，而不是让简单的问题看起来很复杂。”</blockquote>
        <div className="principles"><p><span>01</span> 先理解问题，再选择工具。</p><p><span>02</span> 默认保持简单，直到证据要求复杂。</p><p><span>03</span> 写给人读，顺便让机器执行。</p></div>
      </section>

      <footer id="contact">
        <div><p className="kicker">LET&apos;S TALK</p><h2>有值得解决的问题？</h2></div>
        <a className="contact-link" href="mailto:hello@example.com">hello@example.com <span>↗</span></a>
        <div className="footer-bottom"><p>© 2026 JULVALD · Built with restraint.</p><div><a href="#">GitHub</a><a href="#">LinkedIn</a><a href="#top">回到顶部 ↑</a></div></div>
      </footer>
    </main>
  );
}
