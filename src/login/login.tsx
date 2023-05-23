import React from "react";
import { useState } from "react";
import { useLogin } from "./useLogin";

export default function FormLogin() {
    const initialState = {
        email: "",
        password: "",
    };

    const { handleChangeValues, onSubmit, values } = useLogin(
        loginUserCallback,
        initialState
    );

    async function loginUserCallback() {
        console.log("Enviando valores para o banco de datos")
    }
    return (
        <form>
            <p>Faça o login na sua conta!</p>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="formEmail">Usuário</label>
                <input type="email" id="formEmail" name="email" onChange={handleChangeValues} className="form-control"
                    placeholder="exemplo@email.com" />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="formPassword">Senha</label>
                <input type="password" id="formPassword" name="password" onChange={handleChangeValues} className="form-control" />
            </div>

            <div className="text-center pt-1 mb-5 pb-1">
                <button className="btn btn-primary btn-block mb-3 me-5 px-4" type="submit">Login</button>
                <a className="text-muted" href="#!">Esqueceu a senha?</a>
            </div>
        </form>
    );
}