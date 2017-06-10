const AuthCtrl = require('./controllers/auth');

module.exports = (app) => {
    app.post('/sign-up', AuthCtrl.signUp);
};