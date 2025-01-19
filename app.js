require('dotenv').config()

const duelistRoute = require('./src/routes/duelistRoute.js')

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Olá, Duelistas!')
})

app.use('/duelists', duelistRoute)

app.listen(process.env.PORT, () => {
    console.log(`Aplicação rodando em: http://${process.env.HOST}:${process.env.PORT}`)
})
