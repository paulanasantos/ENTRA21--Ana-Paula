const { DataTypes, Sequelize, Model } = require("sequelize");
const { hashSync, compareSync } = require("bcrypt");
const sequelize = require("../database");

class Usuario extends Model {
checarSenha(senha) {
return compareSync(senha, this.senha);
}
}

Usuario.init({
id: {
type: DataTypes.UUID,
primaryKey: true,
defaultValue: Sequelize.UUIDV4
},
nome: {
type: DataTypes.STRING,
allowNull: false
},
email: {
type: DataTypes.STRING,
allowNull: false,
unique: true,
validate: {
isEmail: {
msg: "E-mail inválido!"
}
}
},
senha: {
type: DataTypes.STRING,
allowNull: false,
set(value) {
this.setDataValue("senha", hashSync(value, 10));
}
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

Usuario.belongsToMany(Projeto, {
through: "UsuariosProjetos",
as: {
singular: "projeto",
plural: "projetos"
}
});


Usuario.hasOne(Endereco, {
foreignKey: {
name: "idUsuario",
allowNull: false
}
});
Endereco.belongsTo(Usuario, {
foreignKey: {
name: "idUsuario",
type: DataTypes.UUID,
allowNull: false
}
});

module.exports = Usuario;
