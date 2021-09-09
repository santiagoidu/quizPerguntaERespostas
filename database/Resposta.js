const Sequilize = require("sequelize")
const connection = require("./db")

const Resposta = connection.define('respostas', {
    corpo: {
        type: Sequilize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequilize.INTEGER,
        allowNull: false
    },
})

Resposta.sync({force: false})

module.exports = Resposta