import { useEffect, useState, type ReactNode } from "react";
import { games, projects, skills, socialLinks } from "./data";

type IconName = "arrow" | "external" | "menu";

function Icon({ name }: { name: IconName }) {
  const paths = {
    arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
    external: <><path d="M14 4h6v6" /><path d="M10 14 20 4" /><path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  } as const;

  return <svg aria-hidden="true" viewBox="0 0 24 24">{paths[name]}</svg>;
}

function ExternalLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<Icon name="external" /></a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.title = "Lino Thebault — Junior Web Developer · Game Developer";
  }, []);

  return (
    <div className="site-shell" id="top">
      <div className="noise" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-symbol">T</span>
          <span className="brand-copy"><strong>TIRUU</strong><small>Lino Thebault</small></span>
        </a>

        <button className="menu-toggle" aria-expanded={menuOpen} aria-label="Ouvrir le menu" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name="menu" />
        </button>

        <nav className={menuOpen ? "nav-open" : ""}>
          <a href="#work" onClick={closeMenu}>Projets</a>
          <a href="#games" onClick={closeMenu}>Jeux</a>
          <a href="#about" onClick={closeMenu}>À propos</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a className="header-link" href="/downloadable/CV_THEBAULT_Lino_2026.pdf">CV <Icon name="arrow" /></a>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-main">
            <p className="hero-kicker"><span /> Junior Web Developer · Game Developer</p>
            <h1>Je construis des projets web.<br /><em>Et parfois des jeux.</em></h1>
            <p className="hero-intro">
              Développeur junior issu d’un BUT MMI GameWeb, j’aime partir d’un besoin concret, comprendre comment les choses fonctionnent et construire une solution qui tient réellement debout. React, TypeScript, JavaScript, PHP, SQL et C# font partie de ma boîte à outils.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Voir mes projets <Icon name="arrow" /></a>
              <a className="button button-ghost" href="/downloadable/CV_THEBAULT_Lino_2026.pdf">Télécharger mon CV <Icon name="arrow" /></a>
            </div>
            <div className="hero-facts">
              <span>Écommoy · France</span>
              <span>React · TypeScript · JavaScript</span>
              <span>PHP · SQL · Git/GitHub</span>
            </div>
          </div>

          <div className="hero-side">
            <div className="portrait-frame"><img src="/assets/avatar.jpg" alt="Portrait de Lino Thebault" /></div>
            <div className="side-note"><span className="signal" /> Disponible pour un poste junior</div>
            <div className="side-index">01 <span>/</span> 06</div>
          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="section-label"><span>02</span><b>PROJETS WEB & APPLICATIONS</b></div>
          <div className="section-title-row">
            <h2>Du besoin réel<br />au <em>code qui fonctionne.</em></h2>
            <p>Mes projets les plus pertinents pour un recruteur : une application web complète, un outil métier développé en entreprise et des expériences de développement réalisées en stage.</p>
          </div>

          <div className="project-stack">
            {projects.map((project, index) => (
              <article className={`project-card ${project.featured ? "project-featured" : ""}`} key={project.title}>
                <div className="project-art"><img src={project.image} alt={`Aperçu de ${project.title}`} /><span className="project-number">0{index + 1}</span></div>
                <div className="project-content">
                  <div className="project-topline"><span>{project.eyebrow}</span><span>{project.year}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  {project.links && <div className="project-links">{project.links.map((link) => <ExternalLink href={link.href} key={link.label}>{link.label}</ExternalLink>)}</div>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="games" className="section creative-section">
          <div className="creative-head">
            <div>
              <div className="section-label"><span>03</span><b>GAME DEVELOPMENT</b></div>
              <h2>Le jeu vidéo reste<br /><em>mon terrain de jeu.</em></h2>
            </div>
            <ExternalLink className="big-link" href="https://tiruuslow.itch.io/">Tous mes jeux sur itch.io <Icon name="arrow" /></ExternalLink>
          </div>
          <p className="creative-intro">Mon parcours GameWeb m’a appris à passer du gameplay au code, de la 3D à l’interface. Je garde cette partie créative active à travers des projets courts et jouables.</p>
          <div className="game-grid">
            {games.map((game) => (
              <ExternalLink href={game.href} className="game-card" key={game.title}>
                <div className="game-art"><img src={game.image} alt={`Screenshot de ${game.title}`} /><span>PLAY</span><div className="game-scan" /></div>
                <div className="game-info"><h3>{game.title}</h3><p>{game.text}</p><div className="tag-list">{game.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              </ExternalLink>
            ))}
          </div>
        </section>

        <section className="section art-section">
          <div className="art-copy">
            <div className="section-label"><span>04</span><b>3D · GAME ART · EXPÉRIMENTATION</b></div>
            <h2>Je ne fais pas que coder.<br /><em>Je fabrique aussi.</em></h2>
            <p>Modélisation 3D, assets et création visuelle complètent mon profil de développeur. Cette polyvalence vient directement de mon parcours GameWeb.</p>
            <ExternalLink className="big-link" href="https://www.artstation.com/tiruu">Voir mon ArtStation <Icon name="arrow" /></ExternalLink>
          </div>
          <div className="art-preview"><img src="/assets/art.png" alt="Création 3D de Lino" /><span>3D / GAME ART</span></div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-label"><span>05</span><b>À PROPOS</b></div>
          <div className="about-grid">
            <h2>Un profil assez hybride.<br /><em>Et c’est volontaire.</em></h2>
            <div className="about-copy">
              <p>Diplômé d’un BUT MMI parcours GameWeb, j’ai été formé au développement web, aux jeux vidéo, à la 3D et à la création d’expériences interactives.</p>
              <p>Chez VandB, j’ai transformé un besoin interne en application web locale de gestion des réservations de tireuses : HTML, CSS, JavaScript, PHP et SQL avec XAMPP. C’est probablement le projet qui représente le mieux ma manière de travailler : comprendre le problème, construire l’outil et l’améliorer avec les utilisateurs.</p>
              <p>Plus récemment, j’ai développé Ultra Auxerre, une application cartographique avec React, TypeScript, Vite, Supabase et MapLibre. Le projet m’a permis d’aller plus loin sur l’architecture d’une vraie application web : authentification, profils, contributions, données et déploiement.</p>
              <p>Aujourd’hui, je cherche un poste junior en développement web ou informatique pour continuer à progresser sur des projets réels. Le jeu vidéo reste mon objectif long terme et mon terrain d’expérimentation personnel.</p>
            </div>
          </div>
          <div className="skills-row">
            {skills.map((group) => <div className="skill-block" key={group.title}><h3>{group.title}</h3><div className="skill-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div>
            <div className="section-label"><span>06</span><b>CONTACT</b></div>
            <h2>Un poste,<br />un projet,<br /><em>une discussion ?</em></h2>
          </div>
          <div className="contact-card">
            <p>Je suis actuellement à la recherche d’une opportunité junior en développement web ou informatique.</p>
            <a className="contact-email" href="mailto:lino.thebault@gmail.com">lino.thebault@gmail.com</a>
            <div className="socials">{socialLinks.map((link) => <ExternalLink href={link.href} key={link.label}>{link.label}</ExternalLink>)}</div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Lino Thebault · Tiruu</span>
        <span>Fait avec du code, des bugs et beaucoup de curiosité.</span>
        <a href="/mentions-legales.html">Mentions légales</a>
        <a href="#top">Retour en haut ↑</a>
      </footer>
    </div>
  );
}

export default App;
