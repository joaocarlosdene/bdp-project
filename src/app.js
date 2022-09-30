
import Inicio from './components/pages/inicio';
import Quem_somos from './components/pages/quem_somos';
import Atuacao from './components/pages/atuacao';
import Contato from './components/pages/contato';
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