const router = require('express').Router();
const { loginController } = require ("./generator");

router.get("/", loginController.renderIndex.bind(loginController))
router.post("/:id/entrar", loginController.postLogin.bind(loginController))

module.exports = router;