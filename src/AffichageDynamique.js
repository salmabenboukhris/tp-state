import { useState } from "react";

function AffichageDynamique() {
  const [clics, setClics] = useState(0);

  const textes = ["Premier clic", "Deuxième clic", "Troisième clic"];

  function handleClick() {
    setClics(clics + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Cliquer</button>
      <p>{textes[clics % textes.length]}</p>
    </div>
  );
}

export default AffichageDynamique;