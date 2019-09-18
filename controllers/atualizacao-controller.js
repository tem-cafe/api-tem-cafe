const ModelAtt = require('../models/atualizacao-model');

exports.getAtt = (req, res, next) => {
    ModelAtt.find({}).sort({ date: -1 }).limit(1)
        .exec()
        .then(data => {
            if (data['versao'] === req.params.version) {
                return res.status(409).send({ mensagem: 'Versão atualizada!' });
            } else {
                return res.status(200).send({ link: data['versao'] });
            }
        })
};
