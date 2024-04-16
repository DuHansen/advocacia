import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../layout/Body";
import Albuns from "../pages/Albuns";
import Contato from "../pages/Contato";
import Inicial from "../pages/Inicial";
import Previdenciario from "../pages/Prev";
import Sobre from "../pages/Sobre";
import Trabalhista from "../pages/Trabalhista";

export default function AppRoutes() {

return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body />}>
        <Route path="/" element={<Inicial />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/albuns" element={<Albuns />} />
        <Route path="/trabalhista" element={<Trabalhista />} />
        <Route path="/previdenciario" element={<Previdenciario />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
}
