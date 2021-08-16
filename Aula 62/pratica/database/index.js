require("dotenv").config();
const { Sequelize } = require("sequelize")
const dbConfig = require("../config/database")
 
const sequelize = new Sequelize(dbConfig);
 
(async () => {
    try {
        await sequelize.authenticate()
        console.log('Conexão bem-sucedida!');
    } catch (error) {
        console.log('Conexão falhou!', error)
    } finally {
        sequelize.close();
    }
})
