export const setLocalStorage = (key, value) => {
  if (value.length !== 0) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};