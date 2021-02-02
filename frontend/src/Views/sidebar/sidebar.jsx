import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../Controllers/Redux/authSlice';
import './sidebar.css';
import ViewBugs from '../../Views/Pages/viewBugs';

function Sidebar() {
    const dispatch = useDispatch()

    const { auth } = useSelector(state => state);

    function signOut() {
        dispatch(signOut());
    }

    return (
        <div className="sidebar">
            <Link className="nav-link" to="/">
                <h1 className="brand">Bug Tracker</h1>
            </Link>
            <ul>
                <Link to="/dashboard" className="nav-link"><li>Dashboard</li></Link>
                <Link to="/view-bugs" className="nav-link"><li>View Bugs</li></Link>
                {auth.admin && <Link to="/create-bug" className="nav-link"><li>Create Bug</li></Link>}
            </ul>
            <button className="nav-link logout" onClick={signOut}>Logout</button>
        </div>
    )
}

export default Sidebar
