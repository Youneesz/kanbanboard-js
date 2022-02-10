import React from 'react';
import './memberlist.css';

const memberslist = ({ members }) => {
  return (
    <div className='memberlist'>
      <div className='card'>
        <div className='card-header'>
          Session members
        </div>
        <ul className="list-group">
          {members}
        </ul>
      </div>
    </div>
  )
};

export default memberslist;
