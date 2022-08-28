const setDb = (data) => {
  if (data) {
    localStorage.setItem("carts", JSON.stringify(data));
    return true;
  }
  return false;
};
const getData = () => {
  if (localStorage.getItem("carts")) {
    return JSON.parse(localStorage.getItem("carts"));
  }
  return [];
};
const clearTheCart = () => {
  localStorage.removeItem("shopping_cart");
};

export { setDb, getData, clearTheCart };
