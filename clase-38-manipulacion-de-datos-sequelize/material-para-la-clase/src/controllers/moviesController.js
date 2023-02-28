const moment = require("moment");
const db = require("../database/models");
const sequelize = db.sequelize;
//Otra forma de llamar a los modelos
const Movies = db.Movie;

const moviesController = {
  list: (req, res) => {
    db.Movie.findAll().then((movies) => {
      res.render("moviesList.ejs", { movies });
    });
  },
  detail: (req, res) => {
    db.Movie.findByPk(req.params.id).then((movie) => {
      res.render("moviesDetail.ejs", { movie });
    });
  },
  new: (req, res) => {
    db.Movie.findAll({
      order: [["release_date", "DESC"]],
      limit: 5,
    }).then((movies) => {
      res.render("newestMovies", { movies });
    });
  },
  recomended: (req, res) => {
    db.Movie.findAll({
      where: {
        rating: { [db.Sequelize.Op.gte]: 8 },
      },
      order: [["rating", "DESC"]],
    }).then((movies) => {
      res.render("recommendedMovies.ejs", { movies });
    });
  }, //Aquí debemos modificar y completar lo necesario para trabajar con el CRUD
  add: function (req, res) {
    res.render("moviesAdd");
    //res.send("hola");
  },
  create: function (req, res) {
    db.Movie.create({
      title: req.body.title,
      rating: req.body.rating,
      awards: req.body.awards,
      release_date: req.body.release_date,
      length: req.body.length,
    })
      .then(() => {
        res.redirect("/movies");
      })
      .catch((error) => res.send(error));
  },
  edit: function (req, res) {
    // TODO
    //buscar los datos que voy a modificar
    //envió esos datos
    //los datos van en el value
    db.Movie.findByPk(req.params.id).then((Movie) => {
      Movie.release_date = moment(new Date(Movie.release_date)).format(
        "DD-MM-YYYY"
      );
      res.render("moviesEdit", { Movie });
    });
  },
  update: function (req, res) {
    // TODO
  },
  delete: function (req, res) {
    // TODO
  },
  destroy: function (req, res) {
    // TODO
  },
};

module.exports = moviesController;
