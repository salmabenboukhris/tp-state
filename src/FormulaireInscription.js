import { useState } from "react";

function FormulaireInscription() {
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Prénom : ${prenom} \nEmail : ${email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Prénom :</label>
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </div>

      <div>
        <label>Email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default FormulaireInscription;