const Sequilize = require("sequelize")
const connection = require("./db")

const Pergunta = connection.define('perguntas', {
    titulo: {
        type: Sequilize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequilize.TEXT,
        allowNull: false
    },
})

Pergunta.sync({force: false}).then(() => {})

module.exports = Pergunta