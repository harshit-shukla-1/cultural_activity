"use client";

import Link from "next/link";
import { useState } from "react";

const questions = [
  { question: "Which festival honours teachers and mentors?", answer: "Guru Purnima", options: ["Bonalu", "Guru Purnima", "Teej", "Onam"] },
  { question: "Which festival is known for colourful flower carpets in Kerala?", answer: "Onam", options: ["Onam", "Paryushan", "Raksha Bandhan", "Nuakhai"] },
  { question: "What is tied between siblings during Raksha Bandhan?", answer: "A rakhi", options: ["A garland", "A rakhi", "A scarf", "A flower crown"] },
  { question: "Which celebration features long snake boats in Kerala?", answer: "Nehru Trophy Boat Race", options: ["Nehru Trophy Boat Race", "Behdienkhlam", "Janmashtami", "Bonalu"] },
  { question: "Which deity is celebrated during Ganesh Chaturthi?", answer: "Ganesha", options: ["Krishna", "Ganesha", "Shiva", "Vishwakarma"] },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const question = questions[current];

  function answer(option: string) {
    if (option === question.answer) setScore((value) => value + 1);
    if (current === questions.length - 1) setFinished(true);
    else setCurrent((value) => value + 1);
  }

  return <main className="quiz-page">
    <Link className="back-link" href="/">← Back to Sanskriti</Link>
    <div className="quiz-shell">
      <p className="eyebrow"><span /> Sanskriti quiz night</p>
      {finished ? <section className="quiz-finished"><span className="quiz-score">{score}/{questions.length}</span><h1>Curiosity<br /><em>looks good on you.</em></h1><p>That was the warm-up round. Join a presenter room to play the live quiz and appear on the leaderboard.</p><Link className="primary-button" href="/join">Join a live room <span>→</span></Link></section> : <section className="quiz-question"><div className="quiz-progress">Question {current + 1} <span>/ {questions.length}</span></div><h1>{question.question}</h1><div className="answer-grid">{question.options.map((option, index) => <button key={option} onClick={() => answer(option)}><span>0{index + 1}</span>{option}<b>↗</b></button>)}</div></section>}
    </div>
  </main>;
}