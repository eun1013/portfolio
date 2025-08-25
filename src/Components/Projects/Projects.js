import ProjectData from "../../data/project.json";
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="projects">
      <h1>PROJECTS</h1>
      {
        ProjectData.map((item, idx) => {
          return (
            <div
            key={idx} 
            className="projects-main">
              <div className="projects-img">
              {item.images.mobile && (
              <img
              className="mobile-img"
              src={`${process.env.PUBLIC_URL}${item.images.mobile}`}
              alt={item.images.mobilealt}
              ></img>
              )}
              {item.images.desktop && (
              <img
              className="desktop-img"
              src={`${process.env.PUBLIC_URL}${item.images.desktop}`}
              alt={item.images.desktopalt}
              ></img>)}
            </div>
            <div className="projects-info">
              <h2>{item.projectName}</h2>
                <div className="projects-line"></div>
              <h3>{item.projectType}</h3>
                <div className="link-btn">
              {item.links.overview && (
      <button>
        <Link to={item.links.overview}>OVERVIEW</Link>
      </button>
    )}
{item.links.github && (
  <button>
    <a href={item.links.github} target="_blank">
      GITHUB 링크
    </a>
  </button>
)}

{item.links.site && (
  <button>
    <a href={item.links.site} target="_blank">
      SITE 링크
    </a>
  </button>
)}
              </div>
            <div className="projects-content">
              <h4>제작에 사용된 스킬</h4>
              <p>{item.skillsUsed}</p>
              <h4>프로젝트 설명</h4>
              <p>{item.description}</p>
              <h4>제작기간</h4>
              <p>{item.duration}</p>
              <h4>제작기여도</h4>
              <p>{item.contributors}</p>
              <p>{item.role}</p>
            </div>
            </div>
            </div>
          )
        })
      }

    </div>
    
  );
};

export default Projects;