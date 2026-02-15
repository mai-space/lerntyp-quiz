// Quiz questions for determining learning type
// Based on learning type theories (visual, auditory, haptic/kinesthetic, communicative)

export const quizQuestions = [
  {
    id: 1,
    question: "Wie lernst du am besten neue Informationen?",
    options: [
      { id: "a", text: "Durch Bilder, Diagramme und Grafiken", types: ["visual"], kolbTypes: ["assimilator"] },
      { id: "b", text: "Durch Zuhören und Diskussionen", types: ["auditory", "communicative"], kolbTypes: ["diverger"] },
      { id: "c", text: "Durch praktisches Ausprobieren", types: ["haptic"], kolbTypes: ["accommodator", "converger"] },
      { id: "d", text: "Durch Lesen und schriftliche Notizen", types: ["visual"], kolbTypes: ["assimilator"] }
    ]
  },
  {
    id: 2,
    question: "Wenn du dir etwas merken musst, was tust du?",
    options: [
      { id: "a", text: "Ich stelle es mir bildlich vor", types: ["visual"], kolbTypes: ["diverger"] },
      { id: "b", text: "Ich wiederhole es mir laut", types: ["auditory"], kolbTypes: ["assimilator"] },
      { id: "c", text: "Ich bewege mich dabei oder nutze Gesten", types: ["haptic"], kolbTypes: ["accommodator"] },
      { id: "d", text: "Ich erkläre es anderen", types: ["communicative"], kolbTypes: ["diverger"] }
    ]
  },
  {
    id: 3,
    question: "Bei welcher Aktivität fühlst du dich am wohlsten?",
    options: [
      { id: "a", text: "Videos anschauen oder Präsentationen folgen", types: ["visual"], kolbTypes: ["assimilator"] },
      { id: "b", text: "Podcasts hören oder an Gesprächen teilnehmen", types: ["auditory", "communicative"], kolbTypes: ["diverger"] },
      { id: "c", text: "Experimente durchführen oder Sport treiben", types: ["haptic"], kolbTypes: ["accommodator"] },
      { id: "d", text: "In Gruppen diskutieren und debattieren", types: ["communicative"], kolbTypes: ["diverger"] }
    ]
  },
  {
    id: 4,
    question: "Wie erklärst du anderen am liebsten etwas?",
    options: [
      { id: "a", text: "Mit Zeichnungen oder Demonstrationen am Bildschirm", types: ["visual"], kolbTypes: ["assimilator"] },
      { id: "b", text: "Durch mündliche Erklärungen", types: ["auditory", "communicative"], kolbTypes: ["diverger"] },
      { id: "c", text: "Indem ich es vormache", types: ["haptic"], kolbTypes: ["accommodator", "converger"] },
      { id: "d", text: "Durch gemeinsames Diskutieren", types: ["communicative"], kolbTypes: ["diverger"] }
    ]
  },
  {
    id: 5,
    question: "Welche Art von Lernmaterial bevorzugst du?",
    options: [
      { id: "a", text: "Infografiken und Mind Maps", types: ["visual"], kolbTypes: ["assimilator"] },
      { id: "b", text: "Hörbücher und Vorlesungen", types: ["auditory"], kolbTypes: ["assimilator"] },
      { id: "c", text: "Praktische Übungen und Simulationen", types: ["haptic"], kolbTypes: ["converger"] },
      { id: "d", text: "Lerngruppen und Diskussionsrunden", types: ["communicative"], kolbTypes: ["diverger"] }
    ]
  },
  {
    id: 6,
    question: "Woran erinnerst du dich am besten?",
    options: [
      { id: "a", text: "An Gesichter und visuelle Details", types: ["visual"], kolbTypes: ["diverger"] },
      { id: "b", text: "An Namen und Gesprächsinhalte", types: ["auditory", "communicative"], kolbTypes: ["diverger"] },
      { id: "c", text: "An Aktivitäten und Handlungen", types: ["haptic"], kolbTypes: ["accommodator"] },
      { id: "d", text: "An Diskussionen und Meinungsaustausch", types: ["communicative"], kolbTypes: ["diverger"] }
    ]
  },
  {
    id: 7,
    question: "Wie gehst du mit neuer Technologie um?",
    options: [
      { id: "a", text: "Ich schaue mir Tutorial-Videos an", types: ["visual"], kolbTypes: ["assimilator"] },
      { id: "b", text: "Ich lasse es mir von jemandem erklären", types: ["auditory", "communicative"], kolbTypes: ["diverger"] },
      { id: "c", text: "Ich probiere einfach alle Funktionen aus", types: ["haptic"], kolbTypes: ["accommodator", "converger"] },
      { id: "d", text: "Ich tausche mich mit anderen darüber aus", types: ["communicative"], kolbTypes: ["diverger"] }
    ]
  },
  {
    id: 8,
    question: "In welcher Umgebung kannst du dich am besten konzentrieren?",
    options: [
      { id: "a", text: "In einem aufgeräumten, visuell ansprechenden Raum", types: ["visual"], kolbTypes: ["assimilator"] },
      { id: "b", text: "In einer ruhigen Umgebung", types: ["auditory"], kolbTypes: ["assimilator"] },
      { id: "c", text: "Wenn ich mich bewegen oder herumlaufen kann", types: ["haptic"], kolbTypes: ["accommodator"] },
      { id: "d", text: "In einer Lerngruppe mit anderen", types: ["communicative"], kolbTypes: ["diverger"] }
    ]
  },
  {
    id: 9,
    question: "Wie bereitest du dich auf eine Prüfung vor?",
    options: [
      { id: "a", text: "Ich erstelle Mindmaps und farbige Notizen", types: ["visual"], kolbTypes: ["assimilator"] },
      { id: "b", text: "Ich erkläre den Stoff laut", types: ["auditory"], kolbTypes: ["assimilator"] },
      { id: "c", text: "Ich mache praktische Übungen und Simulationen", types: ["haptic"], kolbTypes: ["converger"] },
      { id: "d", text: "Ich diskutiere mit anderen in einer Lerngruppe", types: ["communicative"], kolbTypes: ["diverger"] }
    ]
  },
  {
    id: 10,
    question: "Was lenkt dich beim Lernen am meisten ab?",
    options: [
      { id: "a", text: "Unordnung oder visuelle Unruhe", types: ["visual"], kolbTypes: ["assimilator"] },
      { id: "b", text: "Lärm und Geräusche", types: ["auditory"], kolbTypes: ["assimilator"] },
      { id: "c", text: "Stillsitzen müssen für lange Zeit", types: ["haptic"], kolbTypes: ["accommodator"] },
      { id: "d", text: "Fehlende Möglichkeit zum Austausch", types: ["communicative"], kolbTypes: ["diverger"] }
    ]
  }
];

