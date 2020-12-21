import * as cart from '@shopify/theme-cart';

cart.getState().then(data => console.info(data));

window.cart = cart;

