export const storeInLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

// export const getLocalStorageItem = (key: string | null) => {
//   return JSON.parse(localStorage.getItem(key));
// };
