const ModelUser = require('../models/user-model');
const bcrypt = require('bcrypt');

exports.getUsers = (req, res, next) => {
    ModelUser.find({})
        .exec()
        .then(result => {
            res.status(200).send({
                result: result
            });
        })
        .catch(err => {
            res.status(400).send({
                error: err
            })
        })
}

exports.postUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (errBcrypt, hash) => {
        if (errBcrypt) { return res.status(500).send({ error: errBcrypt }); }
        const user = new ModelUser({
            email: req.body.email,
            password: hash
        });
        user.save()
            .then(result => {
                res.status(201).send({ response: result });
            })
            .catch(err => {
                res.status(500).send({ err: err });
            });
    });
} 