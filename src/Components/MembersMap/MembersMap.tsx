import { useEffect } from "react";
import AOS from "aos";
import Map from "./Map";
const MembersMap = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);
  return (
    <section
      className="h-auto mb-30 flex flex-col justify-center items-center"
      data-aos="fade-up"
    >
      <h1 className="text-3xl text-center mt-2">Integrantes do NCB</h1>
      <h2 className="text-xl text-center">
        Nosso grupo é composto por alunos de diversos cursos, idades e estados
        do Brasil.
      </h2>
      <Map />
    </section>
  );
};

export default MembersMap;
