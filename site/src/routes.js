import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './pages/home'
import Cadastrar from './pages/cadastrar'
import Consultar from './pages/consultar'


export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path='/home' element={<Home />} />
                <Route path='/cadastrar' element={<Cadastrar />} />
                <Route path='/consultar' element={<Consultar />} />
               
            </Routes>
        </BrowserRouter>
    )
}