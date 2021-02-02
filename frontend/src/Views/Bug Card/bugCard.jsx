import React from 'react';
import './bugCard.css';
import PriorityController from '../../Controllers/priorityController';

function BugCard(props) {
    const { name, priority, version } = props.bug;
    const { level, color } = PriorityController(priority);
    const colorStyle = '10px solid ' + color;

    function clicked() {
        props.clicked(props.name);
    }
    return (
        <div className="bug-card" onClick={clicked} style={{ borderTop: colorStyle}}>
            <h2 className="name">{name}</h2>
            <h4 className="priority">{level}</h4>
            <h5 className="version">{version}</h5>
        </div>
    )
}

export default BugCard;