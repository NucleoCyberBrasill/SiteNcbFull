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
      <Members/>
      <MembersMap/>
      <Projects/>
      </>
  )
}

export default App
