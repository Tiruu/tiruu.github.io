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
    eyebrow: "Projet personnel · Web",
    year: "2026",
    description:
      "Application cartographique communautaire développée pour référencer des points d’intérêt, gérer les profils et contributions, et expérimenter une application web complète de bout en bout.",
    technologies: ["React", "TypeScript", "Vite", "Supabase", "MapLibre", "Docker"],
    image: "/assets/project-map.svg",
    featured: true,
    links: [{ label: "GitHub", href: "https://github.com/Tiruu" }],
  },
  {
    title: "Gestion des réservations VandB",
    eyebrow: "Projet professionnel · Application locale",
    year: "2024–2026",
    description:
      "Outil développé en magasin pour améliorer le suivi des réservations de tireuses et la gestion du flux, en attendant la mise à disposition d’une solution par la centrale.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "XAMPP"],
    image: "/assets/project-vandb.svg",
    featured: true,
  },
  {
    title: "Jeu web & mobile — UDSP 89",
    eyebrow: "Stage · Développement & 3D",
    year: "2024",
    description:
      "Jeu interactif réalisé pour l’Union Départementale des Sapeurs-Pompiers de l’Yonne, avec développement sous Unity, création d’assets 3D et réalisation du site web associé.",
    technologies: ["Unity", "C#", "Blender", "HTML", "CSS", "JavaScript"],
    image: "/assets/project-udsp.svg",
    links: [{ label: "Voir le projet", href: "https://udsp.sdis89.fr/" }],
  },
  {
    title: "EXODE",
    eyebrow: "Stage · Jeu navigateur",
    year: "2023",
    description:
      "Création de scènes et de séquences destinées à introduire de nouvelles parties du gameplay d’un jeu vidéo sur navigateur.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
    image: "/assets/project-exode.svg",
  },
];

export const skills = [
  {
    title: "Web & applications",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "PHP", "SQL"],
  },
  {
    title: "Écosystème",
    items: ["Git / GitHub", "Vite", "Supabase", "MapLibre", "Docker", "XAMPP", "Vercel"],
  },
  {
    title: "Création interactive",
    items: ["Unity", "Godot", "C#", "Blender", "Aseprite"],
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Tiruu" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lino-thebault-226b9b225" },
  { label: "ArtStation", href: "https://www.artstation.com/tiruu" },
  { label: "Itch.io", href: "https://tiruuslow.itch.io/" },
];

export const games = [
  { title: "Fish - The side-quest game", text: "Un petit jeu de pêche pensé comme une side-quest devenue le jeu entier.", tags: ["Godot", "Blender", "Aseprite"], href: "https://tiruuslow.itch.io/fish" },
  { title: "Mobile Suit Highway", text: "Un jeu de course de mechas avec une direction inspirée de l’ère N64.", tags: ["Unity", "3D", "Game Jam"], href: "https://tiruuslow.itch.io/mobile-suit-highway" },
  { title: "Duel au Feur West", text: "Un duel local à deux joueurs dans un Far West low-poly, basé sur la réaction et les mots.", tags: ["Unity", "Blender", "2 joueurs"], href: "https://tiruuslow.itch.io/duel-au-feur-west" },
  { title: "PH²OM", text: "Projet réalisé dans le cadre de la Scientific Game Jam de Nancy.", tags: ["Unity", "Game Jam"], href: "https://tiruuslow.itch.io/" },
];
