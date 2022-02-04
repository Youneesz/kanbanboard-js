import React from 'react';

const member = ({ logo, username }) => {
    return (
        <li className='list-group-item'>
            <input className='rounded-circle' type="image" src={logo} style={{ width: "25px" }} />
            <a href="#">{username}</a>
        </li>
    )
};

export default member;
