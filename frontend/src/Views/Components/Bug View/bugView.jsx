import React from 'react';
import './bugView.css';
import BugViewSection from './component/bugViewSection';
import bugModel from '../../../Models/bugModel';
import { useDispatch } from 'react-redux';
import { markComplete } from '../../../Controllers/Redux/bugSlice';

function BugView(props) {
    const bug = new bugModel(props.bug);
    const dispatch = useDispatch();
    console.log(props);
    return (
        <div className="bug-view">
            <button onClick={props.clicked} className="close-btn">Close</button>
            <h2>{bug.name}</h2>
            {console.log(bug)}
            <BugViewSection title='Details' info={bug.details} />
            <BugViewSection title='Steps' info={bug.steps} />
            <BugViewSection title='Priority' info={bug.priority} />
            <BugViewSection title='Creator' info={bug.creator} />
            <BugViewSection title='App Version' info={bug.version} />
            <BugViewSection title='Time created' info={bug.time} />
            <button onClick={() => { dispatch(markComplete()) }}>Mark Complete</button>
        </div>
    )
}

export default BugView
