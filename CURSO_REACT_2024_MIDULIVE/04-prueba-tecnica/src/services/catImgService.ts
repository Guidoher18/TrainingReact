import { CAT_IMG_API } from "../utils/constants";
import { fetchJSON } from "./globalService";

interface CatImg {
  id: string;
  tags: string[];
  created_at: string;
  url: string;
  mimetype: string;
}

export const getCatImg = async (
  threeFirstWords: string
): Promise<CatImg | null> => {
  const catImg = await fetchJSON<CatImg>(CAT_IMG_API(threeFirstWords));
  console.log(catImg);
  return catImg;
};
