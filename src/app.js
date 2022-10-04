
import Inicio from './pages/inicio';
import Quem_somos from './pages/quem_somos';
import Atuacao from './pages/atuacao';
import Contato from './pages/contato';
import {Route,Routes} from "react-router-dom";

function App(){
    return(
        <> 
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/quem_somos" element={<Quem_somos/>}/>
          <Route path="/atuacao" element={<Atuacao/>}/>
          <Route path="/contato" element={<Contato/>}/>
        </Routes>
        </>
    )
}

export default App;