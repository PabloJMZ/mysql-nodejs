const pool = require("../db/pool");

async function addUser(req, res, next){
    try {
        const { name, password } = req.body;
        const [rows] = await pool.query("INSERT INTO user (name, password) VALUES (?, ?)",[name, password]);
        res.status(201).json({ id: rows.insertId, name, password });
    } catch (error) {
        next(error);
    }
}

module.exports = addUser;