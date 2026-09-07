import Link from "next/link";

const contentGroups = [
  { label: "Festival stories", detail: "15 events across 3 months", icon: "✦" },
  { label: "Presentation slides", detail: "18 slides in the journey", icon: "▧" },
  { label: "Quiz questions", detail: "20 questions · bilingual", icon: "?" },
];

export default function AdminPage() {
  return (
    <main className="admin-page">
      <header className="admin-header">
        <Link className="wordmark" href="/"><span className="wordmark-mark" aria-hidden="true">◈</span><span><strong>Sanskriti</strong><small>Content studio</small></span></Link>
        <div className="admin-header-right"><span>Admin workspace</span><Link href="/">View activity ↗</Link></div>
      </header>
      <section className="admin-intro">
        <p className="eyebrow"><span /> 2026 cultural calendar</p>
        <h1>Shape the<br /><em>story.</em></h1>
        <p>Keep every event, slide and question ready for the next gathering.</p>
      </section>
      <section className="content-groups">
        {contentGroups.map((group, index) => (
          <button className="content-group" key={group.label}>
            <span className="content-icon">{group.icon}</span>
            <span className="content-index">0{index + 1}</span>
            <span className="content-copy"><strong>{group.label}</strong><small>{group.detail}</small></span>
            <span className="month-arrow">↗</span>
          </button>
        ))}
      </section>
      <div className="admin-footer"><span>Last published · Not yet published</span><button className="primary-button">Publish changes <span>→</span></button></div>
    </main>
  );
}