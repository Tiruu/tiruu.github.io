export type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  image?: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Application cartographique communautaire",
    category: "Web · Projet personnel",
    year: "2026",
    description:
      "Application web interactive permettant de référencer et consulter des points d’intérêt sur une carte, avec authentification, profils, classement, confirmations et signalements.",
    technologies: ["React", "TypeScript", "Vite", "Supabase", "MapLibre", "Docker", "GitHub", "Vercel"],
    featured: true,
    image: "/assets/project-map.svg",
    links: [
      { label: "Projet GitHub", href: "https://github.com/Tiruu" }
    ],
  },
  {
    title: "Outil de gestion des réservations — VandB",
    category: "Web · Projet professionnel",
    year: "2024–2026",
    description:
      "Application web locale conçue pour répondre à un besoin interne de gestion des réservations de tireuses, dans l’attente d’un outil fourni par la centrale.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "XAMPP"],
    featured: true,
    image: "/assets/project-vandb.svg",
  },
  {
    title: "Jeu web et mobile — UDSP 89",
    category: "Projet professionnel · Stage",
    year: "2024",
    description:
      "Jeu Point & Click destiné à présenter l’association et ses activités. Modélisation des décors et assets 3D, développement de sept scènes et création du site hébergeant le jeu.",
    technologies: ["Unity", "C#", "Blender", "HTML", "CSS", "JavaScript"],
    featured: true,
    image: "/assets/project-udsp.svg",
    links: [
      { label: "Voir le projet", href: "https://udsp.sdis89.fr/" }
    ],
  },
  {
    title: "EXODE",
    category: "Web · Stage",
    year: "2023",
    description:
      "Création de scènes pour un jeu vidéo sur navigateur et développement de séquences utilisées pour introduire de nouvelles parties du gameplay.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
    image: "/assets/project-exode.svg",
  },
  {
    title: "Duel au Feur West",
    category: "Game Dev",
    year: "Projet étudiant",
    description:
      "Projet réalisé pour découvrir Unity et le développement de jeux vidéo.",
    technologies: ["Unity", "C#"],
    image: "/assets/project-game.svg",
    links: [
      { label: "Itch.io", href: "https://tiruuslow.itch.io/" }
    ],
  },
  {
    title: "PH²OM",
    category: "Game Dev · Game Jam",
    year: "2023",
    description:
      "Projet réalisé dans le cadre de la Scientific Game Jam de Nancy.",
    technologies: ["Unity", "C#"],
    image: "/assets/project-game.svg",
    links: [
      { label: "Itch.io", href: "https://tiruuslow.itch.io/" }
    ],
  },
];

export const skills = [
  {
    title: "Développement web",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "PHP", "SQL", "Git / GitHub"],
  },
  {
    title: "Outils & technologies",
    items: ["Vite", "Supabase", "MapLibre", "Docker", "XAMPP", "Vercel"],
  },
  {
    title: "Création numérique",
    items: ["Unity", "Godot", "C#", "Blender", "Aseprite"],
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Tiruu" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lino-thebault-226b9b225" },
  { label: "ArtStation", href: "https://www.artstation.com/tiruu" },
  { label: "Itch.io", href: "https://tiruuslow.itch.io/" },
];