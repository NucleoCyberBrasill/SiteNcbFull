import { Home } from "./pages/Home";
import { About } from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
