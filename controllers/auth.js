const { db } = require('../conexao')
const bcrypt =  require("bcryptjs");

//Cria uma função que pega os dados do formulário mostra no console e manda uma resposta quando enviado
const register = (req, resp) => {
    console.log(req.body);

    const {name, email, password, passwordConfirm} = req.body

    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if (error){
            console.log(error);
        }

        if (Array.isArray(results) && results.length > 0) {
            return resp.render('register', {
                message: 'Esse email já está sendo usado'
            })
        }

        else if (password !== passwordConfirm){
            return resp.render('register', {
                message: 'As senhas não se confirmam'
            })
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(`Senha Encriptada: ${hashedPassword}`);

        db.query('INSERT INTO users SET ?', {name: name, email: email, password: hashedPassword}, (erro, results) => {
            if (erro) {
                console.log(erro);
            }else{
                return resp.render('register', {message: 'Usuário Registrado com sucesso'})
            }
        })
    })

}


module.exports = {
    register: register
}