export const learningTypes = {
  visual: {
    name: "Visueller Lerntyp",
    description: "Visuelle Lerntypen prägen sich Wissen besonders gut über die bildliche Darstellung und das Lesen ein. Schaubilder, Skizzen, Diagramme und Mindmaps sind ideal, um das Wissen zu verdeutlichen.",
    tips: [
      "Nutze Schaubilder, Skizzen und Diagramme",
      "Markiere Textstellen farblich",
      "Schaue dir Sachfilme oder Erklärvideos auf YouTube an",
      "Erstelle Mind Maps zur Visualisierung",
      "Arbeite mit visuellen Zusammenfassungen"
    ]
  },
  auditory: {
    name: "Auditiver Lerntyp",
    description: "Der auditive Lerntyp lernt besonders gut übers Hören. Mündliche Erklärungen finden ihren Weg schnell ins Gedächtnis. Diese Lerntypen können über einen längeren Zeitraum Vorträgen lauschen, ohne gedanklich abzuschweifen.",
    tips: [
      "Nutze Podcasts, Hörbücher und Lern-CDs",
      "Lese Textpassagen laut vor",
      "Schaffe eine ruhige Lernumgebung",
      "Höre dir Vorlesungen aufmerksam an",
      "Konzentriere dich auf mündliche Erklärungen"
    ]
  },
  haptic: {
    name: "Haptischer Lerntyp",
    description: "Der haptische Lerntyp (auch motorisch oder kinästhetisch genannt) ist praktisch veranlagt und profitiert vom Learning by Doing. Die Arbeit mit Modellen und praktischen Anwendungen kommt diesem Lerntyp sehr entgegen.",
    tips: [
      "Nutze Lernmaterialien zum Anfassen (z.B. Scrabble-Steine)",
      "Führe praktische Experimente durch",
      "Lerne in Bewegung",
      "Arbeite mit Modellen",
      "Setze das Gelernte praktisch um"
    ]
  },
  communicative: {
    name: "Kommunikativer Lerntyp",
    description: "Kommunikative Lerntypen brauchen den Austausch mit anderen, um nachhaltig das Gelesene und Gehörte verarbeiten und speichern zu können. Gespräche und Diskussionen helfen dabei, den Lernstoff zu durchdringen.",
    tips: [
      "Tausche dich in Lerngruppen aus",
      "Diskutiere Themen aus verschiedenen Perspektiven",
      "Erkläre anderen den Lernstoff",
      "Nimm an Gesprächsrunden teil",
      "Nutze den Austausch zur Vertiefung des Wissens"
    ]
  }
};

