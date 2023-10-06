import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ModuloMarketing from "./components/marketing/marketingGestion";
import ModuloMarketingDos from "./components/marketing/marketingCalendario";
import ModuloMarketingTres from "./components/marketing/marketingCorreo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<ModuloMarketing/>} />
        <Route path={'/calendario'} element={<ModuloMarketingDos/>}/>
        <Route path={'/correo'} element={<ModuloMarketingTres />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

