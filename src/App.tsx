import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({ once: true }); // ou conforme necessidade

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
