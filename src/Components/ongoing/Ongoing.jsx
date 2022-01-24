import React from 'react'

const Ongoing = ({ tasks }) => {
    return (
        <div className="card">
            <div class="card-header">
                Ongoing tasks
            </div>
            {tasks}
        </div>
        //insert new tasks here, get info from the add panel
    )
}

export default Ongoing;