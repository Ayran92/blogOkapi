const express = require("express");
const rotaEstanteDeLivros = require("./routes/estanteDeLivros");
const roteadorMaisLidos = require("./routes/maisLidos");
const roteadorContato = require("./routes/contato");
const app  = express();

app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("./pages/home");
});

app.use("/estante-de-livros", rotaEstanteDeLivros);
app.use("/mais-lidos", roteadorMaisLidos);
app.use("/contato", roteadorContato);


app.listen(process.env.PORT || 5000, (erro) => {
    if (erro) {
        throw erro;
    }
    else {
        console.log("Servidor Rodando Em: http://localhost:5000");
    }
})
