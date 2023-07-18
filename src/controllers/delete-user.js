const pool = require("../db/pool");

async function deleteUser(req, res, next){
    try {
        const { id } = req.query;
        const [rows] = await pool.query("DELETE FROM user WHERE id = ?", [id]); 
        // console.log(rows);
        if(rows.affectedRows === 0){
            const error = new Error(`El usuario con id ${id} no existe`);
            error.status = 404;
            return next(error);
        }
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

module.exports = deleteUser;