import { useEffect, useState } from 'react';
import './timer.css';
import soundEffect from '../../sounds/sound.wav';
import Layout from './layout';

export default function Timer() {
    const [seconds,setSeconds] = useState(0);
    const [active,setActive] = useState(false);
    const [wait,setWait] = useState(false);
    let minutes, otherSecond;
    function Reset() {
        setSeconds(1500);
        setActive(false);
    }
    function Start() {
        wait === true ? setSeconds(300) : setSeconds(1500);
        setActive(true);
        setWait(false);
    }

    
    function SetInterval() {
      setSeconds(301)
      setActive(false);
      setWait(true);
    }
    
    useEffect(() => {
      const audio = new Audio(soundEffect);
      function emitAlert() {
          audio.play();
          alert("Sua sessão acabou!");
          SetInterval();
      }
      let interval : any
        if (active) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
          }, 1000);
          if(seconds === 0) {
            emitAlert();
          }
        } else if (!active && seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      } , [active, seconds]);


    return (
        <>
            <div className='timerBox'>
                <audio src="../sounds/sound.wav"></audio>
                <h1>Tempo Restante:</h1>
                <div className='occults'>
                  {minutes = Math.floor((seconds / 60))} {otherSecond = Math.floor(seconds % 60)} 
                </div>
                {<Layout minutes={String(minutes)} otherSecond={String(otherSecond)} />}
                {active === true ? (<button type="button" className="btn btn-primary btn-lg px-5" onClick={Reset}>Resetar</button>) : 
                (<button type="button" className="btn btn-primary btn-lg px-5" onClick={Start}>Iniciar</button>)}
            </div>
        </>
    )
}