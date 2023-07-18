const { Router } = require("express");
const router = Router();

const addUser = require("../controllers/add-user");
const getUser = require("../controllers/get-user");
const deleteUser = require("../controllers/delete-user");
const getUsers = require("../controllers/get-users");

function enrouteAPI(app){
    app.use("/users", router);
    router.get("/", getUsers);
    router.post("/add", addUser);
    router.get("/get", getUser);
    router.delete("/delete", deleteUser);
}

module.exports = enrouteAPI