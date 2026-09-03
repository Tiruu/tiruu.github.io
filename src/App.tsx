import { useEffect, useState, type ReactNode } from "react";
import { games, projects, skills, socialLinks, type Project } from "./data";

type IconName = "arrow" | "external" | "menu" | "close";

function Icon({ name }: { name: IconName }) {
  const paths = {
    arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
    external: <><path d="M14 4h6v6" /><path d="M10 14 20 4" /><path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
  } as const;

  return <svg aria-hidden="true" viewBox="0 0 24 24">{paths[name]}</svg>;
}

function ExternalLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<Icon name="external" /></a>;
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [onClose]);

  return (
    <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="project-modal-card">
        <button className="modal-close" onClick={onClose} aria-label="Fermer"><Icon name="close" /></button>
        <div className="modal-image"><img src={project.image} alt={`Aperçu de ${project.title}`} /></div>
        <div className="modal-body">
          <div className="project-topline"><span>{project.eyebrow}</span><span>{project.year}</span></div>
          <h2 id="project-modal-title">{project.title}</h2>
          <div className="modal-tags tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <div className="case-grid">
            <div><span className="case-label">CONTEXTE</span><p>{project.caseStudy.context}</p></div>
            <div><span className="case-label">CE QUE J’AI CONSTRUIT</span><p>{project.caseStudy.built}</p></div>
            <div><span className="case-label">CE QUE ÇA DÉMONTRE</span><p>{project.caseStudy.proof}</p></div>
          </div>
          {project.links && <div className="modal-links">{project.links.map((link) => <ExternalLink className="button button-primary" href={link.href} key={link.label}>{link.label} <Icon name="arrow" /></ExternalLink>)}</div>}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.title = "Lino Thebault — Junior Web Developer · Game Developer";
  }, []);

  useEffect(() => {
    const selectors = ["[data-crt-jolt]"].join(",");
    let timeoutId: number;

    const trigger = () => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors));
      if (elements.length) {
        const element = elements[Math.floor(Math.random() * elements.length)];
        element.classList.remove("crt-jolt");
        void element.offsetWidth;
        element.classList.add("crt-jolt");
        window.setTimeout(() => element.classList.remove("crt-jolt"), 220);
      }
      timeoutId = window.setTimeout(trigger, 4200 + Math.random() * 6200);
    };

    timeoutId = window.setTimeout(trigger, 2600 + Math.random() * 3000);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="site-shell" id="top">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Oxanium:wght@400;500;600;700&family=Press+Start+2P&display=swap');
