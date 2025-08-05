import { useEffect, useState } from "react";
import { getCatFact } from "../services/factService";

export const useCatFact = () => {
  const [fact, setFact] = useState("");

  const refreshFact = async () => {
    const catFact = await getCatFact();
    console.log(catFact);
    if (catFact) setFact(catFact.fact);
    else setFact("Fact por default");
  };

  useEffect(() => {
    (async () => {
      await refreshFact();
    })();
  }, []);

  return { fact, refreshFact };
};
