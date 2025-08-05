// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveLocalStorage = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorage = (keys: string[]) => {
  keys.forEach((k) => window.localStorage.removeItem(k));
};

export const getLocalStorage = (key: string) => {
  return window.localStorage.getItem(key);
};
