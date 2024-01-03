import React from 'react'
import Card from './Card';
import './CardList.css';

export default function CardList(props) {
    return (
        <div className="card-list">
            {props.robots.map(robot=>(<Card key={robot.id} robot={robot} />))}
        </div>
    )
}
