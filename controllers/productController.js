const Product = require('../model/productModel');

module.exports = {
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    try {
      await newProduct.save();
      // console.log("New product created!", newProduct);
      res
        .status(201)
        .json({message: 'Created a new product', data: newProduct});
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  },

  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find().sort({createdAt: -1});
      res.status(200).json({data: products});
    } catch (error) {
      res.status(500).send('Server error');
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).send('Server error');
    }
  },

  searchProduct: async (req, res) => {
    try {
      console.log(req.params.key);
      const query = req.params.key; // or req.params.search, depending on how you're passing the search term
      const result = await Product.aggregate([
        {
          $search: {
            index: 'default',
            text: {
              query: query,
              path: {
                wildcard: '*',
              },
            },
          },
        },
      ]);
      res.status(200).json({data: result});
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  },
};
