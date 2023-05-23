const router = require("express").Router();

const homeRoutes = require("./home");
const loginRoutes = require("./login/index");
const messageRoutes = require("./mensagem");

router.use("/", homeRoutes);
router.use("/login", loginRoutes);
router.use("/mensagem", messageRoutes);

module.exports = router;