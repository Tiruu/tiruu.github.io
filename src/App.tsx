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

        <a
          className="header-link"
          href="/downloadable/CV_THEBAULT_Lino_2026.pdf"
        >
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
              Développeur à mi-temps
              <br />
              <em>Débugueur à plein temps.</em>
            </h1>

            <p className="hero-intro">
              Game developer dans l’âme, développeur web par curiosité et
              bricoleur de projets en tout genre. J’aime comprendre comment les
              choses fonctionnent, les casser un peu, puis essayer de les rendre
              meilleures.
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
              <span>Unity · Godot · C# · GDScript</span>
              <span>Web · React · TypeScript</span>
            </div>
          </div>

          <div className="hero-side">
            <div className="portrait-frame">
              <img src="/assets/avatar.jpg" alt="Portrait de Lino Thebault" />
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
                Je fais des jeux,
                <br />
                <em>parce que c'est quand-même bien marrant.</em>
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
            Entre deux projets web et quelques bugs existentiels, je continue de
            fabriquer des petits jeux. Certains sont sérieux. D'autres beaucoup
            moins. Ils sont tous jouables sur itch.io.
          </p>

          <div className="game-grid">
            {games.map((game) => (
              <ExternalLink
                href={game.href}
                className="game-card"
                key={game.title}
              >
                <div className="game-art">
                  <img src={game.image} alt={`Screenshot de ${game.title}`} />
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
              Des projets qui
              <br />
              ont commencé par
              <br />
              <em>« tiens, ce serait cool si… »</em>
            </h2>

            <p>
              Une sélection de projets personnels et professionnels :
              applications, prototypes, outils maison et autres idées qui ont
              fini par devenir du code.
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
              Parce qu'un jeu,
              <br />
              ça doit aussi
              <br />
              <em>avoir une gueule.</em>
            </h2>

            <p>
              Je passe aussi pas mal de temps de l’autre côté du code :
              modélisation 3D, création d’assets, environnements et
              expérimentations visuelles. Je ne prétends pas être un artiste
              avant tout, mais j’aime pouvoir fabriquer moi-même ce dont mes
              jeux ont besoin.
            </p>

            <ExternalLink
              className="big-link"
              href="https://www.artstation.com/tiruu"
            >
              Jeter un oeil à mon ArtStation <Icon name="arrow" />
            </ExternalLink>
          </div>

          <div className="art-preview">
            <img src="/assets/art.png" alt="Création 3D de Lino" />
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
              Je touche à beaucoup de choses.
              <br />
              J'essaie surtout de comprendre
              <br />
              <em>ce que je fais.</em>
            </h2>

            <div className="about-copy">
              <p>
                J’ai commencé à bidouiller autour du jeu vidéo, de la 3D et du
                web, et finalement je suis resté accro à l’idée de créer des
                choses moi-même. Ma formation GameWeb m’a permis de toucher à
                tout ça : programmation, game design, création 3D et
                développement d’expériences interactives.
              </p>

              <p>
                J’aime surtout partir d’une idée ou d’un problème et voir
                jusqu’où je peux aller avec. Chez VandB, par exemple, j’avais
                besoin d’un outil pour mieux gérer les réservations de tireuses.
                Alors je l’ai développé moi-même en HTML, CSS, JavaScript, PHP
                et SQL, avec une base de données locale sous XAMPP.
              </p>

              <p>
                Plus récemment, je me suis lancé dans une application
                cartographique avec React, TypeScript, Supabase et MapLibre.
                C’est un projet qui m’a permis de sortir de ma zone de confort,
                de découvrir de nouvelles technologies et surtout de me
                confronter à un projet qui grandit beaucoup plus vite que prévu.
              </p>

              <p>
                Aujourd’hui, je cherche un poste en informatique ou
                développement web pour continuer à apprendre et gagner en
                expérience, tout en gardant le jeu vidéo au centre de mes
                projets personnels. À terme, mon objectif est de pouvoir en
                faire mon activité et me lancer comme développeur indépendant.
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

        <span>
          Fait avec un peu de code, une pincée de bugs, et beaucoup de fun.
        </span>

        <a href="/mentions-legales.html">Mentions légales</a>

        <a href="#top">Retour en haut ↑</a>
      </footer>
    </div>
  );
}

export default App;
