export function InfoCard() {
  return (
    // hero section
    <section className="h-[95vh] flex justify-center items-center">
      <div className=" mt-3 m-3">
    <div className="p-3 w-auto border-2 max-w-200 rounded border-[var(--color-primary-self)] shadow-lg">
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
