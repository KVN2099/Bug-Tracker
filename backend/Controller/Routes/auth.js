const route = require('express').Router();
const userModel = require('../../Model/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

route.post('/user', (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function(error, hash) {
        if (error) {
            console.log(error);
        }
        // Store hash in your password DB.
        let newBody = req.body;
        newBody.password = hash
        userModel.create(newBody).then((user) => {
            if (!user) {
                return res.status(400).send("There was an error");
            }
            res.send('Created user');
        })
        .catch((err) => {
            res.status(400).send(err);
        });
    });
});

route.put('/user', (req, res) => {
    const { _id, name, password, role } = req.body;
    userModel.findByIdAndUpdate(_id, { name, password, role }).then((user) => {
        if (!user) { return res.status(400).send("There is no user") };
        res.send("User updated");
    }).catch((err) => {
        if (err) { res.status(400).send(err) };
    });
});

route.post('/', (req, res) => {
    userModel.findOne(req.body).then((user) => {
        if (!user) { return res.status(400).send('Incorrect email or password') };
        res.cookie('user', user);
        res.send(true);
    })
    .catch((err) => {
        if (err) {
            res.status(400).send(err);
        }
    });
});

route.post("/login", async (request, response) => {
    try {
        console.log(request);
        var user = await userModel.findOne({ name: request.body.name }).exec();
        if(!user) {
            return response.status(400).send({ message: "The username does not exist" });
        }
        if(!bcrypt.compareSync(request.body.password, user.password)) {
            return response.status(400).send({ message: "The password is invalid" });
        }
        response.send({ message: "The username and password combination is correct!" });
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = route;