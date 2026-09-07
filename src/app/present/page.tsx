"use client";

import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

const months = ["July", "August", "September"];

export default function PresentPage() {
  const [roomCode, setRoomCode] = useState<string | null>(null);
  const [isStarting, setIsStarting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startRoom() {
    setError(null);
    setIsStarting(true);
    const supabase = createClient();
    const { data: presentation, error: presentationError } = await supabase
      .from("presentations")
      .select("id")
      .eq("slug", "india-2026")
      .maybeSingle();

    if (presentationError || !presentation) {
      setError("Create the India 2026 presentation in the Admin workspace first.");
      setIsStarting(false);
      return;
    }

    const code = Math.random().toString(36).slice(2, 8).toUpperCase();
    const { data: room, error: roomError } = await supabase
      .from("rooms")
      .insert({ presentation_id: presentation.id, code, status: "lobby", language: "en" })
      .select("code")
      .single();

    if (roomError || !room) {
      setError(roomError?.message ?? "The room could not be created.");
      setIsStarting(false);
      return;
    }

    setRoomCode(room.code);
    setIsStarting(false);
  }

  return (
    <main className="utility-page presenter-page">
      <div className="presenter-topbar">
        <Link className="wordmark" href="/">
          <span className="wordmark-mark" aria-hidden="true">◈</span>
          <span><strong>Sanskriti</strong><small>Presenter studio</small></span>
        </Link>
        <span className="room-status"><span className="live-dot" /> Room not started</span>
        <Link className="back-link" href="/">Exit studio</Link>
      </div>
      <section className="presenter-console">
        <div className="console-header">
          <div><p className="eyebrow"><span /> Live controls</p><h1>Ready to<br /><em>gather.</em></h1></div>
          <div className="session-card"><span>Session code</span><strong>{roomCode ?? "------"}</strong><small>{roomCode ? "Share with your participants" : "Start a room to generate a code"}</small></div>
        </div>
        <div className="control-grid">
          <button className="control-card featured" disabled={isStarting} onClick={startRoom}><span className="control-number">01</span><strong>{isStarting ? "Opening room..." : "Begin presentation"}</strong><small>Open the shared cultural journey</small><span className="control-arrow">→</span></button>
          <button className="control-card"><span className="control-number">02</span><strong>Start the quiz</strong><small>15 questions · live scoring</small><span className="control-arrow">→</span></button>
          <div className="room-panel"><span className="control-number">03</span><strong>Participants</strong><b>0</b><small>Waiting to join</small></div>
        </div>
        {error && <p className="presenter-error" role="alert">{error}</p>}
        <div className="month-tabs">{months.map((month, index) => <button className={index === 0 ? "active" : ""} key={month}>{month}</button>)}</div>
      </section>
    </main>
  );
}