import data from "../../data/CloneCoding.json"; // JSON 경로
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper 스타일
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CloneCoding = () => {
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
        {data.projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="project-card">
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
              <button className="overlay-btn">OVERVIEW</button>
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
    </div>
  );
};

export default CloneCoding;