import { useEffect, useState } from 'react';
import Home from './home/index'
import api from "./api.js"


export default function App() {
  const [message, setMessage] = useState();

    useEffect(() => {
       api
        .get("/mensagem")
        .then((response) => setMessage(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    console.log(message)
    return (
      <div className="App">
          <Home/>
      </div>
    );
  }

