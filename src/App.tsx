import { Container } from "./Components/Container"
import { InfoCard } from "./Components/InfoCard"
import { Members } from "./Components/Members"
import { MembersMap } from "./Components/MembersMap"
import { Menu } from "./Components/Menu"
import { Projects } from "./Components/Projects"

function App() {

  return (
    <>
      <Menu/>
      <Container>

        <InfoCard/>
      </Container>
<h1 className="text-3xl text-center mt-2">Integrantes do NCB</h1>
      <h2 className="text-xl text-center">Nosso grupo é composto por alunos de diversos cursos, idades e estados do Brasil.</h2>
      <div className="flex gap-4">
  <div className="flex-1">
    <Members />
  </div>
  <div className="flex-1">
    <MembersMap />
  </div>
</div>

      <Projects/>
      </>
  )
}

export default App
