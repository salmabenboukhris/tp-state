import { useState, useEffect } from "react";

function CompteurEffet() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Nombre de clics : ${count}`;
  }, [count]);

  return (
    <div>
      <p>Nombre de clics : {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquer
      </button>
    </div>
  );
}

export default CompteurEffet;