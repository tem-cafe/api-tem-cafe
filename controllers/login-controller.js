const ModelUser = require("../models/user-model");
const bcrypt = require("bcrypt");

exports.loginUser = (req, res, next) => {
    ModelUser.findOne({ email: req.body.email }, (err, result) => {
        if (!result) {
            return res.status(401).send({ error: "Usuario ou senha incorreta!" });
        }
        bcrypt.compare(req.body.password, result.password, (errBcrypt, same) => {
            if (same) {
                return res.status(200).send({
                    name: result.name,
                    email: result.email,
                    message: "Sucesso",
                    token: "token"
                })
            }
            return res.status(401).send({ error: "Usuario ou senha incorreta!" });
        });
    });
};