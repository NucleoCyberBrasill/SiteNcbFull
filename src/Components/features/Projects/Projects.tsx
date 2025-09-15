import { ProjectCard } from "./ProjectCard";
import projects from "./projects.json";
import { Title } from "../../ui/Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //CarouselNext,
  //CarouselPrevious,
} from "@/Components/ui/Carousel";

import "swiper/css";
import "swiper/css/pagination";

export function Projects() {
  return (
    <section className="h-auto mb-20" data-aos="fade-up">
      <Title
        center
        subtitle="Nosso grupo esteve envolvido em alguns projetos e atividades bem especiais!"
      >
        Conheça nossos projetos e atividades
      </Title>

      <Carousel className="w-full max-w-[95%] mx-auto flex flex-col px-2 overflow-x-hidden">
        <CarouselContent className="gap-4 sm:gap-6 ">
          {projects
            .slice()
            .reverse()
            .map((project, index) => (
              <CarouselItem
                key={index}
                className="
                  flex justify-center
          basis-full sm:basis-1/2 lg:basis-1/3
                "
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  buttonText={project.buttonText}
                  status={project.status}
                />
              </CarouselItem>
            ))}
        </CarouselContent>
        {/* ! não consegui fazer as setas ficarem abaixo */} 
        {/*
      <div className="flex justify-center items-center gap-4 mt-2">
    <CarouselPrevious className="
      rounded-full border border-[var(--color-primary-self)]
      p-2 hover:bg-[var(--color-primary-self)] hover:text-white
      transition
    " />
    <CarouselNext className="
      rounded-full border border-[var(--color-primary-self)]
      p-2 hover:bg-[var(--color-primary-self)] hover:text-white
      transition
    " />
  </div> */}
      </Carousel>
    </section>
  );
}
