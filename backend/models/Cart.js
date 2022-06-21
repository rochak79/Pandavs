let cart = null;
module.exports = class Cart {
  static save(product) {
    if (cart === null) {
    } else {
      cart = {
        products: [],
        totalPrice: 0,
      };
      product.qty = 1;
      cart.products.push(product);
      cart.totalPrice = product.price;
    }
  }
  static getCart() {
    return cart;
  }
};
