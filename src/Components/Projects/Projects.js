import { useState } from "react";
import ProjectData from "../../data/project.json";
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="projects">
      <h1>PROJECTS</h1>
      {
        ProjectData.map((item, idx) => {
          return (
            <div className="projects-main">
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
              <h2 key={idx}>{item.projectName}</h2>
                <div className="projects-line"></div>
              <h3 key={idx}>{item.projectType}</h3>
                <div className="link-btn">
              {/* <button key={idx}><Link to={item.links.overview}>OVERVIEW</Link></button>
              <button key={idx}><Link to={item.links.github}>GITHUB링크</Link></button>
              <button key={idx}><Link to={item.links.site}></Link>SITE링크</button> */}
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
              <p key={idx}>{item.skillsUsed}</p>
              <h4>프로젝트 설명</h4>
              <p key={idx}>{item.description}</p>
              <h4>제작기간</h4>
              <p key={idx}>{item.duration}</p>
              <h4>제작기여도</h4>
              <p key={idx}>{item.contributors}</p>
              <p key={idx}>{item.role}</p>
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