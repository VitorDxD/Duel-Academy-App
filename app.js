require('dotenv').config()

const duelistRoute = require('./src/routes/duelistRoute.js')
const sequelize = require('./src/utils/database.js')
const express = require('express')
const app = express()

app.get('/testDB', async (req, res) => {
    try {
        await sequelize.authenticate();
        res.send('Conexão foi estabelecida com sucesso.')
    } 
    catch (error) {
        console.error('Unable to connect to the database:', error)
        res.send('Não foi possível concluir a conexão com a base de dados.')
    }
})

app.use('/duelists', duelistRoute)

app.listen(process.env.PORT, () => {
    console.log('===================================================')
    console.log(`  Aplicação rodando em: http://${process.env.HOST}:${process.env.PORT}`)
    console.log('===================================================')
})
