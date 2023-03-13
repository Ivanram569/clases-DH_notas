const { Genre } = require("../../database/models");

module.exports = {
  create: async (req, res) => {
    const genre = await Genre.create(req.params.id, {
      include: ["movies"],
    });
    res.json({
      meta: {
        status: !genre ? 404 : 200,
        url: req.originalUrl,
      },
      data: genre,
    });
  },

  destroy: (req, res) => {},
};
