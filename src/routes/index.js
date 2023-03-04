import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Tá funcionando a API ;) rs" });
  });

  app.use(express.json(), livros);
  app.use(express.json(), autores);
};

export default routes;