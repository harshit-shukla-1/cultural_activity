"use client";

import { useState } from "react";

const months = [
  { name: "July", hindi: "जुलाई", count: "04 events", active: true },
  { name: "August", hindi: "अगस्त", count: "06 events", active: false },
  { name: "September", hindi: "सितंबर", count: "05 events", active: false },
];

export default function Home() {
  const [language, setLanguage] = useState<"EN" | "DE">("EN");

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Sanskriti Sabha home">
          <span className="wordmark-mark" aria-hidden="true">
            ◈
          </span>
          <span>
            <strong>Sanskriti</strong>
            <small>India in celebration</small>
          </span>
        </a>

        <nav className="topnav" aria-label="Main navigation">
          <a className="active" href="#journey">The journey</a>
          <a href="#events">Events</a>
          <a href="#quiz">Quiz night</a>
        </nav>

        <div className="topbar-actions">
          <div className="language-switch" aria-label="Language selector">
            <button className={language === "EN" ? "selected" : ""} onClick={() => setLanguage("EN")}>
              EN
            </button>
            <button className={language === "DE" ? "selected" : ""} onClick={() => setLanguage("DE")}>
              DE
            </button>
          </div>
          <a className="admin-link" href="#admin">Admin <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy" id="journey">
          <p className="eyebrow"><span /> July — September 2026</p>
          <h1>A season of<br /><em>shared stories.</em></h1>
          <p className="hero-intro">
            A living tour through India&apos;s festivals, rituals, flavours and
            stories, made to be experienced together.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#events">Begin the journey <span>→</span></a>
            <span className="hero-note">{language === "EN" ? "Presented in English" : "Auf Deutsch präsentiert"}</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Decorative illustration inspired by Indian festival patterns">
          <div className="sun-disc"><span>भारत</span></div>
          <div className="art-ring ring-one" />
          <div className="art-ring ring-two" />
          <div className="petal petal-one" />
          <div className="petal petal-two" />
          <div className="petal petal-three" />
          <div className="petal petal-four" />
          <p className="art-caption">A shared<br /><strong>cultural atlas</strong></p>
        </div>
      </section>

      <section className="season-strip" id="events">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> The calendar</p>
            <h2>Three months.<br /><em>Many worlds.</em></h2>
          </div>
          <p className="section-description">Follow the rhythm of India&apos;s cultural calendar, from monsoon rituals to harvest celebrations.</p>
        </div>

        <div className="month-list">
          {months.map((month, index) => (
            <a className={`month-card ${month.active ? "active" : ""}`} href="#presentation" key={month.name}>
              <span className="month-index">0{index + 1}</span>
              <span className="month-name"><strong>{month.name}</strong><small>{month.hindi}</small></span>
              <span className="month-count">{month.count}</span>
              <span className="month-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="live-panel" id="quiz">
        <div className="live-marker"><span className="live-dot" /> Coming together live</div>
        <div className="live-content">
          <div>
            <p className="eyebrow"><span /> The gathering</p>
            <h2>Listen closely.<br /><em>Play boldly.</em></h2>
          </div>
          <div className="live-description">
            <p>After the stories comes the game. Join the room, test what you know, and see where your curiosity takes you.</p>
            <div className="mode-actions">
                <a className="primary-button light" href="/join">Join a room <span>→</span></a>
                <a className="text-button" href="/present">I&apos;m presenting <span>↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" id="admin">
        <span>Sanskriti Sabha / 2026</span>
        <span>For curious people, everywhere.</span>
      </footer>
    </main>
  );
}