.hero h1, h2, h3, .brand-symbol, .brand-copy strong, .project-content h3, .game-info h3 { font-family: "Oxanium", "Space Grotesk", sans-serif; }
.crt-overlay { position: fixed; inset: 0; z-index: 39; pointer-events: none; opacity: .2; background: repeating-linear-gradient(to bottom, rgba(255,255,255,.025) 0, rgba(255,255,255,.025) 1px, transparent 1px, transparent 4px); mix-blend-mode: screen; }
.crt-overlay::after { content: ""; position: absolute; inset: 0; background: radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,.3) 100%); }
.crt-jolt { animation: crt-jolt .18s steps(2, end) both; }
@keyframes crt-jolt { 0%,100% { transform: translate(0,0); filter: none; } 18% { transform: translate(-1px,1px) skewX(.2deg); filter: saturate(1.12); } 38% { transform: translate(2px,-1px); filter: contrast(1.08); } 57% { transform: translate(-2px,0); } 76% { transform: translate(1px,1px); filter: saturate(1.2); } }
.crt-jolt::before { text-shadow: -1px 0 rgba(67,217,255,.65), 1px 0 rgba(255,79,216,.55); }
@media (prefers-reduced-motion: reduce) { .crt-overlay { display: none; } .crt-jolt { animation: none !important; } }`}</style>
      <div className="crt-overlay" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div className="pixel-orb pixel-orb-one" aria-hidden="true" />
      <div className="pixel-orb pixel-orb-two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} data-crt-jolt>
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
            <h1 data-crt-jolt>Je construis des projets web.<br /><em>Je débugue des trucs. Je fais aussi des jeux.</em></h1>
            <p className="hero-intro">
              Développeur junior issu d’un BUT MMI GameWeb, je suis le genre de personne à partir d’une idée ou d’un problème et à vouloir comprendre comment ça marche. J’aime bricoler, tester, casser des trucs, puis essayer de les rendre meilleurs. React, TypeScript, JavaScript, PHP, SQL et C# font partie de ma boîte à outils.
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
            <div className="portrait-frame" data-crt-jolt><img src="/assets/avatar.jpg" alt="Portrait de Lino Thebault" /></div>
            <div className="side-note"><span className="signal" /> Disponible pour un poste junior</div>
            <div className="side-index">01 <span>/</span> 06</div>
          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="section-label"><span>02</span><b>PROJETS WEB & APPLICATIONS</b></div>
          <div className="section-title-row">
            <h2>Des projets qui<br />ont commencé par<br /><em>« tiens, ce serait cool si… »</em></h2>
            <p>Une sélection de projets personnels et professionnels. Cliquez sur une carte pour voir le contexte, ce que j’ai construit et ce que le projet démontre concrètement.</p>
          </div>

          <div className="project-stack">
            {projects.map((project, index) => (
              <article
                className={`project-card ${project.featured ? "project-featured" : ""}`}
                key={project.title}
                role="button"
                tabIndex={0}
                data-crt-jolt
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                <div className="project-art"><img src={project.image} alt={`Aperçu de ${project.title}`} /><span className="project-number">0{index + 1}</span><span className="project-open">VOIR LE PROJET <Icon name="arrow" /></span></div>
                <div className="project-content">
                  <div className="project-topline"><span>{project.eyebrow}</span><span>{project.year}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <span className="project-more">Lire la fiche projet <Icon name="arrow" /></span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="games" className="section creative-section">
          <div className="creative-head">
            <div>
              <div className="section-label"><span>03</span><b>GAME DEVELOPMENT</b></div>
              <h2>Je fais des jeux,<br /><em>parce que c’est quand même bien marrant.</em></h2>
            </div>
            <ExternalLink className="big-link" href="https://tiruuslow.itch.io/">Voir tous mes jeux sur itch.io <Icon name="arrow" /></ExternalLink>
          </div>
          <p className="creative-intro">Le jeu vidéo n’est pas une ligne décorative sur mon CV : c’est le terrain où je teste mes idées, mes mécaniques, la 3D et surtout une direction artistique qui me ressemble. J’ai une vraie affinité pour le low-poly et l’esthétique des jeux N64.</p>
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
            <h2>Parce qu’un jeu,<br />ça doit aussi<br /><em>avoir une gueule.</em></h2>
            <p>Je passe aussi pas mal de temps de l’autre côté du code : modélisation 3D, création d’assets, environnements et expérimentations visuelles. Mon terrain de prédilection : le low-poly, les formes simples et les images qui ont un petit goût de console des années 90.</p>
            <ExternalLink className="big-link" href="https://www.artstation.com/tiruu">Jeter un œil à mon ArtStation <Icon name="arrow" /></ExternalLink>
          </div>
          <div className="art-preview"><img src="/assets/art.png" alt="Création 3D de Lino" /><span>3D / GAME ART</span></div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-label"><span>05</span><b>À PROPOS</b></div>
          <div className="about-grid">
            <h2>Je touche à beaucoup de choses.<br />J’essaie surtout de comprendre<br /><em>ce que je fais.</em></h2>
            <div className="about-copy">
              <p>Ma formation BUT MMI GameWeb m’a amené à travailler sur le web, le jeu vidéo, la programmation, le game design et la 3D. Ce qui m’est resté, c’est surtout l’envie de comprendre comment les choses fonctionnent et de construire moi-même.</p>
              <p>Chez VandB, par exemple, j’ai transformé un besoin réel en outil métier : une application locale pour mieux gérer les réservations de tireuses, développée en HTML, CSS, JavaScript, PHP et SQL avec XAMPP.</p>
              <p>Plus récemment, <strong>Ultra Stick Map</strong> m’a permis de passer à une stack web moderne avec React, TypeScript, Supabase et MapLibre, tout en me confrontant à un projet qui grandit beaucoup plus vite que prévu.</p>
              <p>Aujourd’hui, je cherche un poste junior en informatique ou développement web pour gagner en expérience sur de vrais projets. En parallèle, je continue de développer des jeux, avec l’objectif à terme d’en faire mon activité indépendante.</p>
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
            <p>Je suis actuellement à la recherche d’une opportunité junior en développement web ou informatique. Si vous avez un projet, un poste ou simplement envie de discuter code, jeux vidéo ou projets un peu bizarres, ma boîte mail est ouverte.</p>
            <a className="contact-email" href="mailto:lino.thebault@gmail.com">lino.thebault@gmail.com</a>
            <div className="socials">{socialLinks.map((link) => <ExternalLink href={link.href} key={link.label}>{link.label}</ExternalLink>)}</div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Lino Thebault · Tiruu</span>
        <span>Fait avec un peu de code, une pincée de bugs, et beaucoup de fun.</span>
        <a href="/mentions-legales.html">Mentions légales</a>
        <a href="#top">Retour en haut ↑</a>
      </footer>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}

export default App;
