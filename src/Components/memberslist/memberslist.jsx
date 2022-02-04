import React from 'react';

const memberslist = ({members}) => {
  return (
    <div className='card' style={{ width: '500px', marginLeft: '120px', marginTop: '10px' }}>
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
