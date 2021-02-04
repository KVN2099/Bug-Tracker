import React from 'react';
import './Card.css';
import Priority from '../../../Controllers/priorityController';

function Card(props) {
    const { level, color } = Priority(props.priority);
    const colorStyle = '10px solid ' + color;
    return (
        <div className="dashboard-card" onClick={props.clicked} style={{ borderTop: colorStyle }}>
            <h2>Total: {level}</h2>
            <p>{props.count}</p>
        </div>
    )
}

export default Card
