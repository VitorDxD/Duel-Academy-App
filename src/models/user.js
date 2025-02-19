const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database.js')

const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM('admin', 'moderator', 'user'),
            defaultValue: 'user',
            allowNull: false,
            validate: {
                isIn: [['admin', 'moderator', 'user']]
            }
        }
    }, {
        timestamps: true
    }
)

module.exports = User