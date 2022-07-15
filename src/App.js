import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Inicio from "./pages/Inicio";
import Corporativo from "./pages/Corporativo";
import Planeacion from "./pages/Planeacion";
import Mantenimiento from "./pages/Mantenimiento";
import ReporteCorporativo from "./pages/ReporteCorporativo";


function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Inicio/>} />
      <Route path='/Inicio' element={<Inicio/>} />
      <Route path='/Planeacion' element={<Planeacion/>}/>
      <Route path='/Corporativo' element={<Corporativo/>} />
      <Route path='/Mantenimiento' element={<Mantenimiento/>}/>
      <Route path='/ReporteCorporativo' element={<ReporteCorporativo/>}/>
      </Routes>
    </Router>  

  );
}

export default App;