import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import { ProjectCard } from "./ProjectCard";
import projects from "./projects.json";

export function Projects() {
  return (
    <>
      <h1 className="text-3xl text-center mt-6 mb-4 text-[rgb(var(--color-primary-self))]">
        Nossos projetos
      </h1>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Mousewheel]}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          1100: { slidesPerView: 2 },
        }}
        className="max-w-[90%] mx-auto border-[var(--color-secondary-self)] border rounded mb-3"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center p-4"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              buttonText={project.buttonText}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
