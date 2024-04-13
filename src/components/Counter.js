import { useState } from "react";

const Counter = () => {
  const [sayac, setSayac] = useState(0);
  const sayacArttır = () => {
    setSayac(sayac + 1);
    console.log("sayaç: ", sayac);
  };
  const sayacAzalt = () => {
    if (sayac > 0) {
      setSayac(sayac - 1);
    }
  };

  console.log("Sayaç değeri", sayac);

  return (
    <div className="sayac-class">
      <p>SAYAÇ: {sayac}</p>
      <button onClick={sayacArttır}>+ Arttır</button>
      <button onClick={() => setSayac(0)}>0 RESET</button>
      <button onClick={sayacAzalt}>- Azalt</button>
    </div>
  );
};
export default Counter;
