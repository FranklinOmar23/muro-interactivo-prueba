import { useState } from 'react'
//importando firebase
import appFirebase from '../src/credenciales'
import {getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(appFirebase);
//importando componentes
import Login from '../src/components/Login'
import Home from '../src/components/Home'
import {Routes} from "react-router";
import {BrowserRouter, Route} from "react-router-dom"


import './App.css'



function App() {

  return (
    <div>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Login.jsx" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
  
  const [usuario, setUsuario] = useState(null) 

onAuthStateChanged(auth, (usuarioFirebase)=>{
  if (usuarioFirebase)  {
    setUsuario(usuarioFirebase)
  }
  else {
    setUsuario(null)
  }
})

  return (
    
     <div>
      {usuario ? <Home correoUsuario = {usuario.email} /> : <Login/>}
     </div>
  )
}

export default App
