export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="/" aria-label="JULVALD 首页"><span className="prompt">~/</span>JULVALD</a>
        <nav className="quick-nav" aria-label="快捷导航">
          <a href="/#work">项目</a>
          <a href="/#notes">文章</a>
          <a href="/#about">关于</a>
          <a href="/#contact">联系</a>
        </nav>
        <a className="header-link" href="https://github.com/julvald" target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </header>
  );
}
