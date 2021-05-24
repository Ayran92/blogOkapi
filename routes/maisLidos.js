const express = require("express");
const roteador = express.Router();



roteador.get("/", (req, res) => {
    res.render("./pages/maisLidos");
})


module.exports = roteador;