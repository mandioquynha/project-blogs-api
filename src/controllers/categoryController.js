const categoryService = require('../services/categoryService');

const categoryController = {
  create: async (req, res) => {
    const { name } = req.body;
    if (name === undefined || name.length === 0
      ) return res.status(400).json({ message: '"name" is required' });
    const newCategory = await categoryService.create({ name });
    return res.status(201).json(newCategory);
  },
  list: async (_req, res) => {
    const categories = await categoryService.list();
    res.status(200).json(categories);
  },
};

module.exports = categoryController;