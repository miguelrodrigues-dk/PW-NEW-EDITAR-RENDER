const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let clientes = [
    {
        id: 1,
        nome: "John Doe",
        email: "john.doe@example.com",
        telephone: "123-456-7890"
    },
    {
        id: 2,
        nome: "Jane Smith",
        email: "jane.smith@example.com",
        telephone: "098-765-4321"
    },
    {
        id: 3,
        nome: "Bob Johnson",
        email: "bob.johnson@example.com",
        telephone: "555-555-5555"
    }
];

router.get("/", (req, res) => {
    res.render("clientes/index", {

        clientes: clientes

    });
});

router.get("/cadastro", (req, res) =>{

    res.render("clientes/form-cadastro");

});

router.post("/", (req, res) => {

    const { nome, email, telephone} = req.body;

    const novoCliente = {
        id: clientes.length + 1,
        nome: nome,
        email: email,
        telephone: telephone
    };

    clientes.push(novoCliente);

    res.redirect("/clientes");
});

//Excluir
router.get("/excluir/:id", (req, res) => {

    let id = parseInt(req.params.id);
    clientes = clientes.filter(c => c.id !== id);
    res.redirect("/clientes");

});

//editar - form - GET
router.get("/editar/:id", (req, res) => {
    let id = parseInt(req.params.id);
    const clienteEncontrado = clientes.find(c => c.id === id);

    if (!clienteEncontrado) {
        return res.redirect("/clientes");
    }

    res.render("clientes/editar", { cliente: clienteEncontrado });
});

//editar - efetiva - POST

module.exports = router;