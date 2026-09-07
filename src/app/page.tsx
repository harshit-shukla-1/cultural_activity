"use client";

import { useState } from "react";
import Image from "next/image";
import { copy, eventContent } from "./content";

export default function Home() {
  const [language, setLanguage] = useState<"EN" | "DE">("EN");
  const text = copy[language];

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
          <a className="active" href="#journey">{text.navJourney}</a>
          <a href="#events">{text.navEvents}</a>
          <a href="/quiz">{text.navQuiz}</a>
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
          <a className="admin-link" href="/admin">{text.admin} <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy" id="journey">
          <p className="eyebrow"><span /> {text.period}</p>
          <h1>{text.titleA}<br /><em>{text.titleB}</em></h1>
          <p className="hero-intro">{text.intro}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#events">{text.begin} <span>→</span></a>
            <span className="hero-note">{text.presented}</span>
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
          <p className="art-caption">{text.atlasA}<br /><strong>{text.atlasB}</strong></p>
        </div>
      </section>

      <section className="season-strip" id="events">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> {text.calendar}</p>
            <h2>{text.monthsA}<br /><em>{text.monthsB}</em></h2>
          </div>
          <p className="section-description">{text.calendarIntro}</p>
        </div>

        <div className="month-list">
          {eventContent.map((month, index) => (
            <a className={`month-card ${index === 0 ? "active" : ""}`} href={`#${month.month.toLowerCase()}`} key={month.month}>
              <span className="month-index">0{index + 1}</span>
              <span className="month-name"><strong>{month.month}</strong><small>{month.hindi}</small></span>
              <span className="month-count">{month.events.length.toString().padStart(2, "0")} {text.events}</span>
              <span className="month-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <div className="event-grid" id="presentation">
          {eventContent.map((month) => <div className="event-month" id={month.month.toLowerCase()} key={month.month}>
            <h3>{language === "DE" ? month.month === "July" ? "Juli" : month.month === "August" ? "August" : "September" : month.month}</h3>
            <div className="event-cards">{month.events.map((event) => <article className="event-card" key={event.name}><Image src={event.image} alt={language === "DE" ? event.de : event.name} width={640} height={360} /><div className="event-card-body"><span>{language === "DE" ? event.placeDe : event.place}</span><h4>{language === "DE" ? event.de : event.name}</h4><p>{language === "DE" ? event.textDe : event.text}</p></div></article>)}</div>
          </div>)}
        </div>
      </section>

      <section className="live-panel" id="quiz">
        <div className="live-marker"><span className="live-dot" /> {text.live}</div>
        <div className="live-content">
          <div>
            <p className="eyebrow"><span /> {text.gathering}</p>
            <h2>{text.listenA}<br /><em>{text.listenB}</em></h2>
          </div>
          <div className="live-description">
            <p>{text.quizIntro}</p>
            <div className="mode-actions">
              <a className="primary-button light" href="/join">{text.join} <span>→</span></a>
              <a className="text-button" href="/present">{text.presenting} <span>↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" id="admin">
        <span>Sanskriti Sabha / 2026</span>
        <span>{text.footer}</span>
      </footer>
    </main>
  );
}
