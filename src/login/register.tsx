import { useLogin } from "./useLogin";

export default function FormRegister() {
    const initialState = {
        email: "",
        password: "",
    };

    const { handleChangeValues, onSubmit, values} = useLogin(
        loginUserCallback,
        initialState
    );

    async function loginUserCallback() {
        console.log("Enviando valores para o banco de datos")
    }
    return (
        <form>
            <p>Crie sua conta!</p>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="formNome">Nome</label>
                <input type="text" id="formNome" name="nome" onChange={handleChangeValues} className="form-control" />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="formUser">Usuário</label>
                <input type="text" id="formUser" name="usuario" onChange={handleChangeValues} className="form-control" />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="formEmail">Email</label>
                <input type="email" id="formEmail" name="email" onChange={handleChangeValues} className="form-control"
                    placeholder="exemplo@email.com" />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="formPassword">Senha</label>
                <input type="password" id="formPassword" name="password" onChange={handleChangeValues} className="form-control" />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="formPassword">Confirme a Senha</label>
                <input type="password" id="formPassword" name="password" onChange={handleChangeValues} className="form-control" />
            </div>
            <div className="text-center pt-1 mb-5 pb-1">
                <button className="btn btn-primary btn-block mb-3 me-5 px-4" type="submit">Criar conta</button>
            </div>
        </form>
    );
    
}