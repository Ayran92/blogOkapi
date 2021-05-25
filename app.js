const express = require("express");
const mongoose = require("mongoose");
const rotaEstanteDeLivros = require("./routes/estanteDeLivros");
const roteadorMaisLidos = require("./routes/maisLidos");
const roteadorContato = require("./routes/contato");
const roteadorLogin = require("./routes/login");
const roteadorPainelPosts = require("./routes/painel-posts");
const Posts = require("./models/Post");
const app  = express();

mongoose.connect("mongodb://localhost/okapiBlog", {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
});

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));


app.get("/", async (req, res) => {
    const posts = await Posts.find().sort({dataCriacao: "desc"})
    res.render("./pages/home", { posts: posts });
});

app.use("/estante-de-livros", rotaEstanteDeLivros);
app.use("/mais-lidos", roteadorMaisLidos);
app.use("/contato", roteadorContato);
app.use("/login", roteadorLogin);
app.use("/painel-posts", roteadorPainelPosts);

app.listen(process.env.PORT || 5000, (erro) => {
    if (erro) {
        throw erro;
    }
    else {
        console.log("Servidor Rodando Em: http://localhost:5000");
    }
})
