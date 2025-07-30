import { useEffect, useState } from "react";
import { getCatImg } from "../services/catImgService";
import { getFirstThreeWord } from "../utils/common";

export const useCatImg = ({ fact }: { fact: string }) => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (!fact) return;

    (async () => {
      const catImg = await getCatImg(getFirstThreeWord(fact));
      const url = catImg !== null ? catImg.url : "";
      setImgUrl(url);
    })();
  }, [fact]);

  return { imgUrl };
};
