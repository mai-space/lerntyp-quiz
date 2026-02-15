// Quiz questions for determining learning type
// Based on learning type theories (visual, auditory, kinesthetic, reading/writing)

export const quizQuestions = [
  {
    id: 1,
    question: "Wie lernst du am besten neue Informationen?",
    options: [
      { id: "a", text: "Durch Bilder, Diagramme und Grafiken", type: "visual" },
      { id: "b", text: "Durch Zuhören und Diskussionen", type: "auditory" },
      { id: "c", text: "Durch praktisches Ausprobieren", type: "kinesthetic" },
      { id: "d", text: "Durch Lesen und schriftliche Notizen", type: "reading" }
    ]
  },
  {
    id: 2,
    question: "Wenn du dir etwas merken musst, was tust du?",
    options: [
      { id: "a", text: "Ich stelle es mir bildlich vor", type: "visual" },
      { id: "b", text: "Ich wiederhole es mir laut", type: "auditory" },
      { id: "c", text: "Ich bewege mich dabei oder nutze Gesten", type: "kinesthetic" },
      { id: "d", text: "Ich schreibe es mehrmals auf", type: "reading" }
    ]
  },
  {
    id: 3,
    question: "Bei welcher Aktivität fühlst du dich am wohlsten?",
    options: [
      { id: "a", text: "Videos anschauen oder Präsentationen folgen", type: "visual" },
      { id: "b", text: "Podcasts hören oder an Gesprächen teilnehmen", type: "auditory" },
      { id: "c", text: "Experimente durchführen oder Sport treiben", type: "kinesthetic" },
      { id: "d", text: "Bücher lesen oder Artikel studieren", type: "reading" }
    ]
  },
  {
    id: 4,
    question: "Wie erklärst du anderen am liebsten etwas?",
    options: [
      { id: "a", text: "Mit Zeichnungen oder Demonstrationen am Bildschirm", type: "visual" },
      { id: "b", text: "Durch mündliche Erklärungen", type: "auditory" },
      { id: "c", text: "Indem ich es vormache", type: "kinesthetic" },
      { id: "d", text: "Durch schriftliche Anleitungen", type: "reading" }
    ]
  },
  {
    id: 5,
    question: "Welche Art von Lernmaterial bevorzugst du?",
    options: [
      { id: "a", text: "Infografiken und Mind Maps", type: "visual" },
      { id: "b", text: "Hörbücher und Vorlesungen", type: "auditory" },
      { id: "c", text: "Praktische Übungen und Simulationen", type: "kinesthetic" },
      { id: "d", text: "Textbücher und schriftliche Zusammenfassungen", type: "reading" }
    ]
  },
  {
    id: 6,
    question: "Woran erinnerst du dich am besten?",
    options: [
      { id: "a", text: "An Gesichter und visuelle Details", type: "visual" },
      { id: "b", text: "An Namen und Gesprächsinhalte", type: "auditory" },
      { id: "c", text: "An Aktivitäten und Handlungen", type: "kinesthetic" },
      { id: "d", text: "An geschriebene Fakten und Listen", type: "reading" }
    ]
  },
  {
    id: 7,
    question: "Wie gehst du mit neuer Technologie um?",
    options: [
      { id: "a", text: "Ich schaue mir Tutorial-Videos an", type: "visual" },
      { id: "b", text: "Ich lasse es mir von jemandem erklären", type: "auditory" },
      { id: "c", text: "Ich probiere einfach alle Funktionen aus", type: "kinesthetic" },
      { id: "d", text: "Ich lese die Anleitung durch", type: "reading" }
    ]
  },
  {
    id: 8,
    question: "In welcher Umgebung kannst du dich am besten konzentrieren?",
    options: [
      { id: "a", text: "In einem aufgeräumten, visuell ansprechenden Raum", type: "visual" },
      { id: "b", text: "In einer ruhigen Umgebung oder mit Hintergrundmusik", type: "auditory" },
      { id: "c", text: "Wenn ich mich bewegen oder herumlaufen kann", type: "kinesthetic" },
      { id: "d", text: "Mit allen nötigen Materialien zum Lesen und Schreiben", type: "reading" }
    ]
  },
  {
    id: 9,
    question: "Wie bereitest du dich auf eine Prüfung vor?",
    options: [
      { id: "a", text: "Ich erstelle Mindmaps und farbige Notizen", type: "visual" },
      { id: "b", text: "Ich erkläre den Stoff laut oder mit anderen", type: "auditory" },
      { id: "c", text: "Ich mache praktische Übungen und Simulationen", type: "kinesthetic" },
      { id: "d", text: "Ich schreibe Zusammenfassungen und wiederhole sie", type: "reading" }
    ]
  },
  {
    id: 10,
    question: "Was lenkt dich beim Lernen am meisten ab?",
    options: [
      { id: "a", text: "Unordnung oder visuelle Unruhe", type: "visual" },
      { id: "b", text: "Lärm und Geräusche", type: "auditory" },
      { id: "c", text: "Stillsitzen müssen für lange Zeit", type: "kinesthetic" },
      { id: "d", text: "Fehlende schriftliche Unterlagen", type: "reading" }
    ]
  }
];

export const learningTypes = {
  visual: {
    name: "Visueller Lerntyp",
    description: "Du lernst am besten durch Bilder, Diagramme, Grafiken und visuelle Darstellungen. Mind Maps und farbige Markierungen helfen dir besonders.",
    tips: [
      "Nutze Mind Maps und Diagramme",
      "Markiere wichtige Inhalte mit verschiedenen Farben",
      "Schaue dir Videos und Präsentationen an",
      "Erstelle visuelle Zusammenfassungen"
    ]
  },
  auditory: {
    name: "Auditiver Lerntyp",
    description: "Du lernst am besten durch Zuhören und mündliche Kommunikation. Gespräche, Diskussionen und Hörbücher sind ideal für dich.",
    tips: [
      "Höre dir Vorlesungen und Podcasts an",
      "Erkläre anderen den Lernstoff laut",
      "Nutze Hörbücher und Audio-Aufnahmen",
      "Tausche dich in Lerngruppen aus"
    ]
  },
  kinesthetic: {
    name: "Kinästhetischer Lerntyp",
    description: "Du lernst am besten durch praktisches Tun und Bewegung. Experimente, praktische Übungen und learning by doing sind deine Stärken.",
    tips: [
      "Führe praktische Experimente durch",
      "Mache Pausen mit Bewegung",
      "Nutze Lernspiele und Simulationen",
      "Lerne beim Gehen oder mit Gesten"
    ]
  },
  reading: {
    name: "Lese-/Schreib-Lerntyp",
    description: "Du lernst am besten durch Lesen und Schreiben. Texte, Notizen und schriftliche Zusammenfassungen sind deine bevorzugten Lernmittel.",
    tips: [
      "Schreibe ausführliche Notizen",
      "Erstelle schriftliche Zusammenfassungen",
      "Lies Lehrbücher und Artikel",
      "Nutze Listen und schriftliche Aufgaben"
    ]
  }
};
