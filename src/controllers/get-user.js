const pool = require("../db/pool");

async function getUser(req, res, next){
    try {
        const { id } = req.query;
        const [rows, schema] = await pool.query("SELECT * FROM user WHERE id = ?", [id]);
        // console.log(rows, schema);
        if(rows.length === 0){
            const error = new Error(`El usuario con id ${id} no existe`);
            error.status = 404;
            return next(error);
        }
        res.json(rows[0]); 
    } catch (error) {
        next(error);
    }
}

module.exports = getUser;