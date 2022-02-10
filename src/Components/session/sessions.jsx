import React from 'react'

const sessions = ({ sessions }) => {
    return (
        <div className='sessions'>
            <div className='card'>
                <div className='card-header'>
                    Sessions
                </div>
                <ul className="list-group">
                    {sessions}
                </ul>
            </div>
        </div>
    )
}

export default sessions