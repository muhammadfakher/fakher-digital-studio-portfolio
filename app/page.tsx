"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const contactEmail = "nadeemfakher02@gmail.com";
const phoneNumber = "+923224791519";
const whatsappUrl =
  "https://wa.me/923224791519?text=Hi%20Fakher%2C%20I%27d%20like%20to%20discuss%20a%20remote%20role%20or%20video%20project.";

const services = [
  {
    number: "01",
    title: "Video Editing",
    text: "Social reels, YouTube videos and brand promos shaped with clear pacing, captions, transitions and sound.",
    tags: ["Reels & Shorts", "YouTube", "Brand promos"],
  },
  {
    number: "02",
    title: "Graphic Design",
    text: "Strong visual assets that help a creator or business look consistent wherever people find them.",
    tags: ["Thumbnails", "Social graphics", "Campaign visuals"],
  },
  {
    number: "03",
    title: "AI Video & Storytelling",
    text: "AI-generated scenes and story-led videos, planned and edited into a complete viewing experience.",
    tags: ["AI video", "Story scenes", "Concept to edit"],
  },
];

const workSamples = [
  {
    title: "Cafe Social Reel",
    category: "FOOD & HOSPITALITY",
    details: "Social reel · 15 sec · Vertical",
    video: "/work/cafe-reel.mp4",
    poster: "/work/cafe-reel-poster.jpg",
    layout: "portrait",
  },
  {
    title: "Wix Corporate Website Edit",
    category: "CORPORATE VIDEO",
    details: "LinkedIn edit · 45 sec",
    video: "/work/linkedin-corporate-edit.mp4",
    poster: "/work/linkedin-corporate-edit-poster.jpg",
    layout: "landscape",
  },
  {
    title: "Sauga City Rentals",
    category: "BRAND PROMO",
    details: "Rental brand video · 37 sec",
    video: "/work/sauga-city-rentals.mp4",
    poster: "/work/sauga-city-rentals-poster.jpg",
    layout: "landscape",
  },
  {
    title: "Dastaan-e-Jurm",
    category: "AI STORY VIDEO",
    details: "AI-generated story · 4 min 48 sec",
    video: "/work/dastaan-e-jurm-ai-story.mp4",
    poster: "/work/dastaan-e-jurm-ai-story-poster.jpg",
    layout: "landscape",
  },
];

const tools = [
  "Adobe Premiere Pro",
  "CapCut Pro",
  "Photoshop",
  "Runway",
  "Pika",
  "PixVerse",
  "InShot",
  "Clipchamp",
];

