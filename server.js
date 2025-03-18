//configurar o back-end

const express = require('express')

//instancia
const app = express()

//rota para front-end
app.use(express.static('public'))

//iniciar com localhost:300

app.listen(3000, () => {
    console.log(`Servidor rodando, acesse o link http://localhost:3000`)
})