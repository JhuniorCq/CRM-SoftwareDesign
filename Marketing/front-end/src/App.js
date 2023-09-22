import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ModuloMarketing from "./components/marketing/marketingGestion";
import PaginaPrincipal from "./components/principal";
import ModuloMarketingDos from "./components/marketing/marketingCalendario";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'}  element={<PaginaPrincipal/>}/>
        <Route path={'/gestion'} element={<ModuloMarketing/>} />
        <Route path={'/calendario'} element={<ModuloMarketingDos/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

