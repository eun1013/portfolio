import { useNavigate } from "react-router-dom";
import SodamData from "../../data/OverviewSodam.json"; // JSON 파일 경로
import { GiCancel } from "react-icons/gi";
import React, { useEffect } from "react";

const OverviewSodam = () => {
  const project = SodamData.main_project_1;
  const navigate = useNavigate();

  useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

  return (
    <div className="overviewSodam">
      {/* 닫기 버튼 */}
      <button
        onClick={() => navigate("/")}
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
            alt="소담상점 Overview\ 이미지"
          />
        </div>
      </section>

      {/* DESIGN SYSTEM */}
    <h1>{project.design_system.title}</h1>
      <section className="overview-design">
        {project.design_system.sections.map((sec, idx) => (
          <div key={idx}>
            <h2>{sec.subtitle}</h2>

            {/* 색상 팔레트 */}
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

            {/* 설명 */}
            {sec.description && <p>{sec.description}</p>}

            {/* 폰트 스타일 */}
            {sec.fonts && (
               <ul className="design-font">
                {sec.fonts.map((font, i) => (
                  <React.Fragment key={i}>
                  <li 
                  className="font" 
                  ><strong>{font.name} </strong></li>
                  <li>{font.description}</li>
                  </React.Fragment>
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
          alt="소담상점 User Flow 구성 이미지 "
        />
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

export default OverviewSodam;
