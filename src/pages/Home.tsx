import { MainTemplate } from "../Components/layouts/MainTemplate";
import { Container } from "../Components/layouts/Container/Container";
import { Hero } from "../Components/features/Hero";
import { Members } from "../Components/features/Members/Members";
import { Projects } from "../Components/features/Projects/Projects";
import Cta from "../Components/features/Cta";
import { Reviews } from "../Components/features/Reviews/Reviews";
import MembersMap from "../Components/features/MembersMap/MembersMap";
export function Home() {
  return (
    <MainTemplate>
      <Container>
        <Hero />
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
