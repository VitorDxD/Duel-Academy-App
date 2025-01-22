exports.getDuelists = (req, res, next) => {
    res.status(200).send('Dados de duelistas recebido.');
};

exports.getMe = (req, res, next) => {
    res.send('Seus dados foram recebidos.');
};

exports.createProfile = (req, res, next) => {
    res.send('Perfil de duelista criado.')
}