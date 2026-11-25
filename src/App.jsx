import { useState } from 'react';
import './App.css';

const projects = [
  {
    number: "01",
    name: "JobRunner",
    category: "BACKGROUND TASK PROCESSING",
    description:
      "A backend system for creating, processing and managing background jobs with asynchronous task execution.",
    stack: [
      "Python",
      "FastAPI",
      "Celery",
      "Redis",
      "PostgreSQL",
      "SQLAlchemy",
    ],
    highlights: [
      "Asynchronous task execution",
      "Job status management",
      "Retry and cancellation",
    ],
    status: "Backend completed",
    repository: "https://github.com/Bulat-crt/jobrunner",
  },
  {
    number: "02",
    name: "CRM FastAPI",
    category: "CUSTOMER RELATIONSHIP MANAGEMENT",
    description:
      "A full-stack CRM application designed to manage customers and business data through a REST API.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "JavaScript",
    ],
    highlights: [
      "REST API architecture",
      "JWT authentication",
      "Relational database",
    ],
    status: "In development",
    repository: "https://github.com/Bulat-crt/crm-fastapi",
  },
  {
    number: "03",
    name: "Link Shortener",
    category: "WEB SERVICE",
    description:
      "A lightweight URL shortening service built with Python and FastAPI.",
    stack: [
      "Python",
      "FastAPI",
      "SQLite",
      "Pydantic",
    ],
    highlights: [
      "URL shortening",
      "API endpoints",
      "Data validation",
    ],
    status: "Personal project",
    repository: "https://github.com/Bulat-crt/link-shortner",
  },
];



const skillGroups = [
  {
    level: "INTERMEDIATE",
    description: "Technologies I actively use in development.",
    skills: [
      "Python",
      "FastAPI",
      "REST API",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Pydantic",
      "Pytest",
      "Docker",
      "Git",
    ],
  },
  {
    level: "BASIC",
    description: "Technologies I have foundational experience with.",
    skills: [
      "Redis",
      "Celery",
      "JWT",
    ],
  },
];


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="portfolio">
      <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
        <a
          href="#home"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          bulat<span>.</span>
        </a>

        <div className="header-menu">
          <nav className="navigation">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>

          <a
            href="https://github.com/Bulat-crt"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            GitHub ↗
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              Open to opportunities
            </div>

            <p className="eyebrow">HELLO, I'M BULAT</p>

            <h1>
              Python Backend
              <br />
              <span>Developer.</span>
            </h1>

            <p className="hero-description">
              I build backend applications, design REST APIs
              and work with databases. Constantly learning
              and improving my engineering skills.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button primary-button">
                Explore my work ↗
              </a>
              <a href="#contact" className="button secondary-button">
                Get in touch
              </a>
            </div>

            <div className="hero-footer">
              <span>PYTHON</span>
              <span>BACKEND</span>
              <span>DEVELOPMENT</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>developer.py</span>
              </div>

              <div className="terminal-content">
                <p><span className="code-purple">class</span> Developer:</p>
                <p className="indent">
                  name = <span className="code-green">"Bulat"</span>
                </p>
                <p className="indent">
                  role = <span className="code-green">"Backend Developer"</span>
                </p>
                <p className="indent">
                  languages = [<span className="code-green">"Python"</span>]
                </p>
                <br />
                <p className="indent">
                  <span className="code-purple">def</span> build(self):
                </p>
                <p className="indent double-indent">
                  <span className="code-purple">return</span>{" "}
                  <span className="code-green">"Something great"</span>
                </p>
                <br />
                <p>
                  <span className="code-muted"># Always learning...</span>
                </p>
                <p className="terminal-cursor">▌</p>
              </div>
            </div>

            <div className="visual-decoration decoration-one"></div>
            <div className="visual-decoration decoration-two"></div>
          </div>
        </section>


        <section className="section about-section" id="about">
          <p className="eyebrow">01 / ABOUT ME</p>

          <div className="about-heading">
            <h2>
              Turning ideas into
              <br />
              <span>working solutions.</span>
            </h2>

            <span className="about-number">01</span>
          </div>

          <div className="about-content">
            <div className="about-intro">
              <p className="about-lead">
                I'm Bulat, a Python Backend Developer focused on
                building reliable and maintainable backend applications.
              </p>

              <p>
                My main interests are backend architecture, REST API
                development, database design and asynchronous task
                processing.
              </p>
            </div>

            <div className="about-details">
              <p>
                I enjoy understanding how things work under the hood,
                solving engineering problems and writing clean,
                structured code.
              </p>

              <p>
                Currently, I'm developing personal projects, improving
                my knowledge of Python ecosystem and strengthening
                my software engineering fundamentals.
              </p>

              <div className="about-focus">
                <span className="focus-dot"></span>
                <span>Focused on continuous growth</span>
              </div>
            </div>
          </div>
        </section>



        <section className="section skills-section" id="skills">
          <p className="eyebrow">02 / TECHNOLOGIES</p>

          <h2>
            My tech stack<span>.</span>
          </h2>

          <p className="section-description">
            Technologies and tools I use to build backend applications.
          </p>

          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.level}>
                <div className="skill-group-header">
                  <div>
                    <h3>{group.level}</h3>
                    <p>{group.description}</p>
                  </div>

                  <span className="skill-count">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="skills-grid">
                  {group.skills.map((skill) => (
                    <div className="skill-item" key={skill}>
                      <span className="skill-indicator"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="section projects-section" id="projects">
          <p className="eyebrow">03 / SELECTED WORK</p>
          <h2>Things I've built<span>.</span></h2>

          <p className="section-description">
            A selection of my personal development projects.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">
                    / {project.number}
                  </span>

                  <span className="project-status">
                    {project.status}
                  </span>
                </div>

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-highlights">
                  {project.highlights.map((item) => (
                    <div className="project-highlight" key={item}>
                      <span>↗</span>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View repository <span>↗</span>
                </a>
              </article>
            ))}
          </div>

          <a
            href="https://github.com/Bulat-crt"
            target="_blank"
            rel="noreferrer"
            className="all-projects"
          >
            View all repositories on GitHub ↗
          </a>
        </section>


        <section className="section contact-section" id="contact">
          <p className="eyebrow">04 / GET IN TOUCH</p>

          <div className="contact-layout">
            <div className="contact-main">
              <h2>
                Let's build something
                <br />
                <span>together.</span>
              </h2>

              <p className="section-description">
                I'm open to internship opportunities, junior positions
                and interesting collaborations.
                Feel free to get in touch.
              </p>

              <a
                href="mailto:bulatforitwork@gmail.com"
                className="button primary-button"
              >
                Send me an email ↗
              </a>
            </div>

            <div className="contact-links">
              <a
                href="mailto:bulatforitwork@gmail.com"
                className="contact-card"
              >
                <div>
                  <span className="contact-label">EMAIL</span>
                  <h3>bulatforitwork@gmail.com</h3>
                </div>
                <span className="contact-arrow">↗</span>
              </a>

              <a
                href="https://github.com/Bulat-crt"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <div>
                  <span className="contact-label">GITHUB</span>
                  <h3>Bulat-crt</h3>
                </div>
                <span className="contact-arrow">↗</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          bulat<span>.</span>
        </a>
        <p>Designed & built by Bulat © 2026</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
