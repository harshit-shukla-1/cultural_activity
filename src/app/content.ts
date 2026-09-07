export type Language = "EN" | "DE";

export const eventContent = [
  {
    month: "July",
    hindi: "जुलाई",
    events: [
      { name: "Guru Purnima", de: "Guru Purnima", place: "Across India", placeDe: "In ganz Indien", text: "A full-moon day dedicated to teachers, mentors and the passing of wisdom.", textDe: "Ein Vollmondtag zu Ehren von Lehrern, Mentoren und der Weitergabe von Weisheit." },
      { name: "Hemis Festival", de: "Hemis-Festival", place: "Ladakh", placeDe: "Ladakh", text: "Monks at Hemis Monastery gather for masked dances, music and prayer.", textDe: "Mönche des Hemis-Klosters versammeln sich zu Maskentänzen, Musik und Gebeten." },
      { name: "Bonalu", de: "Bonalu", place: "Telangana", placeDe: "Telangana", text: "A vibrant offering festival for Mahakali, filled with drums, procession and devotion.", textDe: "Ein farbenfrohes Opferfest für Mahakali mit Trommeln, Prozessionen und Hingabe." },
      { name: "Behdienkhlam", de: "Behdienkhlam", place: "Meghalaya", placeDe: "Meghalaya", text: "A Khasi harvest ritual where colourful structures meet drumming and community prayer.", textDe: "Ein Khasi-Ernsteritual mit farbenfrohen Bauten, Trommeln und gemeinsamen Gebeten." },
    ],
  },
  {
    month: "August",
    hindi: "अगस्त",
    events: [
      { name: "Raksha Bandhan", de: "Raksha Bandhan", place: "Across India", placeDe: "In ganz Indien", text: "Siblings tie a rakhi as a small, colourful promise of care and protection.", textDe: "Geschwister binden ein Rakhi als farbenfrohes Versprechen von Fürsorge und Schutz." },
      { name: "Independence Day", de: "Unabhängigkeitstag", place: "Across India", placeDe: "In ganz Indien", text: "India marks independence with flags, music, speeches and a shared civic memory.", textDe: "Indien feiert die Unabhängigkeit mit Flaggen, Musik, Reden und gemeinsamer Erinnerung." },
      { name: "Janmashtami", de: "Janmashtami", place: "Mathura & nationwide", placeDe: "Mathura und landesweit", text: "The birth of Krishna is celebrated through song, dance and midnight devotion.", textDe: "Die Geburt Krishnas wird mit Gesang, Tanz und nächtlicher Hingabe gefeiert." },
      { name: "Teej", de: "Teej", place: "Rajasthan", placeDe: "Rajasthan", text: "Women welcome the monsoon with swings, songs, colour and community gatherings.", textDe: "Frauen begrüßen den Monsun mit Schaukeln, Liedern, Farben und Gemeinschaftstreffen." },
      { name: "Nehru Trophy Boat Race", de: "Nehru-Trophäen-Bootsrennen", place: "Kerala", placeDe: "Kerala", text: "Long snake boats race across the backwaters to the rhythm of hundreds of oars.", textDe: "Lange Schlangenboote rasen im Rhythmus Hunderter Ruder über die Backwaters." },
      { name: "Paryushan", de: "Paryushan", place: "Jain communities", placeDe: "Jainistische Gemeinschaften", text: "A period of reflection, fasting, forgiveness and renewed attention to non-violence.", textDe: "Eine Zeit der Einkehr, des Fastens, der Vergebung und der Gewaltlosigkeit." },
    ],
  },
  {
    month: "September",
    hindi: "सितंबर",
    events: [
      { name: "Ganesh Chaturthi", de: "Ganesh Chaturthi", place: "Mumbai & Maharashtra", placeDe: "Mumbai und Maharashtra", text: "Communities welcome Ganesha with music, art and a joyful public procession.", textDe: "Gemeinschaften begrüßen Ganesha mit Musik, Kunst und fröhlichen Prozessionen." },
      { name: "Onam", de: "Onam", place: "Kerala", placeDe: "Kerala", text: "A harvest homecoming celebrated with flower carpets, boat races and a shared feast.", textDe: "Ein Ernte-Heimkehrfest mit Blumenbildern, Bootsrennen und einem gemeinsamen Festmahl." },
      { name: "Nuakhai", de: "Nuakhai", place: "Western Odisha", placeDe: "West-Odisha", text: "Families offer the season's first rice and give thanks for the new harvest.", textDe: "Familien bringen den ersten Reis der Saison dar und danken für die neue Ernte." },
      { name: "Vishwakarma Puja", de: "Vishwakarma Puja", place: "Across India", placeDe: "In ganz Indien", text: "Craftspeople and workers honour the divine architect and the tools of their work.", textDe: "Handwerker und Arbeitende ehren den göttlichen Baumeister und ihre Werkzeuge." },
      { name: "Navratri preparations", de: "Vorbereitungen auf Navratri", place: "Gujarat", placeDe: "Gujarat", text: "Garba circles, music and hand-embroidered colour begin to gather before Navratri.", textDe: "Tanzkreise, Musik und handbestickte Farben kündigen Navratri an." },
    ],
  },
];

export const copy = {
  EN: {
    navJourney: "The journey", navEvents: "Events", navQuiz: "Quiz night", admin: "Admin",
    period: "July — September 2026", titleA: "A season of", titleB: "shared stories.",
    intro: "A living tour through India's festivals, rituals, flavours and stories, made to be experienced together.",
    begin: "Begin the journey", presented: "Presented in English", atlasA: "A shared", atlasB: "cultural atlas",
    calendar: "The calendar", monthsA: "Three months.", monthsB: "Many worlds.",
    calendarIntro: "Follow the rhythm of India's cultural calendar, from monsoon rituals to harvest celebrations.",
    live: "Coming together live", gathering: "The gathering", listenA: "Listen closely.", listenB: "Play boldly.",
    quizIntro: "After the stories comes the game. Join the room, test what you know, and see where your curiosity takes you.",
    join: "Join a room", presenting: "I'm presenting", footer: "For curious people, everywhere.", events: "events",
  },
  DE: {
    navJourney: "Die Reise", navEvents: "Veranstaltungen", navQuiz: "Quizabend", admin: "Admin",
    period: "Juli — September 2026", titleA: "Eine Saison voller", titleB: "gemeinsamer Geschichten.",
    intro: "Eine lebendige Reise durch Indiens Feste, Rituale, Aromen und Geschichten, die wir gemeinsam erleben.",
    begin: "Reise beginnen", presented: "Auf Deutsch präsentiert", atlasA: "Ein gemeinsamer", atlasB: "Kulturatlas",
    calendar: "Der Kalender", monthsA: "Drei Monate.", monthsB: "Viele Welten.",
    calendarIntro: "Folge dem Rhythmus des indischen Kulturkalenders, von Monsunritualen bis zu Erntefesten.",
    live: "Gemeinsam live", gathering: "Das Treffen", listenA: "Hör gut zu.", listenB: "Spiel mutig.",
    quizIntro: "Nach den Geschichten beginnt das Spiel. Tritt dem Raum bei, teste dein Wissen und entdecke, wohin deine Neugier dich führt.",
    join: "Raum beitreten", presenting: "Ich präsentiere", footer: "Für neugierige Menschen überall.", events: "Veranstaltungen",
  },
} as const;