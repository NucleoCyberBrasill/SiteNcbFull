import { useEffect } from "react";
import AOS from "aos";

export function InfoCard() {
  useEffect(() => {
    AOS.init({ once: false,  });
  }, []);
  return (
    // hero section
    <section className="h-auto mb-30 flex justify-center items-center" data-aos="fade-down">
      <div className=" mt-3 m-3">
    <div className="p-4 w-auto border-3 max-w-200 rounded border-[var(--color-primary-self)] shadow-1g">
      <h1 className="text-3xl text-center">Olá, Bem-vindo (a)!</h1>
      <h2 className="text-2xl text-center text-[var(--color-primary-self)] text-shadow-sm">
        Somos o NCB — Núcleo Cyber Brasil, ficamos muito felizes com o seu interesse =)
      </h2>
      <p>
        Somos um grupo de estudos, exclusivo para alunos da Gran Faculdade,
composto por alunos de diversos cursos e com foco na área de Segurança da
Informação.
      </p>
    </div>
    </div>
    </section>
    
  );
}
