module.exports = ({ db }) => ({
  getAll: async (req, res) => {
    const users = await db.User.findAll();
    res.send(users);
  },

  getOne: async (req, res) => {
    const { id } = req.params;
    const user = await db.User.findOne(id);
    res.send(user);
  },

  create: async (req, res) => {
    const { body } = req;
    const user = await db.User.create(body);
    res.send(user);
  },

  update: async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const user = await db.User.update(body, id);
    res.send(user);
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const user = await db.User.destroy(id);
    res.send(user);
  },
});
