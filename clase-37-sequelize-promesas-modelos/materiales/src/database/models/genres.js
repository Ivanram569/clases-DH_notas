const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) =>{
    const Genres = sequelize.define("Genres", {
            name: DataTypes.STRING,
        },
        {
            tableName: "genres",
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
        );

        return Genres;
};