// Kolb Learning Styles (Lernstile nach Kolb)
export const kolbLearningStyles = {
  accommodator: {
    name: "Akkomodierer (Macher)",
    description: "Sie lernen am besten durch aktives Experimentieren und konkrete Erfahrungen. Sie mögen Herausforderungen und neue Erfahrungen. Sie handeln eher nach ihrem Bauchgefühl, anstatt logischen Argumenten zu folgen. Sie orientieren sich an den Erfahrungen ihrer Mitmenschen, anstatt sich auf ihre eigene analytische Lösungsfähigkeit zu verlassen. Wenn sie sich Ziele setzen, halten sie diese auch ein bzw. fordern sie diese auch ein.",
    typical: "Der Akkomodierer ist häufig im Bereich Marketing oder Verkauf anzutreffen.",
    traits: ["Aktives Experimentieren", "Konkrete Erfahrungen", "Intuitive Entscheidungen", "Zielorientiert"]
  },
  diverger: {
    name: "Divergierer (Entdecker)",
    description: "Konkrete Erfahrung und reflektierendes Beobachten sind ihre Stärken. Menschen mit diesem Lernstil haben ein gutes Vorstellungsvermögen und können Situationen von verschiedenen Blickwinkeln aus betrachten. Zusätzlich haben sie ein hohes kulturelles Interesse, sind oftmals künstlerisch begabt. Zwischenmenschliche Kontakte sind ihnen wichtig und in Lernsituationen bevorzugen sie Gruppenarbeit und persönliches Feedback.",
    typical: "Der Divergierer ist häufig in sozialen oder künstlerischen Berufen anzutreffen.",
    traits: ["Reflektierendes Beobachten", "Kreatives Denken", "Kulturelles Interesse", "Gruppenarbeit"]
  },
  assimilator: {
    name: "Assimilierer (Denker)",
    description: "Bevorzugen beim Lernen reflektierendes Beobachten und abstrakte Begriffsbildung. Ihre Auffassungsgabe ist hoch, sie können Informationen präzise und logisch erläutern. Sie sind weniger an sozialen Beziehungen interessiert als an abstrakten Ideen oder Konzepten. Für sie steht die Theorie im Vordergrund.",
    typical: "In den Bereichen Informatik oder Naturwissenschaft fühlen sich Assimilierer wohl. Sie treffen diesen Lernstil vor allem in der Forschung oder im Finanzbereich an.",
    traits: ["Abstrakte Begriffsbildung", "Logisches Denken", "Theorieorientiert", "Analytisch"]
  },
  converger: {
    name: "Konvergierer (Entscheider)",
    description: "Ihr Lernverhalten ist von abstrakter Begriffsbildung und aktivem Experimentieren geprägt. Es gelingt ihnen den besten praktischen Nutzen für theoretische Inhalte zu finden. Es fällt ihnen leicht, Probleme zu lösen. Allerdings fokussieren sie sich lieber auf technische Anforderungen und Probleme als auf zwischenmenschliche Themen.",
    typical: "Der Konvergierer ist vor allem im Bereich Technik und Informatik zu finden, da sie gerne Neues mithilfe von praktischer Anwendung ausprobieren.",
    traits: ["Praktische Anwendung", "Problemlösung", "Technisch orientiert", "Experimentierfreudig"]
  }
};
