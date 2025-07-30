const CAT_FACT_API = "https://catfact.ninja/fact";

const CAT_IMG_API = (threeFirstWords: string) =>
  `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`;

export { CAT_FACT_API, CAT_IMG_API };
