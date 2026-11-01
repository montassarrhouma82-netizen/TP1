function StudentCard(props) {
  return (
    <div className="card">

      <img src={props.image} alt="Photo étudiant" />

      <h2>Fiche étudiant</h2>

      <p>Nom et Prénom : {props.prenom} {props.nom}</p>

      <p>Age : {props.age} ans</p>

      <p>Email : {props.email}</p>

      <p>Téléphone : {props.telephone}</p>

      <p>Tel : {props.tel}</p>

      <p>Gender : {props.gender}</p>

      <p>Adresse : {props.addresse}</p>

      <p>Filière : {props.filiere}</p>

      <p>Année d'étude : {props.anneeEtude}</p>

      <p>Groupe : {props.groupe}</p>

      <p>Ville : {props.ville}</p>

      <p>UMG : {props.umg}</p>

      <button type="button">Contacter</button>

    </div>
  )
}

export default StudentCard