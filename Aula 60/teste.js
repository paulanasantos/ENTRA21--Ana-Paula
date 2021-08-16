const db = require("./db");
const format = require("pg-format");

(async () => {
// try {
// const res = await pool.query("SELECT NOW()");
// console.log(res.rows[0].now);
// } catch (error) {
// console.log(error.message);
// } finally {
// pool.end();
// }

 // try {
// await pool.query(`
// CREATE TABLE IF NOT EXISTS funcionarios (
// id SERIAL PRIMARY KEY,
// nome text NOT NULL,
// email text NOT NULL UNIQUE,
// telefone text NOT NULL UNIQUE
// );
// CREATE TABLE IF NOT EXISTS enderecos (
// id SERIAL PRIMARY KEY,
// rua text NOT NULL,
// numero integer NOT NULL,
// cidade text NOT NULL,
// estado text NOT NULL,
// id_funcionario integer NOT NULL REFERENCES funcionarios
// );`);
// console.log("Tabelas criadas com sucesso!");
// } catch (error) {
// console.log(error.message);
// } finally {
// pool.end();
// }

 // try {
// const res = await pool.query(`
// INSERT INTO
// funcionarios (nome, email, telefone)
// VALUES
// ($1, $2, $3)
// RETURNING *;`,
// ["pedro", "pedro@email.com", "(47) 9 9999-9999"]);
// console.log(res.rows[0]);
// } catch (error) {
// console.log(error.message);
// } finally {
// pool.end();
// }

 try {
const funcionarios = [
["joão", "joão@email.com", "(47) 9 8888-8888"],
["maria", "maria@email.com", "(47) 9 7777-7777"]
];

 const query = format("INSERT INTO funcionarios (nome, email, telefone) VALUES %L RETURNING *", funcionarios);

 const res = await pool.query(query);

 console.log(res.rows);
} catch (error) {
console.log(error.message);
} finally {
pool.end();
}
})();

