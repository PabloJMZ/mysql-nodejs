function handler(err, req, res, next){
    const { status, message } = err;
    res.status(status || 500).json({message});
}

module.exports = handler;