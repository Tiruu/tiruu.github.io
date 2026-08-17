import { useEffect, useState, type ReactNode } from "react";
import { games, projects, skills, socialLinks } from "./data";

function Icon({
  name,
}: {
  name: "arrow" | "external" | "mail" | "github" | "menu";
}) {
  const paths = {
    arrow: (
      <>
        <path d="M4 12h15" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    external: (
      <>
        <path d="M14 4h6v6" />
        <path d="M10 14 20 4" />
        <path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.8S18 0.4 15 2.3a13.4 13.4 0 0 0-6 0C6 0.4 4.8.8 4.8.8A5 5 0 0 0 4.7 4 5.4 5.4 0 0 0 3.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4" />
        <path d="M9 18c-4.5 2-5-2-7-2" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
  } as const;

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {paths[name]}
    </svg>
  );
}

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <Icon name="external" />
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Lino Thebault — Game Developer & Web Developer";
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <div className="noise" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-symbol">T</span>

          <span className="brand-copy">
            <strong>TIRUU</strong>
            <small>Lino Thebault</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name="menu" />
        </button>

        <nav className={menuOpen ? "nav-open" : ""}>
          <a href="#games" onClick={closeMenu}>
            Jeux
          </a>

          <a href="#work" onClick={closeMenu}>
            Projets
          </a>

          <a href="#about" onClick={closeMenu}>
            À propos
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <a className="header-link" href="/downloadable/resume.pdf">
          CV <Icon name="arrow" />
        </a>
      </header>

      <main>
        {/* HERO */}

        <section className="hero section">
          <div className="hero-main">
            <p className="hero-kicker">
              <span />
              Game Developer · Web Developer
            </p>

            <h1>
              Je crée des
              <br />
              <em>jeux, outils</em>
              <br />
              et expériences.
            </h1>

            <p className="hero-intro">
              Développeur issu d’un parcours GameWeb, je construis des jeux
              vidéo, des expériences interactives et des applications web. Le
              développement de jeux est mon objectif à long terme, tandis que
              mes compétences web et informatiques me permettent aujourd’hui de
              répondre à des projets professionnels variés.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#games">
                Découvrir mes jeux <Icon name="arrow" />
              </a>

              <a className="button button-ghost" href="#work">
                Voir mes projets <Icon name="arrow" />
              </a>
            </div>

            <div className="hero-facts">
              <span>Écommoy · France</span>
              <span>Unity · Godot · C#</span>
              <span>Web · React · TypeScript</span>
            </div>
          </div>

          <div className="hero-side">
            <div className="portrait-frame">
              <img src="/assets/avatar.svg" alt="Portrait de Lino Thebault" />
            </div>

            <div className="side-note">
              <span className="signal" />
              Game Developer · Créateur numérique
            </div>

            <div className="side-index">
              01 <span>/</span> 06
            </div>
          </div>
        </section>

        {/* GAME DEV */}

        <section id="games" className="section creative-section">
          <div className="creative-head">
            <div>
              <div className="section-label">
                <span>02</span>
                <b>GAME DEVELOPMENT</b>
              </div>

              <h2>
                Je crée des jeux,
                <br />
                <em>je teste des idées.</em>
              </h2>
            </div>

            <ExternalLink
              className="big-link"
              href="https://tiruuslow.itch.io/"
            >
              Voir tous mes jeux sur itch.io <Icon name="arrow" />
            </ExternalLink>
          </div>

          <p className="creative-intro">
            Le jeu vidéo est au cœur de mon parcours et de ce que je souhaite
            développer à long terme. J’aime prototyper des mécaniques,
            expérimenter avec le gameplay et transformer une idée en expérience
            jouable.
          </p>

          <div className="game-grid">
            {games.map((game) => (
              <ExternalLink
                href={game.href}
                className="game-card"
                key={game.title}
              >
                <div className="game-art">
                  <span>PLAY</span>
                  <div className="game-scan" />
                </div>

                <div className="game-info">
                  <h3>{game.title}</h3>

                  <p>{game.text}</p>

                  <div className="tag-list">
                    {game.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </ExternalLink>
            ))}
          </div>
        </section>

        {/* PROJECTS */}

        <section id="work" className="section work-section">
          <div className="section-label">
            <span>03</span>
            <b>PROJETS WEB & APPLICATIONS</b>
          </div>

          <div className="section-title-row">
            <h2>
              Des idées qui
              <br />
              deviennent des <em>outils.</em>
            </h2>

            <p>
              Mes projets web et personnels montrent une autre facette de mon
              profil : analyser un besoin, apprendre une technologie et
              construire une solution fonctionnelle.
            </p>
          </div>

          <div className="project-stack">
            {projects.map((project, index) => (
              <article
                className={`project-card ${
                  project.featured ? "project-featured" : ""
                }`}
                key={project.title}
              >
                <div className="project-art">
                  <img src={project.image} alt="" />
                  <span className="project-number">0{index + 1}</span>
                </div>

                <div className="project-content">
                  <div className="project-topline">
                    <span>{project.eyebrow}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  {project.links && (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <ExternalLink href={link.href} key={link.label}>
                          {link.label}
                        </ExternalLink>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ART */}

        <section className="section art-section">
          <div className="art-copy">
            <div className="section-label">
              <span>04</span>
              <b>3D · GAME ART · EXPÉRIMENTATION</b>
            </div>

            <h2>
              Le jeu passe aussi
              <br />
              par le <em>visuel.</em>
            </h2>

            <p>
              Modélisation 3D, création d’assets, environnements et
              expérimentations graphiques font partie de mon parcours GameWeb.
            </p>

            <ExternalLink
              className="big-link"
              href="https://www.artstation.com/tiruu"
            >
              Voir mon ArtStation <Icon name="arrow" />
            </ExternalLink>
          </div>

          <div className="art-preview">
            <div className="art-grid" />
            <span>3D / GAME ART</span>
          </div>
        </section>

        {/* ABOUT */}

        <section id="about" className="section about-section">
          <div className="section-label">
            <span>05</span>
            <b>À PROPOS</b>
          </div>

          <div className="about-grid">
            <h2>
              Un profil hybride,
              <br />
              avec le jeu vidéo
              <br />
              comme <em>objectif.</em>
            </h2>

            <div className="about-copy">
              <p>
                Mon parcours a commencé autour du jeu vidéo, de la 3D et du
                développement web. Ma formation GameWeb m’a permis de travailler
                sur des projets mêlant programmation, création visuelle et
                conception d’expériences interactives.
              </p>

              <p>
                J’ai ensuite développé des outils répondant à des besoins
                concrets, notamment chez VandB avec une application locale de
                gestion des réservations développée en HTML, CSS, JavaScript,
                PHP et SQL.
              </p>

              <p>
                Plus récemment, j’ai développé une application cartographique
                avec React, TypeScript, Supabase et MapLibre, ce qui m’a permis
                d’approfondir mes compétences en développement web moderne,
                gestion de données et déploiement.
              </p>

              <p>
                Je recherche aujourd’hui des opportunités en informatique et
                développement web, tout en continuant à développer mes projets
                de jeux vidéo avec l’objectif de me lancer progressivement comme
                développeur indépendant.
              </p>
            </div>
          </div>

          <div className="skills-row">
            {skills.map((group) => (
              <div className="skill-block" key={group.title}>
                <h3>{group.title}</h3>

                <div className="skill-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}

        <section id="contact" className="section contact-section">
          <div>
            <div className="section-label">
              <span>06</span>
              <b>CONTACT</b>
            </div>

            <h2>
              Un projet,
              <br />
              un poste,
              <br />
              <em>une discussion ?</em>
            </h2>
          </div>

          <div className="contact-card">
            <p>
              Je suis actuellement à la recherche d’un poste junior en
              informatique ou développement web, tout en développant mes projets
              personnels dans le jeu vidéo.
            </p>

            <a className="contact-email" href="mailto:lino.thebault@gmail.com">
              lino.thebault@gmail.com
            </a>

            <div className="socials">
              {socialLinks.map((link) => (
                <ExternalLink href={link.href} key={link.label}>
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Lino Thebault · Tiruu</span>

        <a href="#top">Retour en haut ↑</a>
      </footer>
    </div>
  );
}

export default App;
