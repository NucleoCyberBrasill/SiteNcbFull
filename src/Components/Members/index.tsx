import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import membersData from "./members.json";
import { useEffect } from "react";

export function Members() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
        <div className="max-w-5xl mx-auto px-4">

      <Carousel className="cursor-pointer">
        <CarouselContent className="flex gap-4 px-4">
          {membersData.map((member) => (
            <CarouselItem
              key={member.id}
              className="
                p-4
                mt-2 mb-2
                sm:basis-1/2 
                md:basis-1/3 
                max-w-xs
                bg-[var(--color-bg-self)] 
                hover:bg-[var(--color-bg-hover-self)] 
                rounded-xl
                border-3 border-[var(--color-primary-self)]
                shadow-[0_0_5px_var(--color-primary-self)]
                hover:shadow-[0_0_10px_var(--color-primary-self)]
              "
              data-aos="fade-up"
            >
              <img
                className="
                  mt-2 h-32 w-32 
                  border-[var(--color-border-self)] border-4 
                  object-cover aspect-square 
                  rounded-full mx-auto mb-2
                "
                src={member.image}
                alt={`Foto de perfil de ${member.name}`}
              />

              <h3 className="font-bold text-lg text-center">{member.name}</h3>

              <p className="text-center text-sm mt-1 px-2">
                {member.description}
              </p>

              <ul className="mt-3 flex items-center justify-center gap-3">
                {member.github && (
                  <li>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub de ${member.name}`}
                    >
                      <FaGithub size={28} />
                    </a>
                  </li>
                )}
                {member.linkedin && (
                  <li>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <FaLinkedin size={28} />
                    </a>
                  </li>
                )}
                {member.discord && (
                  <li>
                    <a
                      href={member.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Discord de ${member.name}`}
                    >
                      <FaDiscord size={28} />
                    </a>
                  </li>
                )}
              </ul>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="bg-purple-600 text-white hover:bg-purple-700"/>
        <CarouselNext className="bg-purple-600 text-white hover:bg-purple-700"/> */}
      </Carousel>
    </div>
  );
}