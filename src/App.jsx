import { useState } from 'react'
import pro from './assets/pro.webp'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './style.css'
import './App.css'
const student ={
  name: 'Montassar',
  age: 22,
  email: 'montassarrhouma82@gmail.com',
  tel: ' 95884692',
  gender: 'male',
  addresse: 'mahdia',
  anneedetude:'2026',
  Filliere:'Genie Logiciel et Systeme d’Information',
  Groupe:'GLSI2',
  umg:'image',


}
const age = 22
function App() {
  return (
    <div>
      <img src={pro} alt="pro" /> 
      <h1>Fiche étudiant</h1> 
      <p>Nom et Prenom:{student.name}</p>
      <p>age:{student.age} ans</p>
      <p>email:{student.email}</p>
      <p>tel:{student.tel}</p>
      <p>gender:{student.gender}</p>
      <p>addresse:{student.addresse}</p>
      <p>anneedetude:{student.anneedetude}</p>
      <p>Filliere:{student.Filliere}</p>
      <p>Groupe:{student.Groupe}</p>
      <button type="submit">Conntactez</button>
    </div>
  )
}

export default App
