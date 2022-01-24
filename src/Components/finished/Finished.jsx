import React from 'react'

const Finished = ({ tasks }) => {
    return (
        <div className="card">
            <div class="card-header">
                Finished tasks
            </div>
            {tasks}
        </div>
        //insert new tasks here, get info from the add panel
    )
}

export default Finished;
