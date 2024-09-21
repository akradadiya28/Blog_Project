const userModel = require('../models/userModel');

const userListing = async (req, res) => {

    const userImg = await req.cookies.userImg;
    const fname = await req.cookies.firstName;
    const lname = await req.cookies.lastName;
    const email = await req.cookies.email;

    res.render('user-listing.ejs', { userImg, fname, lname, email });
}

const profile = async (req, res) => {

    const userImg = await req.cookies.userImg;
    const fname = await req.cookies.firstName;
    const lname = await req.cookies.lastName;
    const email = await req.cookies.email;

    res.render('profile.ejs', { userImg, fname, lname, email });

}

module.exports = { userListing, profile }