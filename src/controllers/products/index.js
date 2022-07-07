module.exports = ({ db }) => ({
  getAll: async (req, res) => {
    const products = await db.Product.findAll({raw:true});
    res.json(products);
  },

  getOne: async (req, res) => {
    const { id } = req.params;
    const product = await db.Product.findOne(id);
    res.send(product);
  },

  create: async (req, res) => {
    const { body } = req;
    const product = await db.Product.create(body);
    res.send(product);
  },

  update: async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const product = await db.Product.update(body, id);
    res.send(product);
  },

  destroy: async (req, res) => {
    const { id } = req.params;
    await db.Product.destroy({
      where: {
        id: id,
      },
      truncate: true,
    });
    res.send(`product: ${id } destroy`);
  },
});
