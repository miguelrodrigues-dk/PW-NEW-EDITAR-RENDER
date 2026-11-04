const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let produtos = [
    {
        id: 1,
        nome: "Tênis",
        descricao: "Tênis esportivo",
        preco: 199.99,
        estoque: 10,
        categoria: "Calçados"
    },
    {
        id: 2,
        nome: "Notebook",
        descricao: "Notebook gamer",
        preco: 5999.99,
        estoque: 5,
        categoria: "Informática"
    },
    {
        id: 3,
        nome: "Camiseta",
        descricao: "Camiseta de algodão",
        preco: 49.99,
        estoque: 20,
        categoria: "Roupas"
    }
];

router.get("/", (req, res) => {
    res.render("produtos/index", {
        produtos: produtos
    });
});

router.get("/cadastro", (req, res) => {
    res.render("produtos/form-cadastro");
});

router.post("/", (req, res) => {
    const { nome, descricao, preco, estoque, categoria } = req.body;

    const novoProduto = {
        id: produtos.length + 1,
        nome: nome,
        descricao: descricao,
        preco: parseFloat(preco),
        estoque: parseInt(estoque),
        categoria: categoria
    };

    produtos.push(novoProduto);

    res.redirect("/produtos");
});

module.exports = router;
      


router.get("/", (req, res) => {
    res.render("fornecedores/index", {

        fornecedores: fornecedores

    });
});

router.get("/cadastro", (req, res) =>{

    res.render("fornecedores/form-cadastro");

});

router.post("/", (req, res) => {

    const { rasaoSocial, cnpj, email, telephone, cidade } = req.body;

    const novoFornecedor = {
        id: produtos.length + 1,
         nome: nome,
        descricao: descricao,
        preco: parseFloat(preco),
        estoque: parseInt(estoque),
        categoria: categoria
    };

    fornecedores.push(novoFornecedor);

    res.redirect("/fornecedores");
});

//Excluir
router.get("/excluir/:id", (req, res) => {

    let id = parseInt(req.params.id);
    produtos = produtos.filter(p => p.id !== id);
    res.redirect("/produtos");

});

//editar - form - GET
router.get("/editar/:id", (req, res) => {
    let id = parseInt(req.params.id);
    const produtoEncontrado = produtos.find(p => p.id === id);

    if (!produtoEncontrado) {
        return res.redirect("/produtos");
    }

    res.render("produtos/editar", { produto: produtoEncontrado });
});

//editar - efetiva - POST

module.exports = router;