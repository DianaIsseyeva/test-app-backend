module.exports = ({ env }) => ({
  io: {
    enabled: true,
    config: {
      contentTypes: ["api::product.product", "api::cart.cart"],
      events: [
        {
          name: "connection",
          handler: ({ strapi }, socket) => {
            strapi.log.info(`New connection with id ${socket.id}`);
          },
        },
        {
          name: "productCreated",
          handler: ({ strapi }, data) => {
            strapi.log.info("Product created event received:", data);
          },
        },
        {
          name: "productUpdated",
          handler: ({ strapi }, data) => {
            strapi.log.info("Product updated event received:", data);
          },
        },
        {
          name: "productDeleted",
          handler: ({ strapi }, data) => {
            strapi.log.info("Product deleted event received:", data);
          },
        },
      ],
    },
  },
});
