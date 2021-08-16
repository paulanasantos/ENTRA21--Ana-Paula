const { DataTypes } = require("sequelize")
const { hashSync } = require("bcrypt")
const sequelize = require("../database")
 
const Usuario = sequelize.define("Usuario", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue("senha", hashSync(value, 10))
        }
    }
});
// }, {
//     tableName: "usuarios",
//     underscored: true
// });
 
(async () => {
    
    try {
        // Criando a tabela Usuarios
        await Usuario.sync({ force: true });
        console.log('Tabela criada com sucesso!');
 
        // Inserindo um usuário
        const pedro = await Usuario.create({
            nome: "Pedro",
            email: "pedro@gmail.com",
            senha: "123456"
        })
        console.log("Usuário criado com sucesso");
    } catch (err) {
        console.log('Ocorreu algum erro ao criar a tabela', err);
    } finally {
        sequelize.close()
    }
})();