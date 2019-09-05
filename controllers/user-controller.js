const ModelUser = require("../models/user-model");
const bcrypt = require("bcrypt");

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
      });
    });
};

exports.postUser = (req, res, next) => {
  ModelUser.findOne({ email: req.body.email }, (err, result) => {
    if (result) {
      return res.status(500).send({ err: "Usuario já existe" });
    }
    bcrypt.hash(req.body.password, 10, (errBcrypt, hash) => {
      console.log(errBcrypt, hash);
      if (errBcrypt) {
        return res.status(500).send({ bCryptError: errBcrypt });
      }
      const user = new ModelUser({
        email: req.body.email,
        password: hash
      });
      user
        .save()
        .then(result => {
          return res.status(201).send({ response: result });
        })
        .catch(err => {
          return res.status(500).send({ err: err });
        });
    });
  });
};

exports.deleteUser = (req, res, next) => {
  ModelUser.findOne({ email: req.body.email }, (err, result) => {
    if (!result) {
      return res.status(500).send({ error: "Usuario não existe!" });
    }
    bcrypt.compare(req.body.password, result.password, (errBcrypt, same) => {
      if (errBcrypt) {
        return res.status(500).send({ errBcrypt: errBcrypt });
      }
      ModelUser.deleteOne({ email: req.body.email }, (error, result) => {
        if (error) {
          return res.status(500).send({ error: error });
        }
        return res.status(201).send({ message: "Sucesso" });
      });
    });
  });
};

exports.loginUser = (req, res, next) => {
  ModelUser.findOne({ email: req.body.email }, (err, result) => {
    if (!result) {
      return res.status(500).send({ error: "Usuario não existe!" });
    }
    bcrypt.compare(req.body.password, result.password, (errBcrypt, same) => {
      if(same) {
        return res.status(200).send({
          message: "Sucesso",
          token: "token"
        })
      }
      if (errBcrypt) {
        return res.status(500).send({ errBcrypt: errBcrypt });
      }
    });
  });
};
