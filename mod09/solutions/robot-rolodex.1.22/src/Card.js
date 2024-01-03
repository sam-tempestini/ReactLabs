import React from 'react'
import './Card.css';

export default function Card(props) {
    const {id, name, phone} = props.robot;
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${id}?set=set1&size=125x125`} alt="robot" />
            <h2>{name}</h2>
            <p>{phone}</p>
        </div>
    )
}