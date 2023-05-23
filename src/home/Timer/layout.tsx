import "./layout.css"

interface props {
    minutes: string;
    otherSecond: string;
}

export default function Layout({ minutes, otherSecond}: props) {
    return (
        <div className='box'>
            <div className='minutesBox'>
                <h1 className='number' id='flash'> {minutes[1] !== undefined ? minutes[0] : 0}</h1  > <h1 className='number' id='flash'> {minutes[1] !== undefined ? minutes[1] : minutes[0]}  </h1>
            </div>
            <h2>:</h2>
            <div className='secondsBox'>
                <h1 className='number' id='flash'> {otherSecond[1] !== undefined ? otherSecond[0] : 0} </h1>  <h1 className='number' id='flash'> {otherSecond[1] !== undefined ? otherSecond[1] : otherSecond[0]}</h1>
            </div>
        </div>
    );
}