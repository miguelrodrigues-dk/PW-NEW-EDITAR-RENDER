const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let fornecedores = [
    {
        id: 1,
        rasaoSocial: "Nike",
        cnpj: "43.761.092/0001-85",
        email: "Nike@gmail.com",
        telephone: "(11) 3214-5500",
        cidade: "São Paulo"
    },
    {
        id: 2,
        rasaoSocial: "Samsung",
        cnpj: "18.236.449/00001-0000",
        email: "Samsung@gmail.com",
        telephone: "(11) 4004-0000",
        cidade: "Campinas"
    },
    {
        id: 3,
        rasaoSocial: "Zara",
        cnpj: "29.873.115/0001-44",
        email: "Zara@gmail.com",
        telephone: "(21) 2503-9100",
        cidade: "Rio de Janeiro"
    }
];

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
        id: fornecedores.length + 1,
        rasaoSocial: rasaoSocial,
        cnpj: cnpj,
        email: email,
        telephone: telephone,
        cidade: cidade,
    };

    fornecedores.push(novoFornecedor);

    res.redirect("/fornecedores");
});

//Excluir
router.get("/excluir/:id", (req, res) => {

    let id = parseInt(req.params.id);
    fornecedores = fornecedores.filter(f => f.id !== id);
    res.redirect("/fornecedores");

});

//editar - form - GET
router.get("/editar/:id", (req, res) => {
    let id = parseInt(req.params.id);
    const fornecedorEncontrado = fornecedores.find(f => f.id === id);

    if (!fornecedorEncontrado) {
        return res.redirect("/fornecedores");
    }

    res.render("fornecedores/editar", { fornecedor: fornecedorEncontrado });
});

//editar - efetiva - POST

module.exports = router;