import { Contact2Icon } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

export function Footer(){
    return(
        <footer className="mt-4 bg-[var(--footer-color-self)]">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <div>
    <h2 className="flex gap-1 font-semibold mb-2"><Contact2Icon/> Contato</h2>
    <ul className="space-y-1">
      <li><a href="https://www.linkedin.com/company/nucleocyberbrasil/" className="flex items-center gap-1 hover:underline"><FaLinkedinIn/> LinkedIn</a></li>
      <li><a href="#" className=" hover:underline">Link 2</a></li>
      <li><a href="#" className=" hover:underline">Link 3</a></li>
    </ul>
  </div>
  <div>
    <h2 className="font-semibold mb-2">Mais links</h2>
    <ul className="space-y-1">
      <li><a href="#" className=" hover:underline">Link 4</a></li>
      <li><a href="#" className=" hover:underline">Link 5</a></li>
      <li><a href="#" className=" hover:underline">Link 6</a></li>
    </ul>
  </div>
  <div>
    <h2 className="font-semibold mb-2">Não sei onde vamos arrumar tantos links</h2>
    <ul className="space-y-1">
      <li><a href="#" className=" hover:underline">Link 7</a></li>
      <li><a href="#" className=" hover:underline">Link 8</a></li>
      <li><a href="#" className=" hover:underline">Link 9</a></li>
    </ul>
  </div>
</div>

<h1 className="text-center">Núcleo Cyber Brasil &copy; todos os direitos reservados {new Date().getFullYear()}</h1>
        </footer>
    )
}