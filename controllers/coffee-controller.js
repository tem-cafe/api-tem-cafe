const ModelCoffee = require('../models/coffee-model');

exports.getCoffee = (req, res, next) => {
    ModelCoffee.find({}).sort({ date: -1 }).limit(1)
        .exec()
        .then(temCafe => {
            if (!temCafe[0].temCafe) {
                return res.status(200).send({
                    result: {
                        temCafe: temCafe[0].temCafe,
                        temPo: temCafe[0].temPo,
                        temCopo: temCafe[0].temCopo,
                        temAcucar: temCafe[0].temAcucar,
                    }
                })
            }
            ModelCoffee.find({ fizCafe: true }).sort({ date: -1 }).limit(1)
                .exec()
                .then(fizCafe => {
                    return res.status(200).send({
                        result: {
                            temCafe: temCafe[0].temCafe,
                            temCopo: temCafe[0].temCopo,
                            temAcucar: temCafe[0].temAcucar,
                            temPo: temCafe[0].temPo,
                            date: fizCafe[0].date
                        }
                    });
                })
                .catch(err => {
                    return res.status(500).send({
                        error: err
                    });
                });
        })
};

exports.postCoffee = (req, res, next) => {
    ModelCoffee.find({}).sort({ date: -1 }).limit(1)
        .exec()
        .then(result => {
            var temCafe = req.body.temCafe;
            if (req.body.fizCafe) {
                temCafe = true;
            }
            const hasCoffee = new ModelCoffee({
                email: req.body.email,
                fizCafe: (req.body.fizCafe != null ? req.body.fizCafe : false),
                temCafe: (temCafe != null ? temCafe : result[0].temCafe),
                temCopo: (req.body.temCopo != null ? req.body.temCopo : result[0].temCopo),
                temPo: (req.body.temPo != null ? req.body.temPo : result[0].temPo),
                temAcucar: (req.body.temAcucar != null ? req.body.temAcucar : result[0].temAcucar),
            });
            hasCoffee.save()
                .then(result => {
                    return res.status(200).send({ result: result });
                })
                .catch(error => {
                    return res.status(500).send({ error: error })
                })
        })
        .catch(error => {
            return res.status(500).send({ error: error });
        });
}
