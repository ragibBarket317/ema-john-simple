import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  const newStoreProduct = [];
  const storeProduct = getShoppingCart();
  for (let id in storeProduct) {
    const addedProduct = products.find((pd) => pd.id === id);

    if (addedProduct) {
      const quantity = storeProduct[id];
      addedProduct.quantity = quantity;
      newStoreProduct.push(addedProduct);
    }
  }
  return newStoreProduct;
};

export default cartProductsLoader;
