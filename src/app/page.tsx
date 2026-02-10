import Image from "next/image";
import ProjectGallery from "./components/ProjectGallery";
import site from "../content/site.json";

export default function Home() {
  const hasProjects = site.projects.length > 0;
  const hasPosts = site.posts.length > 0;

  return (
    <div className="page">
      <div className="grain" aria-hidden="true" />

      <header className="top">
        <div className="brand">{site.name}</div>
        <nav className="nav">
          {hasProjects && <a href="#work">Work</a>}
          <a href="#about">About</a>
          {hasPosts && <a href="#insights">Insights</a>}
          <a href="#contact">Contact</a>
        </nav>
        <a className="pill" href={`mailto:${site.contact.email}`}>
          Open to collaborations
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-left">
            <p className="eyebrow">Portfolio 2026</p>
            <h1 className="hero-title">
              {site.name} — {site.role}
            </h1>
            <p className="hero-copy">{site.summary}</p>
            <div className="hero-cta">
              {hasProjects && (
                <a className="pill primary" href="#work">
                  View portfolio
                </a>
              )}
              <a className="pill ghost" href={`mailto:${site.contact.email}`}>
                Contact me
              </a>
            </div>
            <div className="badges">
              {site.highlights.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              <p className="card-label">Currently</p>
              <h2>{site.role}</h2>
              <p>{site.location}</p>
              <div className="stat-grid">
                <div>
                  <span className="stat">{new Date().getFullYear() - 2019}+</span>
                  <span className="stat-label">Years in production</span>
                </div>
                <div>
                  <span className="stat">{site.skills.length}</span>
                  <span className="stat-label">Core skills</span>
                </div>
              </div>
            </div>
            <div className="hero-photo">
              <Image
                src="/2026.jpg"
                alt="Daniel Park profile photo"
                fill
                sizes="(max-width: 900px) 70vw, 280px"
                priority
              />
            </div>
            <div className="hero-portrait" aria-hidden="true" />
          </div>
        </section>

        <section id="work" className="section work">
          <div className="section-head">
            <h2>Selected Work</h2>
            <p>
              Each project is a blueprint for momentum: sharp interfaces, resilient systems, and measurable
              gains.
            </p>
          </div>
          {hasProjects ? (
            <ProjectGallery projects={site.projects} />
          ) : (
            <div className="card placeholder">
              More case studies are in progress. I prioritize depth over volume and only share the work I can stand
              behind.
            </div>
          )}
        </section>

        <section id="about" className="section about">
          <div className="about-left">
            <h2>About</h2>
            <p>{site.about_en}</p>
            <div className="signals">
              <div className="signal">
                <span>Toolkit</span>
                <strong>{site.skills.join(", ")}</strong>
              </div>
              <div className="signal">
                <span>Focus</span>
                <strong>Human-centric systems, platform reliability, product trust</strong>
              </div>
            </div>
          </div>
          <div className="about-right">
            <div className="callout">
              <h3>Notes on craft</h3>
              <p>
                I prioritize clear ownership, resilient data flows, and systems that keep promises when traffic or
                stakes rise.
              </p>
            </div>
            <div className="callout">
              <h3>Availability</h3>
              <p>Open to platform builds, backend architecture, and trusted delivery partnerships.</p>
            </div>
          </div>
        </section>

        <section id="insights" className="section insights">
          <div className="section-head">
            <h2>Insights</h2>
            <p>Dispatches on product craft, systems thinking, and pragmatic design.</p>
          </div>
          {hasPosts ? (
            <div className="grid notes-grid">
              {site.posts.map((post) => (
                <article key={post.title} className="note">
                  <span>{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="card placeholder">
              New essays are in progress. I only publish notes after they have been tested in production.
            </div>
          )}
        </section>
      </main>

      <footer id="contact" className="footer">
        <div>
          <h2>Lets build something trustworthy.</h2>
          <p>{site.contact.email}</p>
        </div>
        <div className="footer-actions">
          <a className="pill primary" href={`mailto:${site.contact.email}`}>
            Start a project
          </a>
          <a className="pill ghost" href={site.contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="pill ghost" href={site.contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
