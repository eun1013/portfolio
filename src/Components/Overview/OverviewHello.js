import { useNavigate } from "react-router-dom";
import HelloData from "../../data/OverviewHello.json";
import { GiCancel } from "react-icons/gi";
import { useEffect } from "react";

const OverviewHello = () => {
  const project = HelloData.main_project_1;
  const navigate = useNavigate();

  useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

  return (
    <div className="overviewHello">
      {/* 뒤로가기 버튼 */}
      <button
        onClick={() => {
          navigate("/");
        }}
        className="cancel-btn"
      >
        <GiCancel />
      </button>

      {/* OVERVIEW */}
      <section>
        <h1>{project.overview.title}</h1>
        <div className="overview-project">
          <div className="project-left">
            {project.overview.sections.map((sec, idx) => (
              <div key={idx}>
                <h2>{sec.title}</h2>
                {Array.isArray(sec.content) ? (
                  <ul>
                    {sec.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{sec.content}</p>
                )}
              </div>
            ))}
          </div>
          <img
            src={`${process.env.PUBLIC_URL}${project.overview.image_file}`}
            alt="끝말잇기 게임 예시 이미지"
          />
        </div>
      </section>

      {/* DESIGN SYSTEM */}
    <h1>{project.design_system.title}</h1>
      <section className="overview-design">
        <div className="design-left">
        {project.design_system.sections.map((sec, idx) => (
          <div key={idx}>
            <h2>{sec.subtitle}</h2>
            {sec.colors && (
              <div className="design-color">
                {sec.colors.map((color, i) => (
                  <div
                    className="color"
                    key={i}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
            {sec.description && <p>{sec.description}</p>}
            {sec.fonts && (
              <ul className="design-font">
                {sec.fonts.map((font, i) => (
                  <>
                  <li 
                  className="font" 
                  key={i}><strong>{font.name} </strong></li>
                  <li key={i}>{font.description}</li>
                  </>
                ))}
              </ul>
            )}
          </div>
        ))}
        </div>
        {/* 디자인 시스템 이미지 */}
        <div className="design-right">
        {project.design_system.image_file &&
          project.design_system.image_file.map((img, idx) => (
            <img
              key={idx}
              src={`${process.env.PUBLIC_URL}${img}`}
              alt={`Design system ${idx + 1}`}
            />
          ))}
          </div>
      </section>

      {/* RETROSPECTIVE */}
      <section>
        <h1>{project.retrospective.title}</h1>
        <div className="overview-solution">
          {project.retrospective.sections.map((sec, idx) => (
            <div key={idx}>
              <h2>{sec.subtitle}</h2>
              {Array.isArray(sec.content) ? (
                <ul>
                  {sec.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{sec.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OverviewHello;