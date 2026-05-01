import { useTranslation } from "../hooks/useTranslation";
import { User, Calendar, GraduationCap, Zap } from "lucide-react";
import cvData from "../data/cv.json";

export default function CV() {
  const { t } = useTranslation();
  const { cv } = cvData;

  return (
    <div className="page-container">
      <div className="cv-content">
        <section className="cv-section">
          <h2>{t("pages.cv.training", "Training")}</h2>
          <div className="training-list">
            {cv.training?.map((training) => (
              <div key={training.id} className="training-item">
                <div className="training-header">
                  <h3>{training.program}</h3>
                  {training.startYear && training.endYear && (
                    <span className="year-range">
                      <Calendar size={14} /> {training.startYear} -{" "}
                      {training.endYear}
                    </span>
                  )}
                </div>
                <span className="institution-badge">
                  <GraduationCap size={14} />
                  {training.institution}
                </span>
                <p className="status">{training.status}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2>{t("pages.cv.theater", "Theater")}</h2>
          <div className="theater-list">
            {cv.theater?.map((production) => (
              <div key={production.id} className="theater-item">
                <div className="theater-header">
                  <h3>{production.title}</h3>
                  {production.year && (
                    <span className="year-text">
                      - <Calendar size={14} /> {production.year}
                    </span>
                  )}
                </div>
                <p className="type">{production.type}</p>
                {production.characters && (
                  <div className="characters-badges">
                    {production.characters.map((char, idx) => (
                      <span key={idx} className="character-badge">
                        <User size={14} />
                        {char}
                      </span>
                    ))}
                  </div>
                )}
                {production.character && (
                  <span className="character-badge">
                    <User size={14} />
                    {production.character}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2>{t("pages.cv.audiovisual", "Audiovisual Work")}</h2>
          <div className="audiovisual-list">
            {cv.audiovisual?.map((work) => (
              <div key={work.id} className="audiovisual-item">
                <h3>{work.role}</h3>
                <p className="type">{work.type}</p>
                <span className="role-badge">
                  <Zap size={14} />
                  {work.type}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2>{t("pages.cv.skills", "Skills")}</h2>
          <div className="skills-grid">
            {cv.skills?.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2>{t("pages.cv.languages", "Languages")}</h2>
          <div className="languages-list">
            {cv.languages?.map((lang, index) => (
              <div key={index} className="language-item">
                <strong>{lang.language}</strong>
                <span className="proficiency">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
