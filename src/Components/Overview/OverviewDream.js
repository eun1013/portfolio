import { useNavigate } from "react-router-dom";
import DreamData from "../../data/OverviewDream.json";
import { GiCancel } from "react-icons/gi";
import { useEffect } from "react";

const OverviewDream = () => {
  const project = DreamData.main_project_1;
  const navigate = useNavigate('');

 useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    
  return (
    <div className="overviewDream">
      <button
      onClick={()=>{navigate('/')}} 
      className="cancel-btn"><GiCancel/></button>
      {/* Overview */}
      <section>
        <h1>{project.overview.title}</h1>
        <div className="overview-project">
          <div className="project-left">
            {project.overview.sections.map((sec, idx) => (
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
          <img
          src={`${process.env.PUBLIC_URL}${project.overview.image_file}`}
          alt="드림랜드 pc버전 예시 이미지"/>
        </div>
      </section>

      {/* Design System */}
    <h1>{project.design_system.title}</h1>
      <section className="overview-design">
        {project.design_system.sections.map((sec, idx) => (
          <div key={idx}>
            <h2>{sec.subtitle}</h2>
            {sec.colors && (
              <div className="design-color">
                {sec.colors.map((color, i) => (
                  <div
                    className="color"
                    key={i}
                    style={{backgroundColor: color}}
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
                  key={i}><strong>{font.name}</strong></li>
                  <li key={i}>{font.description}</li>
                  </>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* USER FLOW */}
      <section>
        <h1>{project.user_flow.title}</h1>
        <div className="overview-user">
        <img
          src={`${process.env.PUBLIC_URL}${project.user_flow.image_file}`}
          alt="드림랜드 userflow 구성 이미지"
        />
        </div>
      </section>

      {/* Retrospective */}
      <section>
        <h1>{project.retrospective.title}</h1>
        <div className="overview-solution">
        {project.retrospective.sections.map((sec, idx) => (
          <div 
          key={idx}>
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
}
export default OverviewDream;