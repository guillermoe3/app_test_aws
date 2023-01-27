const express = require("express");
const router = express.Router();
const path = require("path");


router.get("/", (req, res) => {

    res.sendFile(path.resolve(__dirname, "../views/home.html"))

})


router.get("/test", (req, res) => {

    res.sendFile(path.resolve(__dirname, "../views/test.html"))

})

module.exports = router;
