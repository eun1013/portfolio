import data from "../../data/CloneCoding.json"; // JSON 경로
import cloneData from "../../data/Clone.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper 스타일
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";


// 팝업 컴포넌트 추가
const ProjectPopup = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="popup">
      <div className="popup-overlay">
        <div className="project-popup">
          <button className="close-btn" onClick={onClose}>×</button>
          <h2>{project.title}</h2>
          {project.sections.map((section, index) => (
            <div key={index} className="popup-section">
              <h3>{section.subtitle}</h3>
              {Array.isArray(section.content) ? (
                <ul>
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
              {section.content2 && (
                <ul className="content2">
                  {section.content2.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <a href={project.link}>
        <img
          src={`${process.env.PUBLIC_URL}${project.image}`}
          alt={project.title}
          className="popup-image"
        />
        </a>
      </div>
    </div>
  );
};

const CloneCoding = () => {
  // 선택된 프로젝트 번호 저장 (number 필드 기준)
  const [selectedProject, setSelectedProject] = useState(null);

  // 프로젝트 클릭 시 해당 프로젝트 선택
  const handleClick = (projectNumber) => {
    setSelectedProject(projectNumber);
  };

  // 팝업 닫기
  const closePopup = () => {
    setSelectedProject(null);
  };

  // 선택된 프로젝트 데이터 찾기
  const selectedProjectData = selectedProject
    ? cloneData.find(project => project.number === selectedProject)
    : null;

  return (
    <div className="clone">
      <h1>{data.mainTitle}</h1>
      <p className="clone-des">{data.mainDescription}</p>

      <Swiper
        className="projects-list"
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        loop={true} // 무한 반복
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.projects.map((project,idx) => (
          <SwiperSlide key={project.id}>
            <div 
            key={idx}
            className="project-card">
              <div className="card-name">
                <h2>{project.id}</h2>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="card">
                <img
                  src={`${process.env.PUBLIC_URL}${project.image}`}
                  alt={project.title}
                />
                <button
                  className="overlay-btn"
                  onClick={() => handleClick(project.id)}
                >OVERVIEW</button>
              </div>
              <div className="project-links">
                {project.links?.github && (
                  <button>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GITHUB 링크
                    </a>
                  </button>
                )}
                {project.links?.site && (
                  <button>
                    <a
                      href={project.links.site}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SITE 링크
                    </a>
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 팝업 */}
      {selectedProject && (
        <ProjectPopup
          project={selectedProjectData}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default CloneCoding;