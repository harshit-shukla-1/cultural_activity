"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsJoining(true);

    const formData = new FormData(event.currentTarget);
    const code = String(formData.get("room-code")).trim().toUpperCase();
    const nickname = String(formData.get("nickname")).trim();
    const supabase = createClient();
    const { data: room, error: roomError } = await supabase
      .from("rooms")
      .select("id, status")
      .eq("code", code)
      .maybeSingle();

    if (roomError || !room) {
      setError(roomError?.message ?? "We could not find that room code.");
      setIsJoining(false);
      return;
    }

    if (room.status === "finished") {
      setError("This room has already finished.");
      setIsJoining(false);
      return;
    }

    const { error: participantError } = await supabase
      .from("participants")
      .insert({ room_id: room.id, nickname });

    if (participantError) {
      setError(participantError.code === "23505" ? "That name is already in this room." : participantError.message);
      setIsJoining(false);
      return;
    }

    setSubmitted(true);
    setIsJoining(false);
  }

  return (
    <main className="utility-page">
      <Link className="back-link" href="/">← Back to Sanskriti</Link>
      <div className="utility-grid">
        <section className="utility-intro">
          <p className="eyebrow"><span /> Participant room</p>
          <h1>Bring your<br /><em>curiosity.</em></h1>
          <p>Enter the room code from your presenter. Keep this window open for the full quiz.</p>
        </section>
        <section className="form-panel">
          {submitted ? (
            <div className="waiting-state">
              <span className="waiting-number">01</span>
              <p className="eyebrow"><span /> You&apos;re in</p>
              <h2>Welcome to<br /><em>the gathering.</em></h2>
              <p>Your presenter will begin the first story shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="room-code">Room code</label>
              <input id="room-code" name="room-code" placeholder="e.g. RAGA26" required />
              <label htmlFor="nickname">Your name</label>
              <input id="nickname" name="nickname" placeholder="How should we call you?" required />
              <button className="primary-button form-submit" disabled={isJoining} type="submit">{isJoining ? "Joining..." : "Enter the room"} <span>→</span></button>
              {error && <p className="form-error" role="alert">{error}</p>}
              <p className="form-footnote">No account needed. Your score will be saved with this activity.</p>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}