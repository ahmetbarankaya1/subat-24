import { useState } from "react";

const Counter = () => {
  const [sayac, setSayac] = useState(0);

  const sayacArttir = () => {
    setSayac(sayac + 1);
    console.log("sayaç: ", sayac);
  };

  const sayacAzalt = () => {
    if (sayac > 0) {
      setSayac(sayac - 1);
    }
  };

  const reset = () => setSayac(0);

  console.log("Sayaç değeri: ", sayac);

  return (
    <div>
      <p>SAYAÇ: {sayac}</p>
      <button onClick={sayacArttir}>+ Arttır</button>
      <button onClick={() => setSayac(0)}>0 RESET</button>
      <button onClick={sayacAzalt}>- Azalt</button>
    </div>
  );
};

export default Counter;
