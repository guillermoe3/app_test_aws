const express = require("express");
const router = express.Router();
const path = require("path");


router.get("/", (req, res) => {

    console.log(req)
    res.sendFile(path.resolve(__dirname, "../views/home.html"))

})


router.get("/test", (req, res) => {

    res.sendFile(path.resolve(__dirname, "../views/test.html"))

})


router.get("/protectedpath", (req, res) => {

    console.log(req)
    res.sendFile(path.resolve(__dirname, "../views/protectedpath.html"))

})

router.get("/noprotectedpath", (req, res) => {

    console.log(req)
    res.sendFile(path.resolve(__dirname, "../views/noprotectedpath.html"))

})

module.exports = router;
