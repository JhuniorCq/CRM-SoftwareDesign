import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ModuloMarketing from "./components/marketing/marketingGestion";
import PaginaPrincipal from "./components/principal";
import ModuloMarketingDos from "./components/marketing/marketingCalendario";
import ModuloMarketingTres from "./components/marketing/marketingCorreo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'}  element={<PaginaPrincipal/>}/>
        <Route path={'/gestion'} element={<ModuloMarketing/>} />
        <Route path={'/calendario'} element={<ModuloMarketingDos/>}/>
        <Route path={'/correo'} element={<ModuloMarketingTres />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

