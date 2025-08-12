// CTA section, convite/explicação de como participar
import { useEffect } from "react";
import AOS from "aos";
const Cta = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);
  return (
    <div
      className="h-screen justify-center items-center flex flex-col mb-160 mt-180 md:mb-0 md:mt-0"
      data-aos="fade-up"
    >
      <div>
        <h1 className="text-3xl text-center">
          Quer fazer parte do nosso grupo de estudos?
        </h1>
        <p className="text-xl text-center">
          Participar do NCB é simples e uma excelente oportunidade para aprender
          mais sobre Segurança da Informação, trocar experiências e ainda
          acumular horas complementares!
        </p>
      </div>

      <div className="flex flex-col gap-10 p-10 md:flex-row ">
        <div
          className="
          border-3
          border-[var(--color-primary-self)]
          p-6
          max-w-120 
          max-h-200
          rounded-xl
          hover:scale-105
          transition-transform
          duration-300
          ease-in-out 

        "
        >
          <h2
            className="
            text-2xl 
            mb-6 
            text-left"
          >
            Requisitos para Participar:
          </h2>

          <ul className="text-lg mb-6 pl-15">
            <li className="list-disc pb-4">
              Estar regularmente matriculado em qualquer curso da Gran
              Faculdade;
            </li>
            <li className="list-disc">
              Ter interesse em aprender sobre Segurança da Informação,
              independentemente do nível de conhecimento.
            </li>
          </ul>
          <p>
            Se você se encaixa nesses critérios, é só entrar em contato com um
            dos nossos representantes: Julia, Jhônata ou por e-mail. Eles vão te
            orientar sobre os próximos passos para integrar o grupo.
          </p>
        </div>

        <div
          className="
        border-3
        border-[var(--color-primary-self)] 
        max-w-120  
        max-h-200
        p-6 
        rounded-xl
        hover:scale-105 
        transition-transform 
        duration-300 
        ease-in-out "
        >
          <h2
            className=" text-2xl 
            mb-6 
            text-left"
          >
            Como Funcionam Nossas Atividades?
          </h2>
          <p>
            As reuniões do NCB acontecem todas as quintas-feiras, às 19h30, via
            Discord.
          </p>
          <ul
            className="
            text-lg 
            mb-6 
            pl-15"
          >
            <li className="list-disc pt-4 pb-4">
              Cada encontro aborda um tema diferente, definido previamente com
              os participantes.
            </li>
            <li className="list-disc pb-4">
              Os temas variam de introdução à cibersegurança até assuntos mais
              avançados, acompanhando o ritmo e o interesse dos membros.
            </li>
            
          </ul>
        </div>

        <div
          className="
          border-3
          border-[var(--color-primary-self)]
          p-6
          max-w-120  
          max-h-200
          rounded-xl 
          hover:scale-105 
          transition-transform
          duration-300 
          ease-in-out"
        >
          <h2
            className=" 
            text-2xl 
            mb-6 
            text-left"
          >
            Benefícios da Participação
          </h2>
          <p className="pb-4">Horas Complementares Garantidas!</p>
          <ul className="text-lg mb-6 pl-15">
            <li className="list-disc pb-4">
              A cada 5 encontros, você acumula 20 horas complementares.
            </li>
            <li className="list-disc pb-4">
              Um documento validado pelos representantes será emitido como
              comprovante.
            </li>
            <li className="list-disc">
              O limite máximo é de 80 horas por aluno (equivalente a 4 ciclos).
            </li>
          </ul>
        </div>
      </div>

      <div className="p-8">
        <h2 className="text-center text-2xl pb-2">Junte-se a nós!</h2>
        <p className="text-lg text-center">
          Se você quer aprender, compartilhar e se preparar para os desafios do
          mundo digital com apoio de uma comunidade engajada, o NCB é o seu
          lugar!
        </p>
      </div>
    </div>
  );
};

export default Cta;