const process = [
  ["01", "Understand", "We agree on the goal, audience and style."],
  ["02", "Shape the story", "I plan the edit around the message and platform."],
  ["03", "Create", "The video and supporting visuals come together."],
  ["04", "Deliver", "You receive finished files ready to publish."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    document.documentElement.classList.add("has-scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-scroll-reveal");
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">FN</span>
          <span>FAKHER NADEEM<span className="brand-dot">.</span></span>
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
        </button>

        <div
          className={`nav-links ${menuOpen ? "open" : ""}`}
          id="primary-navigation"
        >
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-cta" href={`mailto:${contactEmail}`} onClick={closeMenu}>
            Hire me
          </a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span className="status-dot" /> OPEN TO FULLY REMOTE WORK</p>
          <p className="hero-role">VIDEO EDITOR <span>·</span> GRAPHIC DESIGNER <span>·</span> AI VIDEO CREATOR</p>
          <h1>Stories that<br /><em>stop the<br />scroll.</em></h1>
          <p className="hero-text">
            I&apos;m Fakher Nadeem. I edit videos, design thumbnails and create
            AI-generated stories for brands and creators. Open to remote
            full-time and part-time roles.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View my work</a>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              Message me on WhatsApp
            </a>
          </div>
          <div className="hero-location">
            <span className="location-mark" aria-hidden="true">◎</span>
            Karachi, Pakistan <span className="hero-location-divider">/</span> Working worldwide, remotely
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="portrait-frame">
            <Image
              className="hero-photo"
              src="/images/fakher-nadeem.webp"
              alt="Portrait of Fakher Nadeem"
              fill
              quality={92}
              priority
              sizes="(max-width: 800px) 88vw, 42vw"
            />
            <div className="portrait-shade" />
            <div className="portrait-caption">
              <span>FAKHER NADEEM</span>
              <strong>Editor. Designer. Storyteller.</strong>
            </div>
            <div className="portrait-index" aria-hidden="true">FN / 01</div>
          </div>
          <div className="availability-card">
            <span className="availability-icon" aria-hidden="true">↗</span>
            <span><b>Available for remote roles</b><small>Full-time · Part-time</small></span>
          </div>
          <div className="visual-caption">VIDEO · DESIGN · AI STORIES</div>
        </div>
      </section>

      <div className="ticker" aria-label="Video editing, AI storytelling, and graphic design">
        <div>
          VIDEO EDITING <i>✳</i> AI STORYTELLING <i>✳</i> THUMBNAIL DESIGN <i>✳</i> SOCIAL GRAPHICS <i>✳</i>
          VIDEO EDITING <i>✳</i> AI STORYTELLING <i>✳</i> THUMBNAIL DESIGN <i>✳</i> SOCIAL GRAPHICS <i>✳</i>
        </div>
      </div>

      <section className="section shell work-section" id="work">
        <div className="section-heading work-heading" data-reveal>
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Made to be<br /><em>watched.</em></h2>
          </div>
          <p className="section-intro">
            Video edits, a brand promo and an AI-generated story. Press play to
            watch each sample.
          </p>
        </div>

        <div className="project-grid">
          {workSamples.map((sample, index) => (
            <article className="project-card" key={sample.title} data-reveal>
              <div className={`project-media project-media-${sample.layout}`}>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={sample.poster}
                  aria-label={`Play ${sample.title}`}
                >
                  <source src={sample.video} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
                <span className="project-index">0{index + 1}</span>
              </div>
              <div className="project-info">
                <div>
                  <p className="project-type">{sample.category}</p>
                  <h3>{sample.title}</h3>
                  <p className="project-details">{sample.details}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">HOW I CAN HELP</p>
            <h2>Creative work,<br /><em>made clear.</em></h2>
            <p className="section-intro">
              From the first idea to a polished file ready for your audience.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number} data-reveal>
                <span className="service-number">{service.number}</span>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul className="service-tags">
                    {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section shell" data-reveal>
        <div>
          <p className="eyebrow">EXPERIENCE</p>
          <h2>Creative work<br /><em>for real teams.</em></h2>
        </div>
        <article className="experience-card">
          <div className="experience-mark">360</div>
          <div>
            <p className="experience-label">VIDEO EDITOR</p>
            <h3>360 Tech Solution</h3>
            <p>Video editing experience with a creative team, shaping content for digital audiences.</p>
          </div>
          <span className="experience-dot" aria-hidden="true" />
        </article>
      </section>

      <section className="tools-section">
        <div className="shell tools-inner" data-reveal>
          <div>
            <p className="eyebrow">TOOLS I USE</p>
            <h2>Built with the<br /><em>right toolkit.</em></h2>
          </div>
          <ul className="tool-list">
            {tools.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
        </div>
      </section>

      <section className="section shell about-section" id="about">
        <div className="about-grid">
          <div data-reveal>
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Good stories<br /><em>stay with us.</em></h2>
          </div>
          <div className="about-copy" data-reveal>
            <p>
              I&apos;m Fakher Nadeem, a video editor and graphic designer based
              in Karachi, Pakistan. I worked as a video editor with 360 Tech
              Solution and create edits that feel clear, intentional and right
              for their platform.
            </p>
            <p>
              I also make AI-generated story videos, YouTube thumbnails and
              social graphics. I&apos;m looking for fully remote opportunities,
              full-time or part-time.
            </p>
            <a className="text-link" href={`mailto:${contactEmail}`}>Let&apos;s talk about your team</a>
          </div>
        </div>
      </section>

      <section className="process-section shell">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">A SIMPLE WORKFLOW</p>
          <h2>From brief<br /><em>to publish.</em></h2>
        </div>
        <div className="process-grid">
          {process.map(([number, title, text]) => (
            <article key={number} data-reveal>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <div className="contact-panel" data-reveal>
          <p className="eyebrow">READY TO WORK TOGETHER?</p>
          <h2>Bring me into<br /><em>your next <span className="contact-title-break">project.</span></em></h2>
          <p className="contact-copy">
            Available for fully remote video editing and design roles, full-time
            or part-time.
          </p>
          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${contactEmail}`}>Email Fakher</a>
            <a className="button button-outline" href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div>
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">FN</span>
            <span>FAKHER NADEEM<span className="brand-dot">.</span></span>
          </a>
          <p>Video Editor · Graphic Designer · AI Video Creator</p>
        </div>
        <address className="footer-links">
          <a href={`tel:${phoneNumber}`}>+92 322 479 1519</a>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href="#top">Back to top</a>
        </address>
        <small>© {new Date().getFullYear()} Fakher Nadeem · Karachi, Pakistan</small>
      </footer>
    </main>
  );
}
