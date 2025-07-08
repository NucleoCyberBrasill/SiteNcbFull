import { MainTemplate } from "../../templates/MainTemplate"
import { Container } from "../../Components/Container"
import { InfoCard } from "../../Components/InfoCard"
import { Members } from "../../Components/Members"
import { MembersMap } from "../../Components/MembersMap"
import { Projects } from "../../Components/Projects"

export function Home(){
    return (
    <MainTemplate>
        <Container>

        <InfoCard/>
      </Container>
<h1 className="text-3xl text-center mt-2">Integrantes do NCB</h1>
      <h2 className="text-xl text-center">Nosso grupo é composto por alunos de diversos cursos, idades e estados do Brasil.</h2>

    <Members />
    <MembersMap />


      <Projects/>
    </MainTemplate>
    )
}