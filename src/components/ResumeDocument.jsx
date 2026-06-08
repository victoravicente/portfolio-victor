import { CONTACT } from "../constants";
import { useLanguage } from "../context/LanguageContext";
import "../styles/resume-document.css";

export function ResumeDocument() {
  const { content } = useLanguage();
  const { personal, about, experience, projects, education, resume } = content;

  const contactLine = [
    CONTACT.email,
    CONTACT.github.replace("https://", ""),
    CONTACT.linkedin.replace("https://www.", "").replace("https://", ""),
  ].join(" | ");

  return (
    <div id="resume-document" aria-hidden="true">
      <div className="resume-page">
        <header className="resume-header">
          <h1 className="resume-name">{personal.name}</h1>
          <p className="resume-title">{personal.title}</p>
          <p className="resume-contact">{contactLine}</p>
        </header>

        <section className="resume-section">
          <h2 className="resume-section-title">{resume.summary}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="resume-text">
              {p}
            </p>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">{resume.experience}</h2>
          <div className="resume-company-row">
            <h3 className="resume-company">Sicredi</h3>
            <span className="resume-period">{resume.experienceSpan}</span>
          </div>
          <p className="resume-role">{experience[0]?.role}</p>
          {experience.map((exp, i) => (
            <div key={i} className="resume-timeline-item">
              <div className="resume-timeline-period">{exp.period}</div>
              <ul className="resume-list">
                {exp.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">{resume.projects}</h2>
          {projects.map((project) => (
            <div key={project.id} className="resume-project">
              <h3 className="resume-project-name">{project.name}</h3>
              <p className="resume-project-stack">{project.stack}</p>
              <p className="resume-project-desc">{project.description}</p>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">{resume.education}</h2>
          {education.map((edu, i) => (
            <div key={i} className="resume-edu-row">
              <div>
                <h3 className="resume-edu-degree">{edu.degree}</h3>
                <p className="resume-edu-school">{edu.full}</p>
              </div>
              <span className="resume-period">{edu.period}</span>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">{resume.skills}</h2>
          <div className="resume-skills-grid">
            {resume.stackGroups.map((group) => (
              <div key={group.label}>
                <h3 className="resume-skill-label">{group.label}</h3>
                <p className="resume-skill-items">{group.items.join(" | ")}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
