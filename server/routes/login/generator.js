const db = require("../../db/config");
const { LoginController } = require("../../api/controllers/login/");
const { usuarioRepository } = require("../../api/repositories/query");

const UsuarioRepository = new usuarioRepository(db)
const loginController = new LoginController(
    UsuarioRepository
)

module.exports = {
    loginController
}
