export type Project = {
  title: string;
  eyebrow: string;
  year: string;
  description: string;
  technologies: string[];
  image: string;
  featured?: boolean;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Ultra Auxerre Map",
    eyebrow: "Projet personnel · Application web",
    year: "2026",
    description:
      "Application cartographique communautaire développée de bout en bout pour référencer des points d’intérêt, gérer les profils et contributions, et expérimenter une application web moderne avec base de données.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "MapLibre",
      "Docker",
      "GitHub",
    ],
    image: "/assets/project-map.svg",
    featured: true,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Tiruu",
      },
    ],
  },

  {
    title: "Gestion des réservations VandB",
    eyebrow: "Projet professionnel · Outil métier",
    year: "2024–2026",
    description:
      "Application développée en local pour répondre à un besoin concret du magasin : centraliser le suivi des réservations de tireuses, améliorer la gestion du flux et faciliter le suivi des équipements en attendant la solution de la centrale.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "XAMPP"],
    image: "/assets/project-vandb.svg",
    featured: true,
  },

  {
    title: "Jeu web & mobile — UDSP 89",
    eyebrow: "Stage · Game Development & 3D",
    year: "2024",
    description:
      "Création d’un jeu vidéo interactif pour l’Union Départementale des Sapeurs-Pompiers de l’Yonne. Développement du jeu, création d’éléments 3D et réalisation du site web associé.",
    technologies: ["Unity", "C#", "Blender", "HTML", "CSS", "JavaScript"],
    image: "/assets/project-udsp.svg",
    links: [
      {
        label: "Voir le projet",
        href: "https://udsp.sdis89.fr/",
      },
    ],
  },

  {
    title: "EXODE",
    eyebrow: "Stage · Game Development",
    year: "2023",
    description:
      "Participation au développement d’un jeu vidéo sur navigateur avec la création de scènes et de séquences destinées à introduire de nouvelles parties du gameplay.",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    image: "/assets/project-exode.svg",
  },
];

export const skills = [
  {
    title: "Game Development",
    items: ["Unity", "C#", "Godot", "GDScript", "Gameplay", "Game Design"],
  },

  {
    title: "Web & applications",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "PHP", "SQL"],
  },

  {
    title: "Tools & workflow",
    items: ["Git / GitHub", "Vite", "Supabase", "MapLibre", "Docker", "XAMPP"],
  },

  {
    title: "3D & création",
    items: ["Blender", "Aseprite"],
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Tiruu",
  },

  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lino-thebault-226b9b225",
  },

  {
    label: "ArtStation",
    href: "https://www.artstation.com/tiruu",
  },

  {
    label: "Itch.io",
    href: "https://tiruuslow.itch.io/",
  },
];

export const games = [
  {
    title: "Fish - The side-quest game",
    text: "Un petit jeu de pêche pensé comme une side-quest devenue le jeu entier. Un projet court autour du gameplay, de l’ambiance et de l’expérimentation.",
    tags: ["Godot", "GDScript", "Blender", "Aseprite"],
    href: "https://tiruuslow.itch.io/fish",
  },

  {
    title: "Mobile Suit Highway",
    text: "Un jeu de course de mechas réalisé avec une direction artistique inspirée des jeux de l’ère N64.",
    tags: ["Unity", "C#", "3D", "Game Jam"],
    href: "https://tiruuslow.itch.io/mobile-suit-highway",
  },

  {
    title: "Duel au Feur West",
    text: "Un duel local à deux joueurs dans un Far West low-poly, basé sur la rapidité de réaction et les mots.",
    tags: ["Unity", "C#", "Blender", "2 joueurs"],
    href: "https://tiruuslow.itch.io/duel-au-feur-west",
  },

  {
    title: "PH²OM",
    text: "Projet réalisé dans le cadre de la Scientific Game Jam de Nancy, avec les contraintes et le travail en équipe propres au format game jam.",
    tags: ["Unity", "C#", "Game Jam"],
    href: "https://tiruuslow.itch.io/ph2om",
  },
];
