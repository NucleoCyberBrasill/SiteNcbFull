export function InfoCard() {
  return (
    <div className="flex justify-center mt-3 m-3">
    <div className="p-3 w-auto border-2 max-w-200 rounded border-[var(--color-primary-self)] shadow-lg">
      <h1 className="text-3xl text-center">Olá, Bem-vindo(a)!</h1>
      <h2 className="text-2xl text-center text-[var(--color-primary-self)] text-shadow-sm">
        Somos o Núcleo Cyber Brasil - NCB! Ficamos muito felizes com o seu interesse!
      </h2>
      <p>
        O NCB é um grupo de estudos, exclusivo para alunos da Gran Faculdade,
composto por alunos de diversos cursos e com foco na área de Segurança da
Informação.
      </p>
    </div>
    </div>
  );
}
