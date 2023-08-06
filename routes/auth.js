const express = require('express');
const authController = require('../controllers/auth')

const router = express.Router();

//Cria a rota de requisição dos dados do formulário
router.post('/register', authController.register)

//exporta as rota
module.exports = router