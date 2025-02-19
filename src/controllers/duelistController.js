const { hash } = require("bcrypt");
const User = require("../models/user");

exports.getDuelists = (req, res, next) => {
    res.status(200).send('Dados de duelistas recebido.');
};

exports.getMe = (req, res, next) => {
    res.send('Seus dados foram recebidos.');
};

exports.createProfile = async (req, res, next) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." })
        }

        const existingUser = await User.findOne({ where: { email } })

        if (existingUser) {
            return res.status(422).json({ error: "E-mail já cadastrado." })
        }

        // gera um numero de 10 a 16
        const genSalt =  Math.floor(Math.random() * (16 - 10 + 1) + 10)

        const hashedPassword = await hash(password, genSalt)

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json(newUser)
        
    } catch (error) {
        console.error('Erro no registro:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}