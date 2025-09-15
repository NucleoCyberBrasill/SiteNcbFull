import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Mousewheel, Pagination } from "swiper/modules";
import { ProjectCard } from "./ProjectCard";
import projects from "./projects.json";
import { Title } from "../../ui/Title";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * @function Projects
 * @description Renderiza a se o de projetos e atividades do grupo.
 * @returns {JSX.Element} O componente JSX da se o de projetos e atividades.
 * @example
 * <Projects />
 */
/*******  1241473f-cb32-438e-b172-e819d9908afa  *******/ export function Projects() {
  return (
    <>
      {/* projects section */}
      <section className="h-auto mb-30" data-aos="fade-up">
        <Title
          center={true}
          subtitle="Nosso grupo esteve envolvido em alguns projetos e atividades bem especiais!"
        >
          Conheça nossos projetos e atividades
        </Title>

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
          {projects
            .slice()
            .reverse()
            .map((project, index) => (
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
