import {BrowserRouter, Route, Routes} from "react-router-dom";

import Login from "./paginas/Login";
import Cadastro from "./paginas/Cadastro";
import Home from "./paginas/Home"

const Rotas = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Login/>}/>
                <Route exact={true} path="/cadastro" element={<Cadastro/>}/>
                <Route exact={true} path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;