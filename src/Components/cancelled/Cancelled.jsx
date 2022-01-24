import React from 'react'

const Cancelled = ({ tasks }) => {
    return (
        <div className="card">
            <div class="card-header">
                Cancelled tasks
            </div>
            {tasks}
        </div>
        //insert new tasks here, get info from the add panel
    )
}

export default Cancelled;
