import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../Components/Container";
import { InfoCard } from "../../Components/InfoCard";
import { Members } from "../../Components/Members";
import { Projects } from "../../Components/Projects";
import Cta from "../../Components/Cta/Cta";
import { Reviews } from "../../Components/Reviews";
import MembersMap from "../../Components/MembersMap/MembersMap";

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <InfoCard />

        <Projects />
        <h1 className="text-3xl text-center mt-2">Integrantes do NCB</h1>
        <h2 className="text-xl text-center">
          Nosso grupo é composto por alunos de diversos cursos, idades e estados
          do Brasil.
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-2">
  <MembersMap />
  <Members />
</div>


        <Reviews />
      </Container>
      <Cta />
    </MainTemplate>
  );
}
