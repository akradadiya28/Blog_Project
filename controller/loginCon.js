const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const login = (req, res) => {

    res.render('login.ejs')
}

const loginData = async (req, res) => {

    console.log(req.body);

    const user = await userModel.find({ email: req.body.email });
    console.log(user);

    if (user.length > 0) {
        bcrypt.compare(req.body.pwd, user[0].password, (err, result) => {

            console.log(result);

            if (result) {
                res.cookie('userId', user[0]._id.toString());
                res.cookie('userImg', user[0].path);
                res.cookie('firstName', user[0].fname);
                res.cookie('lastName', user[0].lname);
                res.cookie('email', user[0].email);
                res.redirect('/');
            } else {
                res.redirect('/login');
            }
        });
    } else {
        res.redirect('/register');
    }
}

module.exports = { login, loginData };