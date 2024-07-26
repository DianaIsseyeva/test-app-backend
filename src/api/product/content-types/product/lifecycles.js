module.exports = {
  async afterCreate(event) {
    const { result } = event;
    // @ts-ignore
    if (strapi.io) {
      // @ts-ignore
      strapi.io.emit("productCreated", result);
    } else {
      console.error("strapi.io is not defined");
    }
  },
  async afterUpdate(event) {
    const { result } = event;
    // @ts-ignore
    if (strapi.io) {
      // @ts-ignore
      strapi.io.emit("productUpdated", result);
    } else {
      console.error("strapi.io is not defined");
    }
  },
  async afterDelete(event) {
    const { result } = event;
    // @ts-ignore
    if (strapi.io) {
      // @ts-ignore
      strapi.io.emit("productDeleted", result);
    } else {
      console.error("strapi.io is not defined");
    }
  },
};
