const express = require('express')
const router = express.Router()

const userController = require("../../controller/usersController")


router
    .get("/", userController.getAllUsers)
    .get("/:id", userController.getOneUser)
    .post("/", userController.createNewUser)
    .put("/:id", userController.updateUser)
    .delete("/:id", userController.deleteUser)

module.exports = router
