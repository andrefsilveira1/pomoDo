import { useState } from "react";

export const useLogin = (callback: any, initialState ={}) => {
    const [values, setValues] = useState(initialState);

    const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name] : e.target.value})
    };
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback();
    }
    
    return {
        handleChangeValues,
        onSubmit,
        values,
    };
}

function callback() {
    throw new Error("Function not implemented.");
}
