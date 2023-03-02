module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Genres",
    {
      name: DataTypes.STRING,
      ranking: DataTypes.INTEGER,
    },
    {
      tableName: "genres",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  Model.associate = function (models) {
    Model.hasMany(models.Movies, {
      foreignKey: "movie_id",
      as: "genres",
    });
  };

  return Model;
};
