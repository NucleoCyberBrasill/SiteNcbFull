import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
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
        <CarouselContent className="flex px-4">
          {membersData.map((member) => (
            <CarouselItem
              key={member.id}
              className="
                
                sm:basis-1/2 
                md:basis-1/3 
              "
              data-aos="fade-up"
            >
              <Card className="w-full max-w-sm bg-[var()]">
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

              <CardTitle
                className="font-bold text-lg text-center"
                dangerouslySetInnerHTML={{ __html: member.name }}
              ></CardTitle>

              <CardDescription className="text-center text-sm mt-1 px-2">
                {member.description}
              </CardDescription>
<CardFooter className="mt-2 items-center justify-center">
              <ul className="flex gap-2">
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
              </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* removi os botoes de ir pra frente e pra traz pq tava bugando em telas pequenas */}
        {/* <CarouselPrevious className="bg-purple-600 text-white hover:text-whitehover:bg-purple-700" />
        <CarouselNext className="bg-purple-600 text-white hover:bg-purple-700" /> */}
      </Carousel>
    </div>
  );
}
