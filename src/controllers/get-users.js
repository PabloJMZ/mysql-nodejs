const pool = require("../db/pool");

async function getUsers(req, res, next){
    try {
        const { id } = req.query;
        const [rows, schema] = await pool.query("SELECT * FROM user;");
        // console.log(rows, schema);
        if(rows.length === 0){
            const error = new Error(`No hay Usuarios`);
            error.status = 404;
            return next(error);
        }
        res.json(rows); 
    } catch (error) {
        next(error);
    }
}

module.exports = getUsers;