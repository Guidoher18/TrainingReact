import { CAT_FACT_API } from "../utils/constants";
import { fetchJSON } from "./globalService";

export interface CatFact {
  fact: string;
  length: number;
}

export const getCatFact = async (): Promise<CatFact | null> => {
  const catFact = await fetchJSON<CatFact>(CAT_FACT_API);

  return catFact;
};
