// header-menu
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  HomeIcon,
  InfoIcon,
  MenuIcon,
  XIcon,
  FolderIcon,
} from "lucide-react";
import "aos/dist/aos.css";

export function Menu() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    function handleResize(e: MediaQueryListEvent) {
      if (e.matches) {
        setIsOpen(false);
      }
    }
    if (mediaQuery.matches) {
      setIsOpen(false);
    }
    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  // header section
  return (
    <nav className={` px-5 `}>
      <div className="flex justify-between ">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <a href="/" rel="noreferrer">
            <img
              className="w-35 h-20"
              src="https://nucleocyberbrasil.my.canva.site/_assets/media/475ff7b3a0e26da738094f39fb84e693.png"
              alt="logo nucleocyberbrasil"
            />
          </a>
        </div>

        <div className="flex items-center space-x-3">
          {/* Botão hamburger (mobile only) */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-gray-400"
            >
              <HomeIcon className="w-6 h-6" /> Início
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              className="flex items-center gap-1 hover:text-gray-400"
            >
              <InfoIcon className="w-6 h-6" /> Sobre
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="flex items-center gap-1 hover:text-gray-400"
            >
              <FolderIcon className="w-6 h-6" /> Blog
            </Link>
          </li>
          <li></li>
        </ul>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="flex ml-auto  w-40">
          <ul
            data-aos="fade-down"
            data-aos-delay="200"
            className="mt-3 flex flex-col space-y-1  md:hiddent overflow-hidden"
          >
            <li>
              <Link
                to="/"
                className="flex items-center gap-1 hover:text-gray-400"
              >
                <HomeIcon className="w-4 h-4" /> Início
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className="flex items-center gap-1 hover:text-gray-400"
              >
                <InfoIcon className="w-4 h-4" /> Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="flex items-center gap-1 hover:text-gray-400"
              >
                <FolderIcon className="w-4 h-4" /> Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
