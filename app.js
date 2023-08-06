const express = require('express')
const path =  require('path')
const app = express()
const port = 8000
const dotenv = require('dotenv')

//Passa as requisições do formulário de um json para um objeto {}
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// Referência a pasta public e configura o express para usar a engine hbs e os arquivos estáticos
const public = path.join(__dirname, './public')
app.set('view engine', 'hbs')
app.use(express.static(public))

//Define as rotas de reposta de páginas
app.use('/', require('./routes/pages'))
//Define as rotas de requisição do formulário
app.use('/auth', require('./routes/auth'))


app.listen(port, () => {
    console.log("Na porta 8000");
})
