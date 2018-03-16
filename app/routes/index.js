const router = require('express').Router();

const bakingRoutes = require('./baking.route')

module.exports = router;

router.use('/api/baking', bakingRoutes);

useAPIErrorHandlers(router);

function useAPIErrorHandlers(router) {
    router.use('/api/*', (req, res, next) => {
        res.sendStatus(404);
    })

    router.use((err, req, res, next) => {
        if(!err) {
            return next();
        }
        console.log(err);
        res.sendStatus(500);
    })
}