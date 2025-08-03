import {
  FaCogs,
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaShieldAlt,
} from "react-icons/fa";
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
import {
  FaChartBar,
  FaChartLine,
  FaCloud,
  FaCode,
  FaDatabase,
  FaNetworkWired,
  FaPalette,
  FaRobot,
} from "react-icons/fa6";
type TagKey =
  | "cybersec"
  | "redes"
  | "cloud"
  | "database"
  | "dev"
  | "ia"
  | "devops"
  | "analytics"
  | "datascience"
  | "designer";
const tags: Record<TagKey, React.ReactNode> = {
  cybersec: <FaShieldAlt title="Segurança da informação" />,
  redes: <FaNetworkWired title="Redes" />,
  cloud: <FaCloud title="Cloud" />,
  database: <FaDatabase title="Banco de dados" />,
  dev: <FaCode title="Desenvolvedor(a)" />,
  ia: <FaRobot title="Inteligência artificial" />,
  devops: <FaCogs title="DevOps" />,
  analytics: <FaChartBar title="Análise de dados" />,
  datascience: <FaChartLine title="Ciência de Dados" />,
  designer: <FaPalette title="Design" />,
};

export function Members() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="m-2 mb-30 justify-center">
      <div className="max-w-5xl mx-auto rounded-sm">
        <Carousel opts={{
    align: "start",

  }} className="cursor-grab">
          <CarouselContent className="flex p-3">
            {membersData.map((member) => (
              <CarouselItem
                key={member.id}
                className="
                p-4
                m-4
                select-none
                sm:basis-1/2 
                md:basis-1/3 
                max-w-xs
                rounded-xl
                border-3
                border-[var(--color-primary-self)]
                hover:scale-106
                hover:border-[var(--color-accent-hover-self)]
              "
                data-aos="fade-up"
              >
                <img
                  className="
                  mt-2 h-32 w-32 
                  border-[var(--color-accent-hover-self)] border-5 
                  object-cover aspect-square 
                  rounded-full mx-auto mb-2
                "
                  src={member.image}
                  alt={`Foto de perfil de ${member.name}`}
                />

                <h3
                  className="font-bold text-lg text-center"
                  dangerouslySetInnerHTML={{ __html: member.name }}
                />
                <div className="flex flex-wrap gap-2 items-center justify-center p-1">
                  {member.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded bg-[var(--color-secondary-self)] 
                    hover:bg-[var(--color-secondary-hover-self)] text-xs text-[var( --color-text-self)] cursor-pointer"
                    >
                      {tags[tag as TagKey]}
                    </span>
                  ))}
                </div>

                <p className="text-center text-sm mt-1 px-2">
                  {member.description}
                </p>

                <ul className="mt-3 flex items-center justify-center gap-3">
                  {member.github && (
                    <li className="hover:scale-110 transition-transform">
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
                    <li className="hover:scale-110 transition-transform">
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
                    <li className="hover:scale-110 transition-transform">
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
    </section>
  );
}
