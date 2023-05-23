class LoginController {
    constructor(
        usuarioRepository
    ) {
        this.usuarioRepository = usuarioRepository;
    }
    async renderIndex(req, res) {
        return res.send({
            status: "Ok",
            online: true,
        })
    }

    async postLogin (req, res) {
        const id = req.params.id;
        return res.send({
            id: id,
            status: "OK",
            online: true
        })
    }
}

module.exports = {
    LoginController
}