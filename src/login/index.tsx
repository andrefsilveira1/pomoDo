import React, { useEffect, useState } from 'react';
import './index.css';
import icon from "../images/icon.webp";
import coffee from "../images/cofee.jpeg";
import Axios from "axios";
import { useLogin } from './useLogin';
import FormLogin from './login';
import FormRegister from './register';


export default function Login() {
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

    const [type, setType] = React.useState<boolean>(true)
    const changeType = () => {
        setType(!type);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(values => {
            Array.from(values).forEach(entry => {
                if (entry.intersectionRatio >= 0.5) {
                    entry.target.classList.add('full-card-off');
                }
            })
        }, {
            threshold : [0.5]
        });

        Array.from(document.querySelectorAll('.full-card')).forEach(element => {
            observer.observe(element)
        })
    }, [])


    return (
        <section className="h-100 gradient-form full-card">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">

                                        <div className="text-center mb-1">
                                            <img src={icon} />
                                        </div>
                                        {type === true ? FormLogin() : FormRegister()}
                                        <div className="d-flex align-items-center justify-content-center pb-4">
                                            <button type="button" className="btn btn-danger btn-block mb-3 me-5 p-2" onClick={changeType}>{type === true ? (
                                            <><p>Não tem uma conta?</p><p>Criar conta</p></>
                                            ) : (<><p>Já tem uma conta?</p><p>Faça o Login</p></>)}</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <img className="mb-2" src={coffee} />
                                        <h4 className="mb-4">Fique por dentro das suas conquistas!</h4>
                                        <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function callback() {
    throw new Error('Function not implemented.');
}
