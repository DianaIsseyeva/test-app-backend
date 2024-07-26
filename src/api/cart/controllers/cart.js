"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "plugin::users-permissions.user",
  ({ strapi }) => ({
    async addToCart(ctx) {
      // @ts-ignore
      const { userId, productId } = ctx.request.body;

      // Найти пользователя и загрузить его корзину
      const user = await strapi.entityService.findOne(
        "plugin::users-permissions.user",
        userId,
        {
          populate: { cart: true },
        }
      );

      // Найти продукт
      const product = await strapi.entityService.findOne(
        "api::product.product",
        productId
      );

      // Добавить продукт в корзину, если он еще не добавлен
      if (!user.cart.some((p) => p.id === product.id)) {
        user.cart.push(product);
      }

      // Обновить корзину пользователя
      await strapi.entityService.update(
        "plugin::users-permissions.user",
        userId,
        {
          data: { cart: user.cart },
        }
      );

      // Вернуть обновленную корзину
      ctx.send(user.cart);
    },

    async removeFromCart(ctx) {
      // @ts-ignore
      const { userId, productId } = ctx.request.body;

      // Найти пользователя и загрузить его корзину
      const user = await strapi.entityService.findOne(
        "plugin::users-permissions.user",
        userId,
        {
          populate: { cart: true },
        }
      );

      // Удалить продукт из корзины
      user.cart = user.cart.filter((product) => product.id !== productId);

      // Обновить корзину пользователя
      await strapi.entityService.update(
        "plugin::users-permissions.user",
        userId,
        {
          data: { cart: user.cart },
        }
      );

      // Вернуть обновленную корзину
      ctx.send(user.cart);
    },
  })
);
