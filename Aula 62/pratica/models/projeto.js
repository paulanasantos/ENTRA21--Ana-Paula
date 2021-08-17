const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class Projeto extends Model {}
Projeto.init({
nome: {
type: DataTypes.STRING,
allowNull: false
},
quantidadeHoras: {
type: DataTypes.INTEGER,
allowNull: false
}
}, {
sequelize
});

Projeto.belongsToMany(Usuario, {
through: "UsuariosProjetos",
as: {
singular: "usuario",
plural: "usuarios"
}
});

module.exports = Projeto;