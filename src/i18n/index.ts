import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      brand: "Mwalimu",
      tagline: "Empowering the Next Generation.",
      hero_title: "Master Skills.",
      hero_highlight: "Build Futures.",
      hero_description:
        "An iterative learn-by-doing platform. Master programming, office tools, and digital skills through guided practice.",
      get_started: "Get Started",
      workspace: "Workspace",
      instructions: "Instructions",
      practice: "Practice Sandbox",
      feedback: "Feedback",
      verify: "Verify My Work",
      console_placeholder: "Output will appear here after verification...",
      language: "Language",
      // Instruction panel
      lesson_title: "## Getting Started with Python",
      lesson_content: `Welcome to your first lesson! In this exercise, you will learn to write a simple Python function.\n\n### Objective\nWrite a function called \`greet\` that takes a **name** parameter and returns a greeting string.\n\n### Example\n\`\`\`python\ndef greet(name):\n    return f"Hello, {name}!"\n\`\`\`\n\n### Steps\n1. Define the function with \`def\`\n2. Use an f-string for the return value\n3. Click **Verify My Work** when ready`,
      // Sandbox
      sandbox_python: "Python",
      sandbox_office: "MS Office",
      // Office ribbon
      ribbon_home: "Home",
      ribbon_insert: "Insert",
      ribbon_layout: "Layout",
      ribbon_format: "Format",
    },
  },
  fr: {
    translation: {
      brand: "Mwalimu",
      tagline: "Apprendre en faisant. Grandir sans limites.",
      hero_title: "L'avenir de",
      hero_highlight: "l'apprentissage",
      hero_description:
        "Une plateforme itérative d'apprentissage par la pratique. Maîtrisez la programmation, les outils bureautiques et les compétences numériques.",
      get_started: "Commencer",
      workspace: "Espace de travail",
      instructions: "Instructions",
      practice: "Bac à sable",
      feedback: "Retour",
      verify: "Vérifier mon travail",
      console_placeholder:
        "Le résultat apparaîtra ici après vérification...",
      language: "Langue",
      lesson_title: "## Premiers pas avec Python",
      lesson_content: `Bienvenue à votre première leçon ! Dans cet exercice, vous apprendrez à écrire une fonction Python simple.\n\n### Objectif\nÉcrivez une fonction appelée \`greet\` qui prend un paramètre **name** et retourne une chaîne de salutation.\n\n### Exemple\n\`\`\`python\ndef greet(name):\n    return f"Bonjour, {name} !"\n\`\`\`\n\n### Étapes\n1. Définissez la fonction avec \`def\`\n2. Utilisez un f-string pour la valeur de retour\n3. Cliquez sur **Vérifier mon travail**`,
      sandbox_python: "Python",
      sandbox_office: "MS Office",
      ribbon_home: "Accueil",
      ribbon_insert: "Insertion",
      ribbon_layout: "Mise en page",
      ribbon_format: "Format",
    },
  },
  sw: {
    translation: {
      brand: "Mwalimu",
      tagline: "Jifunze kwa kutenda. Kua bila mipaka.",
      hero_title: "Mustakabali wa",
      hero_highlight: "kujifunza",
      hero_description:
        "Jukwaa la kujifunza kwa vitendo. Miliki programu, zana za ofisi, na ujuzi wa kidijitali kupitia mazoezi ya kuongozwa.",
      get_started: "Anza Sasa",
      workspace: "Eneo la Kazi",
      instructions: "Maelekezo",
      practice: "Sanduku la Mazoezi",
      feedback: "Maoni",
      verify: "Thibitisha Kazi Yangu",
      console_placeholder:
        "Matokeo yataonekana hapa baada ya uthibitisho...",
      language: "Lugha",
      lesson_title: "## Kuanza na Python",
      lesson_content: `Karibu kwenye somo lako la kwanza! Katika zoezi hili, utajifunza kuandika kazi rahisi ya Python.\n\n### Lengo\nAndika kazi inayoitwa \`greet\` inayochukua parameta ya **jina** na kurudisha ujumbe wa salamu.\n\n### Mfano\n\`\`\`python\ndef greet(jina):\n    return f"Habari, {jina}!"\n\`\`\`\n\n### Hatua\n1. Fafanua kazi kwa \`def\`\n2. Tumia f-string kwa thamani ya kurudisha\n3. Bonyeza **Thibitisha Kazi Yangu**`,
      sandbox_python: "Python",
      sandbox_office: "MS Office",
      ribbon_home: "Nyumbani",
      ribbon_insert: "Ingiza",
      ribbon_layout: "Mpangilio",
      ribbon_format: "Muundo",
    },
  },
};

const isServer = typeof window === "undefined";

if (!i18n.isInitialized) {
  const plugins = [initReactI18next];
  if (!isServer) {
    plugins.unshift(LanguageDetector as never);
  }

  for (const plugin of plugins) {
    i18n.use(plugin);
  }

  i18n.init({
    resources,
    ...(isServer ? { lng: "en" } : {}),
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    ...(!isServer
      ? {
          detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
          },
        }
      : {}),
  });
}

export default i18n;
