import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Servicios from './Servicios'
import Portafolio from './Portafolio'
import Soporte from './Soporte'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import ProyectoDetalle from './ProyectoDetalle'
function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>  
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/servicios' element={<Servicios></Servicios>}></Route>
        <Route path='/portafolio' element={<Portafolio></Portafolio>}></Route>
        <Route path='/soporte' element={<Soporte></Soporte>}></Route>
        <Route path='/proyecto/:codigo' element={<ProyectoDetalle></ProyectoDetalle>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
