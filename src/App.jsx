import './style.css'
import './App.css'
import StudentCard from './components/StudentCard'
import pro from './assets/pro.webp'
import bro from './assets/bro.avif'
import woman from './assets/woman.webp'
import gra from './assets/gra.avif'

const etudiants = [
  {
    prenom: "Montassar",
    nom: "Rhouma",
    age: "22",
    email: "montassarrhouma82@gmail.com",
    telephone: "95884692",
    tel: "95884692",
    gender: "male",
    addresse: "Mahdia",
    filiere: "Genie Logiciel et Systeme d’Information",
    anneeEtude: "2026",
    groupe: "GLSI2",
    ville: "Mahdia",
    umg: "image",
    image: pro
  },
  {
    prenom: "Mariem",
    nom: "Marzouk",
    age: "20",
    email: "marzoukmariem@gmail.com",
    telephone: "98765432",
    tel: "98765432",
    gender: "female",
    addresse: "nabeul",
    filiere: "Genie Logiciel et Systeme d’Information",
    anneeEtude: "2026",
    groupe: "GLSI2",
    ville: "Mahdia",
    umg: "image",
    image: woman
  },
  {
    prenom: "Amine",
    nom: "Guesmi",
    age: "21",
    email: "amine@gmail.com",
    telephone: "98765431",
    tel: "98765431",
    gender: "male",
    addresse: "sfax",
    filiere: "Genie Logiciel et Systeme d’Information",
    anneeEtude: "2026",
    groupe: "GLSI2",
    ville: "Sousse",
    umg: "image",
    image: bro
  },
  {
    prenom: "Mariem",
    nom: "Khalfallah",
    age: "21",
    email: "mariem@gmail.com",
    telephone: "98765430",
    tel: "98765430",
    gender: "female",
    addresse: "Monastir",
    filiere: "Genie Logiciel et Systeme d’Information",
    anneeEtude: "2026",
    groupe: "GLSI2",
    ville: "Monastir",
    umg: "image",
    image: gra
  }
]

function App() {
  return (
    <div className="container">

      <h1>Liste des étudiants</h1>

      <div className="students">

        {etudiants.map((etudiant) => (
          <StudentCard
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            age={etudiant.age}
            email={etudiant.email}
            telephone={etudiant.telephone}
            tel={etudiant.tel}
            gender={etudiant.gender}
            addresse={etudiant.addresse}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            umg={etudiant.umg}
            image={etudiant.image}
          />
        ))}

      </div>
    </div>
  )
}

export default App