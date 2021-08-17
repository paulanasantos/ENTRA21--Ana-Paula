const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class Endereco extends Model {}
Endereco.init({
rua: {
type: DataTypes.STRING,
allowNull: false
},
numero: {
type: DataTypes.INTEGER,
allowNull: false,
validate: {
min: 1
}
}
}, {
sequelize
});

Endereco.belongsTo(Usuario, {
foreignKey: {
name: "idUsuario",
type: DataTypes.UUID,
allowNull: false
}
});

module.exports = Endereco;