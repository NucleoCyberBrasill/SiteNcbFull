import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../Components/Container";
import { InfoCard } from "../../Components/InfoCard";
import { Members } from "../../Components/Members";
import { Projects } from "../../Components/Projects";
import Cta from "../../Components/Cta/Cta";
import { Reviews } from "../../Components/Reviews";
import MembersMap from "../../Components/MembersMap/MembersMap";
import { Title } from "@/Components/Title";

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <InfoCard />
        <Projects />
        <Title
        center={true}
        subtitle="Nosso grupo é composto por alunos de diversos cursos, idades e estados
          do Brasil."
        >Integrantes do NCB</Title>
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
