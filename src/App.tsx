import { useEffect, useState } from "react";
import { projects, skills, socialLinks } from "./data";

function Icon({ name }: { name: "arrow" | "github" | "linkedin" | "mail" | "external" }) {
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.8S18 0.4 15 2.3a13.4 13.4 0 0 0-6 0C6 0.4 4.8.8 4.8.8A5 5 0 0 0 4.7 4 5.4 5.4 0 0 0 3.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4" /><path d="M9 18c-4.5 2-5-2-7-2" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    external: <><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
  } as const;
  return <svg aria-hidden="true" viewBox="0 0 24 24">{paths[name]}</svg>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("Tous");

  useEffect(() => {
    document.title = "Lino Thebault — Développeur Web Junior | Portfolio";
  }, []);

  const categories = ["Tous", "Web", "Projet professionnel", "Game Dev"];
  const visibleProjects = projects.filter((project) => {
    if (filter === "Tous") return true;
    if (filter === "Web") return project.category.includes("Web");
    if (filter === "Projet professionnel") return project.category.includes("professionnel");
    return project.category.includes("Game Dev");
  });

  return (
    <div className="site-shell">
      <div className="background-grid" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Retour à l'accueil">
          <span className="brand-mark">T</span>
          <span>
            <strong>Tiruu</strong>
            <small>Lino Thebault</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
        </button>

        <nav id="main-nav" className={menuOpen ? "nav-open" : ""}>
          <a href="#about" onClick={() => setMenuOpen(false)}>À propos</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Compétences</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projets</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <a className="header-cta" href="/downloadable/resume.pdf">
          CV <Icon name="arrow" />
        </a>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">TECHNICIEN INFORMATIQUE JUNIOR · DÉVELOPPEUR WEB JUNIOR</p>
            <h1>Je construis des <span>outils utiles</span> et des expériences interactives.</h1>
            <p className="hero-text">
              Diplômé d’un BUT MMI parcours GameWeb, je développe des applications web,
              des outils répondant à des besoins concrets et des projets de jeu vidéo.
              J’aime comprendre un problème, trouver une solution et la transformer en produit.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Voir mes projets <Icon name="arrow" /></a>
              <a className="button secondary" href="mailto:lino.thebault@gmail.com">Me contacter <Icon name="mail" /></a>
            </div>
            <div className="hero-meta">
              <span>Écommoy, France</span>
              <span>Anglais C1 · TOEIC 975</span>
              <span>Permis B + véhicule</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="portrait-frame">
              <img src="/assets/avatar.svg" alt="Portrait de Lino Thebault" />
            </div>
            <div className="status-line"><span className="status-dot" /> Disponible pour un poste junior</div>
          </div>
        </section>

        <section id="about" className="section split-section">
          <div>
            <p className="eyebrow">01 · À PROPOS</p>
            <h2>Un profil hybride entre web, IT et création.</h2>
          </div>
          <div className="section-copy">
            <p>
              Mon parcours a commencé par le développement de jeux vidéo et la création 3D,
              puis s’est élargi vers le développement web et la création d’outils pour répondre
              à des besoins professionnels.
            </p>
            <p>
              Chez VandB, j’ai notamment conçu une application web locale de gestion des
              réservations de tireuses avec HTML, CSS, JavaScript, PHP et SQL. Plus récemment,
              j’ai développé une application cartographique avec React, TypeScript, Vite,
              Supabase et MapLibre.
            </p>
            <p>
              Je recherche aujourd’hui un poste junior dans lequel je peux continuer à progresser,
              contribuer concrètement et apprendre auprès d’une équipe.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 · COMPÉTENCES</p>
              <h2>Ce avec quoi je travaille.</h2>
            </div>
            <p>Une stack orientée développement web, applications et création interactive.</p>
          </div>

          <div className="skill-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">03 · PROJETS</p>
              <h2>Des projets, pas seulement une liste de technologies.</h2>
            </div>
            <div className="filters" role="group" aria-label="Filtrer les projets">
              {categories.map((category) => (
                <button
                  key={category}
                  className={filter === category ? "active" : ""}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.title}>
                <div className="project-image">
                  <img src={project.image} alt="" />
                  <span className="project-year">{project.year}</span>
                </div>
                <div className="project-body">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list compact">
                    {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                  {project.links && (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                          {link.label} <Icon name="external" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section">
          <div>
            <p className="eyebrow">04 · PARCOURS</p>
            <h2>Une progression vers le développement professionnel.</h2>
          </div>
          <div className="timeline">
            <article><span>2026</span><div><strong>Projet React personnel</strong><p>Application cartographique avec React, TypeScript, Supabase, MapLibre et Vite.</p></div></article>
            <article><span>2024–2026</span><div><strong>VandB Auxerre</strong><p>Caviste polyvalent et développement d’un outil web local de gestion des réservations.</p></div></article>
            <article><span>2024</span><div><strong>UDSP 89</strong><p>Stage de développement, Unity, C#, 3D et création d’un site web.</p></div></article>
            <article><span>2023</span><div><strong>Disruptive AI</strong><p>Stage de développement web et création de scènes pour EXODE.</p></div></article>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div>
            <p className="eyebrow">05 · CONTACT</p>
            <h2>Un projet, une opportunité ou simplement envie d’échanger ?</h2>
          </div>
          <div className="contact-panel">
            <a className="contact-email" href="mailto:lino.thebault@gmail.com">lino.thebault@gmail.com</a>
            <p>Je suis actuellement ouvert aux opportunités junior en informatique et développement web.</p>
            <div className="socials">
              {socialLinks.map((link) => (
                <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                  {link.label} <Icon name="external" />
                </a>
              ))}
            </div>
            <a className="button primary" href="/downloadable/resume.pdf">Télécharger mon CV <Icon name="arrow" /></a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Lino Thebault</span>
        <span>Tiruu · Portfolio</span>
        <a href="#top">Retour en haut ↑</a>
      </footer>
    </div>
  );
}

export default App;