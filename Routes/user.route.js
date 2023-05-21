const express = require("express");
const fs = require("fs");

const userRouter = express.Router();

userRouter.post("/", (req, res) => {
    const { name, email, gender, password } = req.body;
    fs.readFile("./users.json", (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error while reading user information");
        }

        const allData = JSON.parse(data);
        const users = allData.users;

        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                return res.status(409).send("User already exists.");
            }
        }

        const user = { name, email, gender, password };
        users.push(user);

        fs.writeFile("./users.json", JSON.stringify(allData), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error while saving user information");
            }
            res.status(201).send("User added successfully.");
        });
    });
});

userRouter.get("/", (req, res) => {
    fs.readFile("./users.json", (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error while retrieving user information");
        }
        res.status(200).send(JSON.parse(data));
    });
});

module.exports = {
    userRouter,
};
