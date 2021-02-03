import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../Controllers/Redux/bugSlice';
import BugCard from '../Components/Bug Card/bugCard';
import BugView from '../Components/Bug View/bugView';

function ViewBugs() {
    const [ DISPLAY_BUG, SET_DISPLAY_BUG ] = useState({
        name: "",
        isDisplayed: false
    });
    const dispatch = useDispatch();
    const { bugs } = useSelector(state => state);

    useEffect(() => {
        dispatch(getBugs());
    }, [bugs.length < 1]);

    function clicked(name) {
        console.log(name);
        SET_DISPLAY_BUG({
            name: name,
            isDisplayed: !DISPLAY_BUG.isDisplayed
        })
    }
    return (
        <div className="page-container">
            {console.log(bugs)}
            {bugs.map((bug,key) => {
                return <BugCard key={key} bug={bug} clicked={clicked} />
            })}
            {DISPLAY_BUG.isDisplayed && <BugView clicked={clicked} bug={bugs.filter(bug => bug.name == DISPLAY_BUG.name)[0]} />}
        </div>
    )
}

export default ViewBugs;