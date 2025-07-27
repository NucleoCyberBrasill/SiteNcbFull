import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import { ProjectCard } from "./ProjectCard";
import projects from "./projects.json";

export function Projects() {
  return (
    <>
    {/* projects section */}
    <section className="h-[70vh]">
      <h1 className="text-3xl text-center ">Conheça nossos projetos e atividades</h1>
      <h2 className="text-xl text-center">Nosso grupo esteve envolvido em alguns projetos e atividades bem especiais!</h2>

           
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Mousewheel]}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          1100: { slidesPerView: 2 },
        }}
        className="max-w-[95%] mx-auto border-[var(--color-primary-self)] border-3 rounded mt-8"
      >
        {projects.slice().reverse().map((project, index) => (
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
              status={project.status}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

    </>
  );
}
