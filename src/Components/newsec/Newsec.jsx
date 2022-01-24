import React from 'react'

const Newsec = ({ tasks }) => {
    return (
        <div className="card">
            <div class="card-header">
                New tasks
            </div>
            {tasks}
        </div>
        //insert new tasks here, get info from the add panel
    )
}

export default Newsec;