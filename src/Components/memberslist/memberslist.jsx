import React from 'react';
import './memberlist.css';

const memberslist = ({members}) => {
  return (
    <div className='card' id='memberlist'>
        <div className='card-header'>
            Session members
        </div>
        <ul className="list-group">
            {members}
        </ul>
    </div>
  )
};

export default memberslist;
