import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import {InfoIcon} from "lucide-react";
import {HomeIcon} from "lucide-react";
import {FolderIcon} from "lucide-react";

export function Footer(){
    return(
        <footer className="bg-[var(--footer-color-self)] p-4  ">
          
          <div className="flex justify-between items-center" >
            <div>
              <img src="https://nucleocyberbrasil.my.canva.site/_assets/media/475ff7b3a0e26da738094f39fb84e693.png" alt="Logo" className="w-80 h-50 object-contain" />
            </div>

          <div className="flex gap-10">
            <div>
              <h2 className="font-semibold mb-2">Navegação</h2>
              <ul className="space-y-1">
                <li><a href="/" className=" hover:underline flex items-center gap-1"><HomeIcon/>Home</a></li>
                <li><a href="/sobre" className=" hover:underline flex items-center gap-1"><InfoIcon/>Sobre</a></li>
                <li><a href="/blog" className=" hover:underline flex items-center gap-1"><FolderIcon/>Blog</a></li>
              </ul>
            </div>

          <div>
            <h2 className="flex gap-1 font-semibold mb-2">Contato</h2>
            <ul className="space-y-1">
              <li><a href="https://www.linkedin.com/company/nucleocyberbrasil/" className="flex items-center gap-1 hover:underline"><FaLinkedinIn/>nucleocyberbrasil</a></li>

              <li><a href="https://github.com/NucleoCyberBrasil" className="flex items-center gap-1 hover:underline"><FaGithub/>NucleoCyberBrasil</a></li>

              <li><a href="mailto:nucleocyberbr@gmail.com" className="flex items-center gap-1 hover:underline"><FaEnvelope/>nucleocyberbr@gmail.com</a></li>
            </ul>
            </div>
            </div>
          </div>
          
        <p className="text-center">Núcleo Cyber Brasil &copy; todos os direitos reservados {new Date().getFullYear()}</p>
        </footer>
        )}
      