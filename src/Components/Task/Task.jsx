import React from 'react';
import PropTypes from 'prop-types'; 

const Task = ({ id, name, owner, desc, start, finish }) => {
    return (
        <div className='card m-2' id={id}>
            <div className="card-header">
                <h4>{name}</h4>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><h6>{owner}</h6></li>
                <li className="list-group-item"><p>{desc}</p></li>
                <li className="list-group-item">
                    <ul className="list-group list-group-horizontal justify-content-center">
                        <li class="list-group-item">{start}</li>
                        <li class="list-group-item">{finish}</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

Task.propTypes = {
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    desc: PropTypes.string,
    start: PropTypes.string.isRequired,
    finish: PropTypes.string.isRequired
}

export default Task
