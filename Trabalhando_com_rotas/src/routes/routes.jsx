import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
import Header from "../components/Header/Header";
import Contato from "../pages/Contato/Contato";
import Erro from "../pages/Erro/Erro";
import Produto from "../pages/Produto/Produto";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        {/* Rota com parametro 'id' */}
        <Route path="/produto/:id" element={<Produto />} /> 

        {/* Rota para paginas nao encontrada */}
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
