import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { InfoIcon } from "lucide-react";
import { HomeIcon } from "lucide-react";
import { FolderIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[var(--footer-color-self)] p-4 text-[var(--footer-color-text-self)] ">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div>
          <img
            src="https://nucleocyberbrasil.my.canva.site/_assets/media/475ff7b3a0e26da738094f39fb84e693.png"
            alt="Logo"
            className="w-60 h-50 object-contain md:w-80"
            loading="lazy"
          />
        </div>

        <div className="flex flex-row gap-6 pb-4 md:gap-10">
          <div>
            <h2 className=" font-semibold mb-2">Navegação</h2>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/"
                  className=" hover:underline flex items-center gap-1"
                >
                  <HomeIcon />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className=" hover:underline flex items-center gap-1"
                >
                  <InfoIcon />
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className=" hover:underline flex items-center gap-1"
                >
                  <FolderIcon />
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="flex gap-1 font-semibold mb-2">Contato</h2>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://www.linkedin.com/company/nucleocyberbrasil/"
                  className="flex items-center gap-1 hover:underline"
                >
                  <FaLinkedinIn />
                  nucleocyberbrasil
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/NucleoCyberBrasill"
                  className="flex items-center gap-1 hover:underline"
                >
                  <FaGithub />
                  NucleoCyberBrasil
                </a>
              </li>

              <li>
                <a
                  href="mailto:nucleocyberbr@gmail.com"
                  className="flex items-center gap-1 hover:underline"
                >
                  <FaEnvelope />
                  nucleocyberbr@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-center">
        Núcleo Cyber Brasil &copy; todos os direitos reservados{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
