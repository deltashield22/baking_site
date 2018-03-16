const bakingService = require('../services/baking.service');

module.exports = {
    readAll: readAll
}

function readAll(req, res) {
    const query = req.params.query.length > 0 ? req.params.query : '';
    bakingService.readAll(query)
        .then(cards => {
            res.status(200).json(cards);
        })
        .catch(err => {
            console.log(err);
            res.status(401).send(err);
        })
}