import {
  HomeIcon,
  InfoIcon,
  MoonIcon,
  SunIcon,
  MenuIcon,
  XIcon,
  FolderIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

type themes = "dark" | "light";

export function Menu() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
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
  const [theme, setTheme] = useState<themes>(() => {
    const storageTheme = (localStorage.getItem("theme") as themes) || "dark";
    return storageTheme;
  });

  const [isOpen, setIsOpen] = useState(false); // menu mobile

  const nextThemeIcon = {
    dark: <SunIcon className="w-5 h-5" />,
    light: <MoonIcon className="w-5 h-5" />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={`p-3 bg-[var(--color-secondary-self)]`}>
      <div className="flex justify-between ">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://i.imgur.com/afh57Nd.png"
            alt="Logo do NCB"
            className="h-6 w-6"
          />
          <span className="text-xl font-bold">NCB</span>
        </div>

        <div className="flex items-center space-x-3">
          {/* Ícone de tema - mobile apenas */}
          <a
            onClick={handleThemeChange}
            className="cursor-pointer inline-flex md:hidden"
          >
            {nextThemeIcon[theme]}
          </a>

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
        <ul className="hidden md:flex items-center space-x-4">
          <li>
            <a href="#" className="flex items-center gap-1 hover:text-gray-400">
              <HomeIcon className="w-4 h-4" /> Início
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-1 hover:text-gray-400">
              <InfoIcon className="w-4 h-4" /> Sobre
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-1 hover:text-gray-400">
              <FolderIcon className="w-4 h-4" /> Blog
            </a>
          </li>
          <li>
            {/* Ícone de tema - desktop apenas */}
            <a
              onClick={handleThemeChange}
              className="cursor-pointer hidden md:inline-flex"
            >
              {nextThemeIcon[theme]}
            </a>
          </li>
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
              <a
                href="#"
                className="flex items-center gap-1 hover:text-gray-400"
              >
                <HomeIcon className="w-4 h-4" /> Início
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-1 hover:text-gray-400"
              >
                <InfoIcon className="w-4 h-4" /> Sobre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-1 hover:text-gray-400"
              >
                <FolderIcon className="w-4 h-4" /> Blog
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
