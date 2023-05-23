const router = require('express').Router();
const db = require("../db/config")

router.get("/", (req, res) => {
    res.send("Bateu aqui")

});

module.exports = router;