import React from 'react'
import './Addingpanel.css'

const Addingpanel = ({ apply }) => {
    return (
        <div className='card mt-2 ms-3' id='addingpanel'>
            <div className='card-header'>
                Add your task:
            </div>
            <form>
                <div className='row mt-3 m-3'>
                    <label htmlFor="taskname" className='col-sm-2 col-form-label'>Task name</label>
                    <div className='col-sm-10'>
                        <input type="text" className='form-control' id='taskname' placeholder="Please enter your task's name (Required) *" />
                    </div>
                </div>
                <div className='row mt-3 m-3'>
                    <label htmlFor="taskowner" className='col-sm-2 col-form-label'>Owner</label>
                    <div className='col-sm-10'>
                        <input type="text" className='form-control' id='taskowner' placeholder="Please enter the owner of this task (Required) *"/>
                    </div>
                </div>
                <div className='row mt-3 m-3'>
                    <label htmlFor="taskdesc" className='col-sm-2 col-form-label'>Description</label>
                    <div className='col-sm-10'>
                        <input type="text" className='form-control' id='taskdesc' placeholder="Please enter a description of the task (not required)"/>
                    </div>
                </div>
                <div className='row mt-3 m-3'>
                    <label htmlFor="taskstart" className='col-sm-2 col-form-label'>Start date*</label>
                    <div className='col-sm-10'>
                        <input type="date" className='form-control' id='taskstart' />
                    </div>
                </div>
                <div className='row mt-3 m-3'>
                    <label htmlFor="taskfinish" className='col-sm-2 col-form-label'>Finish date*</label>
                    <div className='col-sm-10'>
                        <input type="date" className='form-control' id='taskfinish' />
                    </div>
                </div>
            </form>
            <div className='row mt-3 m-3 justify-content-center'>
                <button className='btn btn-secondary' onClick={apply} style={{ width: '100px' }}>Add</button>
            </div>
        </div>
    )
}

export default Addingpanel
