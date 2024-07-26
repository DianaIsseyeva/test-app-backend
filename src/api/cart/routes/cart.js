module.exports = {
  routes: [
    {
      method: "POST",
      path: "/cart/add",
      handler: "cart.addToCart",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/cart/remove",
      handler: "cart.removeFromCart",
      config: {
        policies: [],
      },
    },
  ],
};
