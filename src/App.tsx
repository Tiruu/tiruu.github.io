import { useEffect, useState, type ReactNode } from "react";
import { games, projects, skills, socialLinks } from "./data";

function Icon({ name }: { name: "arrow" | "external" | "mail" | "github" | "menu" }) {
  const paths = {
    arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
    external: <><path d="M14 4h6v6" /><path d="M10 14 20 4" /><path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.8S18 0.4 15 2.3a13.4 13.4 0 0 0-6 0C6 0.4 4.8.8 4.8.8A5 5 0 0 0 4.7 4 5.4 5.4 0 0 0 3.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4" /><path d="M9 18c-4.5 2-5-2-7-2" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  } as const;
  return <svg aria-hidden="true" viewBox="0 0 24 24">{paths[name]}</svg>;
}

function ExternalLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<Icon name="external" /></a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Lino Thebault — Portfolio";
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

        <a className="header-link" href="/downloadable/resume.pdf">CV <Icon name="arrow" /></a>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-main">
            <p className="hero-kicker"><span /> Technicien informatique junior · Développeur web junior</p>
            <h1>Je crée des<br /><em>outils qui servent</em><br />à quelque chose.</h1>
            <p className="hero-intro">
              Développeur issu d’un parcours GameWeb, j’aime autant construire une application utile que fabriquer une expérience interactive. Aujourd’hui, je me tourne vers l’IT et le développement web.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explorer mes projets <Icon name="arrow" /></a>
              <a className="button button-ghost" href="mailto:lino.thebault@gmail.com">Me contacter <Icon name="mail" /></a>
            </div>
            <div className="hero-facts"><span>Écommoy · France</span><span>Anglais C1 · TOEIC 975</span><span>Permis B</span></div>
          </div>
          <div className="hero-side">
            <div className="portrait-frame"><img src="/assets/avatar.svg" alt="Portrait de Lino Thebault" /></div>
            <div className="side-note"><span className="signal" /> Disponible pour un poste junior</div>
            <div className="side-index">01 <span>/</span> 05</div>
          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="section-label"><span>02</span><b>PROJETS PERSONNELS & PROFESSIONNELS</b></div>
          <div className="section-title-row"><h2>Construire.<br /><em>Comprendre.</em> Améliorer.</h2><p>Quelques projets où le code est parti d’un besoin, d’une idée ou d’une envie d’expérimenter.</p></div>

          <div className="project-stack">
            {projects.map((project, index) => (
              <article className={`project-card ${project.featured ? "project-featured" : ""}`} key={project.title}>
                <div className="project-art"><img src={project.image} alt="" /><span className="project-number">0{index + 1}</span></div>
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
            <div><div className="section-label"><span>03</span><b>CRÉATIONS</b></div><h2>Mes jeux, <em>ailleurs.</em></h2></div>
            <ExternalLink className="big-link" href="https://tiruuslow.itch.io/">Voir tout sur itch.io <Icon name="arrow" /></ExternalLink>
          </div>
          <p className="creative-intro">Le développement de jeux reste une partie importante de mon parcours. Je garde cet espace séparé des projets IT pour que chaque univers ait sa place.</p>
          <div className="game-grid">
            {games.map((game) => (
              <ExternalLink href={game.href} className="game-card" key={game.title}>
                <div className="game-art"><span>PLAY</span><div className="game-scan" /></div>
                <div className="game-info"><h3>{game.title}</h3><p>{game.text}</p><div className="tag-list">{game.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              </ExternalLink>
            ))}
          </div>
        </section>

        <section className="section art-section">
          <div className="art-copy"><div className="section-label"><span>04</span><b>3D · ART · EXPÉRIMENTATION</b></div><h2>Je garde aussi une place pour le <em>visuel.</em></h2><p>Modélisation 3D, assets, environnements et expérimentations graphiques font partie de mon parcours GameWeb.</p><ExternalLink className="big-link" href="https://www.artstation.com/tiruu">Voir mon ArtStation <Icon name="arrow" /></ExternalLink></div>
          <div className="art-preview"><div className="art-grid" /><span>3D / GAME ART</span></div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-label"><span>05</span><b>À PROPOS</b></div>
          <div className="about-grid">
            <h2>Un profil hybride, mais un objectif clair.</h2>
            <div className="about-copy">
              <p>Mon parcours a commencé dans le jeu vidéo, la 3D et le développement web. Ces années m’ont appris à apprendre vite, à décomposer un problème et à aller jusqu’au bout d’un projet.</p>
              <p>Chez VandB, j’ai ensuite développé un outil local de réservation avec HTML, CSS, JavaScript, PHP et SQL pour répondre à un besoin concret du magasin. Plus récemment, j’ai construit une application cartographique avec React, TypeScript, Supabase et MapLibre.</p>
              <p>Je cherche maintenant un environnement où je peux continuer à progresser en informatique, apporter mon regard de développeur et devenir rapidement autonome.</p>
            </div>
          </div>
          <div className="skills-row">{skills.map((group) => <div className="skill-block" key={group.title}><h3>{group.title}</h3><div className="skill-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
        </section>

        <section id="contact" className="section contact-section">
          <div><div className="section-label"><span>06</span><b>CONTACT</b></div><h2>Un projet, un poste,<br /><em>une discussion ?</em></h2></div>
          <div className="contact-card"><p>Je suis actuellement à la recherche d’un poste junior en informatique ou développement web.</p><a className="contact-email" href="mailto:lino.thebault@gmail.com">lino.thebault@gmail.com</a><div className="socials">{socialLinks.map((link) => <ExternalLink href={link.href} key={link.label}>{link.label}</ExternalLink>)}</div></div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Lino Thebault · Tiruu</span><a href="#top">Retour en haut ↑</a></footer>
    </div>
  );
}

export default App;
