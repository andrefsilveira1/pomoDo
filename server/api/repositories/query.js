const db = require("../../db/config");

class usuarioRepository {
    constructor() {
        this.db = db;
    }

    async InsertValues(values) {
        let insert = "INSERT INTO (nome, nick, email, password) VALUES ('André', 'asw', 'freitasandre', '12313')";
        db.query(insert, (err, res) => {
            if(err){
                throw new Error ("Algo deu errado. Erro: ", err);
            }
        })
    }
}

module.exports ={ 
    usuarioRepository,
};

