"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Video Editing",
    text: "Shorts, reels, YouTube videos and story-led edits with strong hooks, pacing, captions and sound design.",
    tag: "For creators",
  },
  {
    number: "02",
    title: "Graphic Design",
    text: "Scroll-stopping thumbnails, social media creatives, campaign graphics and visual identities.",
    tag: "For brands",
  },
  {
    number: "03",
    title: "Web Development",
    text: "Fast, responsive portfolio, business, ecommerce and custom web experiences that look credible and convert.",
    tag: "For business",
  },
  {
    number: "04",
    title: "AI Solutions",
    text: "AI-assisted content workflows, automations and practical digital systems that save time and scale output.",
    tag: "For growth",
  },
];

const projects = [
  { type: "Video Edit", title: "Story-led social content", meta: "Reels / Shorts", tone: "coral" },
  { type: "Web Build", title: "Modern business presence", meta: "Responsive website", tone: "blue" },
  { type: "Thumbnail", title: "Designed to earn the click", meta: "YouTube creative", tone: "lime" },
  { type: "AI Workflow", title: "From idea to publish", meta: "Content system", tone: "violet" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Fakher Digital Studio home">
          <span className="brand-mark">FN</span>
          <span>FAKHER<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /> <span />
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="nav-cta" href="mailto:nadeemfakher02@gmail.com">Let&apos;s talk <span>↗</span></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> OPEN TO REMOTE WORK</p>
          <h1>Ideas into<br /><em>impact.</em></h1>
          <p className="hero-text">I create content, websites and digital experiences that help creators and businesses look sharper, move faster and grow.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span>↗</span></a>
            <a className="text-link" href="mailto:nadeemfakher02@gmail.com">Start a project <span>↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract creative studio artwork">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="art-card art-card-main"><span>CREATE</span><strong>with intent.</strong></div>
          <div className="art-card art-card-small"><span>FN / 01</span><strong>digital<br />studio</strong></div>
          <div className="art-grid" />
          <div className="rotating-label">CONTENT • DESIGN • CODE • AI •</div>
        </div>
      </section>

      <div className="ticker"><div>VIDEO EDITING <i>✦</i> GRAPHIC DESIGN <i>✦</i> WEB DEVELOPMENT <i>✦</i> AI SOLUTIONS <i>✦</i> VIDEO EDITING <i>✦</i> GRAPHIC DESIGN <i>✦</i></div></div>

      <section className="section shell" id="services">
        <div className="section-heading"><p className="eyebrow">WHAT I DO</p><h2>Built for the<br /><em>next move.</em></h2><p className="section-intro">One creative partner for the pieces that make your digital presence feel complete.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><div><p className="service-tag">{service.tag}</p><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Discuss ${service.title}`}>Discuss a project <span>↗</span></a></div></article>)}</div>
      </section>

      <section className="section work-section shell" id="work">
        <div className="section-heading work-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>A few things<br /><em>in the making.</em></h2></div><p className="section-intro">The gallery is ready for your real videos, thumbnails and projects. These concept cards give the portfolio a strong starting point.</p></div>
        <div className="project-grid">{projects.map((project, index) => <article className={`project-card ${project.tone}`} key={project.title}><div className="project-visual"><span className="project-index">0{index + 1}</span><span className="project-type">{project.type}</span>{index === 0 && <div className="play-symbol">▶</div>}{index === 1 && <div className="browser-lines"><i /><i /><i /><b /></div>}{index === 2 && <div className="thumb-word">MAKE<br /><span>THE CLICK</span></div>}{index === 3 && <div className="flow-symbol">IDEA <b>→</b> OUTPUT</div>}</div><div className="project-info"><div><h3>{project.title}</h3><p>{project.meta}</p></div><span className="circle-arrow">↗</span></div></article>)}</div>
      </section>

      <section className="about-section" id="about"><div className="shell about-grid"><div><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Creative thinking.<br /><em>Technical finish.</em></h2></div><div className="about-copy"><p>I&apos;m Muhammad Fakher Nadeem, a multidisciplinary digital creator based in Karachi, Pakistan. I bring together visual storytelling, design and development to turn rough ideas into work people remember.</p><p>Whether you need a sharper reel, a stronger thumbnail, a credible website or an AI-powered workflow, I can help take it from first idea to final delivery.</p><a className="text-link" href="mailto:nadeemfakher02@gmail.com">Let&apos;s build something useful <span>↗</span></a></div></div></section>

      <section className="process-section shell"><div className="section-heading"><p className="eyebrow">HOW IT WORKS</p><h2>Simple process.<br /><em>Strong output.</em></h2></div><div className="process-grid"><div><span>01</span><h3>Brief</h3><p>We define the goal, audience and creative direction.</p></div><div><span>02</span><h3>Build</h3><p>I turn the direction into a polished first version.</p></div><div><span>03</span><h3>Refine</h3><p>We review, improve and prepare everything for launch.</p></div><div><span>04</span><h3>Deliver</h3><p>You receive clean, ready-to-use final files.</p></div></div></section>

      <section className="contact-section shell" id="contact"><div className="contact-panel"><p className="eyebrow">HAVE A PROJECT?</p><h2>Let&apos;s make your<br /><em>next move.</em></h2><a className="button button-light" href="mailto:nadeemfakher02@gmail.com">nadeemfakher02@gmail.com <span>↗</span></a></div></section>

      <footer className="footer shell"><div><a className="brand" href="#top"><span className="brand-mark">FN</span><span>FAKHER<span className="brand-dot">.</span></span></a><p>Digital creator & developer in Karachi.</p></div><div className="footer-links"><a href="tel:+923224791519">+92 322 4791519</a><a href="mailto:nadeemfakher02@gmail.com">Email me</a><a href="#top">Back to top ↑</a></div><small>© {new Date().getFullYear()} Muhammad Fakher Nadeem</small></footer>
    </main>
  );
}
