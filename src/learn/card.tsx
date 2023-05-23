import React from "react";

interface props {
    image: string
    title: string
    firstContent: string
    secondContent: string
    frontTitle: string
}
export default function Card(props: props) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img className='img_gym' src={props.image} alt="Avatar" />
                    <h1>{props.frontTitle}</h1>
                </div>
                <div className="flip-card-back">
                    <h1>{props.title}</h1>
                    <p>{props.firstContent}</p>
                    <p>{props.secondContent}</p>
                </div>
            </div>
        </div>
    )
}