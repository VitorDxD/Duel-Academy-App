const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Dados dos duelistas recebidos.');
});

router.get('/me', (req, res) => {
    res.send('Seus dados foram recebidos.');
});

router.post('/', (req, res) => {
    res.send('Perfil de duelista criado.')
})

module.exports = router;