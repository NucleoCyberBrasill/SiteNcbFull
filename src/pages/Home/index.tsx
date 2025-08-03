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

        <Members />

        <MembersMap />

        <Reviews />
      </Container>
      <Cta />
    </MainTemplate>
  );
}
