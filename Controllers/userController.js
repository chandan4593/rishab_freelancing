const db = require('../database/connect');

exports.welcomePage = (req, res, next) => {
    res.send("<h1>Welcome to kisam mart API!</h1>")
}