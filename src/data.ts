export type Project = {
  title: string;
  eyebrow: string;
  year: string;
  description: string;
  technologies: string[];
  image: string;
  featured?: boolean;
  links?: { label: string; href: string }[];
  caseStudy: {
    context: string;
    built: string;
    proof: string;
  };
};

export const projects: Project[] = [
  {
    title: "Ultra Stick Map",
    eyebrow: "Projet personnel · Application web",
    year: "2026",
    description: "Application cartographique communautaire développée pour explorer et référencer des points d’intérêt. Authentification, profils, contributions, classement, confirmation et signalement de données.",
    technologies: ["React", "TypeScript", "Vite", "Supabase", "MapLibre", "Docker", "Git/GitHub"],
    image: "/assets/project-map.png",
    featured: true,
    links: [{ label: "Ouvrir l’application", href: "https://ultra-auxerre-map.vercel.app" }],
    caseStudy: {
      context: "Un projet personnel parti d’une idée de carte communautaire. Le périmètre s’est progressivement transformé en véritable application web avec utilisateurs, données et contributions.",
      built: "J’ai développé l’interface et la logique applicative autour de React et TypeScript, avec Vite pour le build, Supabase pour les données et l’authentification, MapLibre pour la cartographie et Docker dans le workflow de développement.",
      proof: "Ce projet montre surtout ma capacité à prendre en main une stack moderne, connecter plusieurs briques techniques et faire évoluer un projet qui dépasse rapidement le simple prototype."
    }
  },
  {
    title: "Gestion des réservations — VandB",
    eyebrow: "Projet professionnel · Outil métier",
    year: "2024–2026",
    description: "Application web locale conçue à partir d’un besoin réel en magasin pour améliorer le suivi des réservations de tireuses, la gestion du matériel et le flux de réservation. Développée de bout en bout avec une base de données locale.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "XAMPP"],
    image: "/assets/project-vandb.png",
    featured: true,
    caseStudy: {
      context: "En magasin, le suivi des réservations de tireuses demandait un outil plus adapté au fonctionnement quotidien. J’ai transformé ce besoin concret en application interne.",
      built: "J’ai conçu et développé l’outil de bout en bout : interface web, logique en JavaScript et PHP, stockage SQL et environnement local avec XAMPP. L’objectif était de centraliser le suivi des réservations et de rendre le flux plus simple à gérer au quotidien.",
      proof: "C’est mon exemple le plus concret de développement dans un contexte professionnel : partir d’un problème métier réel, construire une solution utilisable et l’intégrer dans les habitudes de travail d’une équipe."
    }
  },
  {
    title: "Jeu web & mobile — UDSP 89",
    eyebrow: "Stage · Game Development & 3D",
    year: "2024",
    description: "Création d’un jeu vidéo interactif pour l’Union Départementale des Sapeurs-Pompiers de l’Yonne, avec développement sous Unity, création d’éléments 3D et réalisation du site web associé.",
    technologies: ["Unity", "C#", "Blender", "HTML", "CSS", "JavaScript"],
    image: "/assets/project-udsp.png",
    links: [{ label: "Voir le projet", href: "https://udsp.sdis89.fr/" }],
    caseStudy: {
      context: "Projet réalisé en stage pour l’UDSP 89, avec un objectif à la fois interactif et communicant.",
      built: "Participation au développement du jeu sous Unity et C#, création d’éléments 3D avec Blender et réalisation du site web associé.",
      proof: "Le projet montre ma capacité à passer du développement à la création 3D et au web dans un même contexte, avec une finalité concrète."
    }
  },
  {
    title: "EXODE",
    eyebrow: "Stage · Game Development",
    year: "2023",
    description: "Participation au développement d’un jeu vidéo sur navigateur avec création de scènes et de séquences destinées à introduire de nouvelles parties du gameplay.",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    image: "/assets/project-exode.png",
    caseStudy: {
      context: "Projet de stage autour d’un jeu vidéo jouable directement dans un navigateur.",
      built: "Participation au développement avec HTML, CSS et JavaScript, notamment autour de scènes et séquences destinées à introduire de nouvelles parties du gameplay.",
      proof: "Une première expérience concrète de travail sur un projet existant, avec du code, du contenu interactif et un workflow Git/GitHub."
    }
  }
];

export const skills = [
  { title: "Web & applications", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "PHP", "SQL"] },
  { title: "Tools & workflow", items: ["Git / GitHub", "Vite", "Supabase", "MapLibre", "Docker", "XAMPP", "Vercel"] },
  { title: "Game Development", items: ["Unity", "C#", "Godot", "GDScript", "Gameplay", "Game Design"] },
  { title: "3D & création", items: ["Blender", "Aseprite"] },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Tiruu" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lino-thebault-226b9b225" },
  { label: "ArtStation", href: "https://www.artstation.com/tiruu" },
  { label: "Itch.io", href: "https://tiruuslow.itch.io/" },
];

export const games = [
  { title: "Fish - The side-quest game", text: "Petit jeu de pêche né d’une envie de bricoler une mécanique simple… puis de voir jusqu’où je pouvais la pousser.", tags: ["Godot", "GDScript", "Blender", "Aseprite"], href: "https://tiruuslow.itch.io/fish", image: "/assets/fish.png" },
  { title: "Mobile Suit Highway", text: "Jeu de course de mechas avec une direction artistique inspirée des jeux de l’ère N64. Oui, l’idée est aussi absurde que ça en a l’air.", tags: ["Unity", "C#", "3D", "Game Jam"], href: "https://tiruuslow.itch.io/mobile-suit-highway", image: "/assets/mech.png" },
  { title: "Me When", text: "Rogue-like expérimental basé sur une mécanique de changement de perspective. Parce qu’une bonne idée mérite parfois d’être un peu bizarre.", tags: ["Unity", "C#", "Blender", "1 joueur"], href: "https://tiruuslow.itch.io/me-when", image: "/assets/when.png" },
  { title: "Duel au Feur West", text: "Duel local à deux joueurs dans un Far West low-poly, basé sur la rapidité de réaction. Rapide, simple, et probablement trop compétitif.", tags: ["Unity", "C#", "Blender", "2 joueurs"], href: "https://tiruuslow.itch.io/duel-au-feur-west", image: "/assets/west.png" },
  { title: "PH²OM — Scientific Game Jam", text: "Platformer 3D réalisé autour d’une thèse scientifique. 1ère place du classement, puis direction Paris pour présenter le jeu à Double Science.", tags: ["Unity", "C#", "Game Jam"], href: "https://tiruuslow.itch.io/phom", image: "/assets/phom.png" },
];
