module.exports.internalServerError = (err, req, res, next) => {
    res.sendStatus(500);
    next(err);
}