const index = async (req, res) => {

    console.log(req.cookies);

    if (req.cookies.userId) {

        const fname = await req.cookies.firstName;
        const lname = await req.cookies.lastName;
        const email = await req.cookies.email;

        console.log(fname, lname);
        res.render('index', { fname, lname, email });

    } else {
        res.redirect('/login');
    }

}

module.exports = { index };