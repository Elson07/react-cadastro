import {BrowserRouter, Route, Routes} from "react-router-dom";

import Login from "./paginas/Login";
import Cadastro from "./paginas/Cadastro";

const Rotas = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Login/>}/>
                <Route exact={true} path="/cadastro" element={<Cadastro/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;