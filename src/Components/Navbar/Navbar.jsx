import React from 'react';
import logo from './logo.jpg';
import PropTypes from 'prop-types';

const Navbar = ({ username, logo, addtask, showusers, showsessions}) => {

    return (
        <nav className="navbar bg-dark">
            <div className='container-fluid'>
                <button className="btn btn-secondary me-2" type="button" onClick={addtask}>+ Add Task</button>
                <button className="btn btn-secondary me-2" type="button" onClick={showusers}>Members</button>
                <button className="btn btn-secondary me-2" type="button" onClick={showsessions}>Sessions</button>
                <form className="d-flex">
                    <input className="form-control me-2" type="text" placeholder="Search" />
                    <button className="btn btn-sm btn-secondary" type="button">Search</button>
                </form>
                <div className="navbar-brand ms-auto">
                    <div className='d-flex'>
                        <a className="nav-link" href="#">{username}</a>
                        <input className='rounded-circle' type="image" src={logo} style={{ width: "50px" }} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    username: 'guest',
    logo: logo
}

Navbar.propTypes = {
    username: PropTypes.string
}

export default Navbar;
