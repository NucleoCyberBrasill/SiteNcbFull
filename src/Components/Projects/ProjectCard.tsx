// ProjectCard.tsx
import { CheckCheckIcon, ClockIcon } from "lucide-react";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  title: React.ReactNode;
  description: string;
  image: string;
  link: string;
  buttonText: string;
  status: string
};

export function ProjectCard({
  title,
  description,
  image,
  link,
  buttonText,
  status
}: ProjectCardProps) {
  return (
     <div className="flex flex-col md:flex-row gap-4 items-center md:items-start p-4 w-full ">

      <img
        src={image}
        alt={`Imagem referente ao projeto ${title}`}
        className="
          rounded
          w-full md:w-64
          aspect-video md:aspect-auto
          object-contain md:object-cover
          max-h-64
        "
      />
      <div className="text-center md:text-left flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-[rgb(var(--color-primary-self))]">
            {title}
          </h2>
          {status=="DONE" &&(
           <span className="text-white inline-flex items-center gap-2 mb-2 bg-green-600 p-1 border border-[var(--color-text-self)] rounded">
  <CheckCheckIcon /> Concluído
</span>
          )}
          {status=="IN_PROGRESS" &&(
           <span className="text-white inline-flex items-center gap-2 mb-2 bg-gray-500 p-1 border border-[var(--color-text-self)] rounded">
  <ClockIcon /> Em progresso
</span>
          )}
          {description.split("\n").map((line, index) => (
            <p key={index} className="text-[rgb(var(--color-text-self))]">{line}</p>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            p-2 mt-4 inline-flex items-center justify-center gap-2
            bg-[var(--color-secondary-self)]
            hover:bg-[var(--color-secondary-hover-self)]
            rounded text-white w-fit mx-auto md:mx-0
          "
        >
          {buttonText} <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
}
