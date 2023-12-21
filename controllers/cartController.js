const Cart = require('../model/cartModel'); // Adjust the path as necessary
const Product = require('../model/productModel'); // Adjust the path as necessary

const cartController = {
  // Add item to cart
  addItemToCart: async (req, res) => {
    const {userId, productId, quantity} = req.body;

    try {
      let cart = await Cart.findOne({userId});

      if (cart) {
        // Cart exists for the user
        let itemIndex = cart.products.findIndex(p => p.cartItem == productId);

        if (itemIndex > -1) {
          // Update quantity of existing product
          let productItem = cart.products[itemIndex];
          productItem.quantity = quantity;
          cart.products[itemIndex] = productItem;
        } else {
          // Add new product to cart
          cart.products.push({cartItem: productId, quantity});
        }
        cart = await cart.save();
        return res.status(200).json(cart);
      } else {
        // Create new cart
        const newCart = await Cart.create({
          userId,
          products: [{cartItem: productId, quantity}],
        });
        return res.status(201).json(newCart);
      }
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  },

  // Get cart by user ID
  getCart: async (req, res) => {
    const {userId} = req.params;

    try {
      const cart = await Cart.findOne({userId}).populate('products.cartItem');
      if (!cart) {
        return res.status(404).json({message: 'Cart not found'});
      }
      return res.status(200).json(cart);
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  },

  // Remove item from cart
  removeItemFromCart: async (req, res) => {
    const {userId, productId} = req.body;

    try {
      let cart = await Cart.findOne({userId});

      if (!cart) {
        return res.status(404).json({message: 'Cart not found'});
      }

      const itemIndex = cart.products.findIndex(p => p.cartItem == productId);
      if (itemIndex > -1) {
        cart.products.splice(itemIndex, 1);
        cart = await cart.save();
        return res.status(200).json(cart);
      } else {
        return res.status(404).json({message: 'Item not found in cart'});
      }
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  },

  deleteCart: async (req, res) => {
    const {userId} = req.params;

    try {
      const result = await Cart.deleteOne({userId});
      if (result.deletedCount === 0) {
        return errorMsg(res, 'Cart not found or already deleted', 404);
      }
      successMsg(res, 'Cart deleted successfully');
    } catch (error) {
      errorMsg(res, 'Error deleting cart', 500, error.message);
    }
  },
};

module.exports = cartController;
