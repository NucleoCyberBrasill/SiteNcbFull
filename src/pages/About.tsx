import { MainTemplate } from "@/Components/layouts/MainTemplate";

export function About() {
  return (
    <MainTemplate>
      <div className="min-h-screen flex flex-col justify-center items-center gap-3 mb-10">
        <h1 className="text-3xl text-center">
          Sobre o NCB – Núcleo Cyber Brasil
        </h1>
        <h2 className="text-2xl">Quem Somos</h2>
        <p className="text-justify ml-[10%] mr-[10%] px-2">
          O Núcleo Cyber Brasil (NCB) é um grupo de estudos em Segurança da
          Informação, criado por estudantes de Tecnologia da Informação com o
          apoio de professores e orientadores comprometidos com o avanço da
          cibersegurança. Surgimos da necessidade de aprofundar e compartilhar
          conhecimentos sobre proteção digital de forma acessível, prática e
          colaborativa.
        </p>

        <h2 className="text-2xl pt-2">Nosso Propósito</h2>
        <p className="text-justify ml-[10%] mr-[10%] px-2">
          Nosso principal objetivo é capacitar, engajar e conscientizar sobre os
          riscos e boas práticas em segurança digital. Acreditamos que o
          conhecimento é a principal defesa contra as ameaças cibernéticas que
          crescem a cada dia.
        </p>
        <div className="flex flex-col ">
          <h2 className="text-2xl pt-4">Nossos Objetivos</h2>
          <ul className="text-justify px-16">
            <li className="list-disc">
              Promover encontros regulares para debater temas atuais e
              emergentes da área;
            </li>
            <li className="list-disc">
              Incentivar a troca de experiências entre estudantes, pesquisadores
              e profissionais;
            </li>
            <li className="list-disc">
              Produzir e divulgar conteúdos acessíveis sobre segurança da
              informação;
            </li>
            <li className="list-disc">
              Desenvolver projetos aplicáveis à realidade social, com foco em
              responsabilidade digital;
            </li>
            <li className="list-disc">
              Estimular a conscientização coletiva sobre o uso seguro da
              tecnologia.
            </li>
          </ul>

          <h2 className="text-2xl pt-4">O Que Fazemos</h2>
          <p className="text-justify  px-2">
            O NCB realiza diversas atividades voltadas para o aprendizado
            contínuo e impacto social:
          </p>
          <ul className="text-justify  px-16">
            <li className="list-disc">
              Reuniões temáticas periódicas com debates e estudos dirigidos;
            </li>
            <li className="list-disc">
              Documentação dos encontros com registro dos aprendizados e
              encaminhamentos;
            </li>
            <li className="list-disc">
              Participação em eventos acadêmicos, como lives e painéis da
              faculdade;
            </li>
            <li className="list-disc">
              Produção de materiais educativos, como artigos, guias, e-books e,
              futuramente, podcasts e vídeos;
            </li>
            <li className="list-disc">
              Projetos sociais, incluindo oficinas de conscientização digital em
              escolas e ONGs.
            </li>
          </ul>

          <h2 className="text-2xl pt-4">Nossas Contribuições</h2>
          <p className="text-justify px-2">
            Queremos ir além do ambiente acadêmico e alcançar toda a comunidade:
          </p>
          <ul className="text-justify px-2 pl-16">
            <li className="list-disc">
              Tornar o conhecimento acessível, promovendo inclusão digital;
            </li>
            <li className="list-disc">
              Apoiar o desenvolvimento técnico e humano de nossos membros;
            </li>
            <li className="list-disc">
              Reduzir vulnerabilidades digitais por meio da educação;
            </li>
            <li className="list-disc">
              Oferecer soluções práticas para contextos reais, como instituições
              sociais e pequenos negócios.
            </li>
          </ul>
        </div>
        <h2 className="text-2xl pt-4">Um Espaço para Crescer e Proteger</h2>
        <p className="text-justify px-2">
          Vivemos em uma era onde a informação é um dos bens mais valiosos — e
          também mais visados. O NCB se consolida como um espaço de colaboração,
          aprendizado e ação, preparando novos talentos para os desafios da
          cibersegurança com responsabilidade e engajamento social.
        </p>
        <p className="text-justify px-2">
          Nossa missão é clara: contribuir para um mundo digital mais seguro,
          consciente e resiliente.
        </p>
      </div>
    </MainTemplate>
  );
}
