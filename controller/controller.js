const index = async (req, res) => {

    console.log(req.cookies);

    if (req.cookies.userId) {

        const userImg = await req.cookies.userImg;
        const fname = await req.cookies.firstName;
        const lname = await req.cookies.lastName;
        const email = await req.cookies.email;

        console.log(userImg);
        console.log(fname, lname);
        res.render('index', { userImg, fname, lname, email });

    } else {
        res.redirect('/login');
    }

}

module.exports = { index };