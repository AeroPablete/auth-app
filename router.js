module.exports = (app) => {

    app.get('/', (req, res, next) => {
        return res.status(200).send('Hello World!');
    });
};