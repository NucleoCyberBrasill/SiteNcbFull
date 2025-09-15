import { CheckCheckIcon, ClockIcon } from "lucide-react";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  title: React.ReactNode;
  description: string;
  image: string;
  link: string;
  buttonText: string;
  status: string;
};

export function ProjectCard({
  title,
  description,
  image,
  link,
  buttonText,
  status,
}: ProjectCardProps) {
  return (
    <div className="
      flex flex-col gap-4 items-center md:items-start m-2
      p-4 rounded-lg border border-[var(--color-primary-self)] 
      bg-[var(--color-bg-self)] text-[var(--color-text-self)]
      hover:border-[var(--color-accent-hover-self)] hover:scale-[1.02] 
      transition-transform duration-300 ease-in-out
    ">
      <img
        src={image}
        alt={`Imagem referente ao projeto ${title}`}
        className="
          rounded-lg
          aspect-video md:aspect-auto
          object-contain md:object-cover
           h-64 w-120
        "
        loading="lazy"
      />
      <div className="md:text-start text-center flex flex-col justify-between w-full">
  {/* linha de título + badge */}
  <div className="flex items-center gap-2 mb-2">
   

    {status === "DONE" && (
      <span className="inline-flex items-center gap-1 bg-green-600 p-1 px-2 text-sm text-white rounded">
        <CheckCheckIcon size={16} /> Disponível
      </span>
    )}

    {status === "IN_PROGRESS" && (
      <span className="inline-flex items-center gap-1 bg-gray-500 p-1 px-2 text-sm text-white rounded">
        <ClockIcon size={16} /> Em progresso
      </span>
    )}
     <h2 className="text-2xl font-bold text-[rgb(var(--color-primary-self))]">
      {title}
    </h2>
  </div>

  {/* descrição */}
  {description.split("\n").map((line, index) => (
    <p
      key={index}
      className="text-[rgb(var(--color-text-self))] pt-2 text-justify"
    >
      {line}
    </p>
  ))}

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            p-2 mt-4 inline-flex items-center justify-center gap-2
            bg-[var(--color-secondary-self)]
            hover:bg-[var(--color-secondary-hover-self)]
            rounded text-white mx-auto md:mx-0
            transition-colors duration-200 w-full
          "
        >
          {buttonText} <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
}
