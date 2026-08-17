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
    title:
      "Ultra Auxerre Map — Parce qu'une carte, c'était apparemment trop simple.",
    eyebrow: "Projet personnel · Application web",
    year: "2026",
    description:
      "Un projet personnel parti d'une idée assez simple : cartographier des points d'intérêt. Puis il y a eu les comptes utilisateurs. Puis les contributions. Puis les confirmations. Puis Supabase. Puis React. Bref, la petite carte a légèrement dégénéré.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "MapLibre",
      "Docker",
      "GitHub",
    ],
    image: "/assets/project-map.png",
    featured: true,
    links: [
      {
        label: "Lien",
        href: "https://ultra-auxerre-map.vercel.app",
      },
    ],
  },

  {
    title: "VandB — J'avais besoin d'un outil. Alors je l'ai fait.",
    eyebrow: "Projet professionnel · Outil métier",
    year: "2024–2026",
    description:
      "La centrale devait fournir un outil de gestion des réservations de tireuses. En attendant, j'ai développé le mien. HTML, CSS, JavaScript, PHP et SQL, le tout en local avec XAMPP. Résultat : un suivi plus clair des réservations, un meilleur contrôle du matériel et moins de gymnastique avec les fichiers Excel.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "XAMPP"],
    image: "/assets/project-vandb.png",
    featured: true,
  },

  {
    title: "Jeu web & mobile — UDSP 89",
    eyebrow: "Stage · Game Development & 3D",
    year: "2024",
    description:
      "Création d’un jeu vidéo interactif pour l’Union Départementale des Sapeurs-Pompiers de l’Yonne. Développement du jeu, création d’éléments 3D et réalisation du site web associé.",
    technologies: ["Unity", "C#", "Blender", "HTML", "CSS", "JavaScript"],
    image: "/assets/project-udsp.png",
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
    image: "/assets/project-exode.png",
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
    image: "/assets/fish.png",
  },

  {
    title: "Mobile Suit Highway",
    text: "Un jeu de course de mechas réalisé avec une direction artistique inspirée des jeux de l’ère N64.",
    tags: ["Unity", "C#", "3D", "Game Jam"],
    href: "https://tiruuslow.itch.io/mobile-suit-highway",
    image: "/assets/mech.png",
  },

  {
    title: "Me When",
    text: "Un Rogue-like like, avec une mécanique de changement de perspective pour deux fois plus de fun.",
    tags: ["Unity", "C#", "Blender", "1 joueurs"],
    href: "https://tiruuslow.itch.io/me-when",
    image: "/assets/when.png",
  },

  {
    title: "Duel au Feur West",
    text: "Un duel local à deux joueurs dans un Far West low-poly, basé sur la rapidité de réaction et les mots.",
    tags: ["Unity", "C#", "Blender", "2 joueurs"],
    href: "https://tiruuslow.itch.io/duel-au-feur-west",
    image: "/assets/west.png",
  },

  {
    title: "PH²OM",
    text: "Projet réalisé dans le cadre de la Scientific Game Jam de Nancy, avec les contraintes et le travail en équipe propres au format game jam.",
    tags: ["Unity", "C#", "Game Jam"],
    href: "https://tiruuslow.itch.io/ph2om",
    image: "/assets/phom.png",
  },
];
