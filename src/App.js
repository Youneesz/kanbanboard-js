import React from 'react';
import './App.css';
import { Navbar, Cancelled, Newsec, Ongoing, Finished, Addingpanel, Task, Memberlist, Member } from './Components';
import { ToastContainer } from 'react-toastify';
import { fieldErrorNotification, dateLogicError, taskSuccess } from './Notifications/Notifications';
import logo from './Components/Navbar/logo.jpg'

function App() {

  const [add, setadd] = React.useState(false);

  const [tasks, settasks] = React.useState([]);

  const [ongoingtasks, setongoing] = React.useState([]);

  const [showlist, setshowlist] = React.useState(false);

  function addtask() {
    setadd(!add);
  }

  function apply() {
    const name = document.getElementById('taskname').value;
    const owner = document.getElementById('taskowner').value;
    const desc = document.getElementById('taskdesc').value;
    const start = document.getElementById('taskstart').value;
    const finish = document.getElementById('taskfinish').value;
    if (name !== '' && owner !== '' && start !== '' && finish !== '') {
      const startdate = new Date(start);
      const finishdate = new Date(finish);
      if (startdate.getTime() < finishdate.getTime()) {
        console.log(`name:${name} owner:${owner} desc:${desc} start:${start} finish:${finish}`);
        settasks(tasks.concat(<Task id={tasks.length} name={name} owner={owner} desc={desc} start={start} finish={finish} />));
        addtask();
        taskSuccess();
      }
      else {
        dateLogicError();
      }
    }
    else {
      fieldErrorNotification();
    }
  }

  //make member list useState

  return (
    <div className="App">
      <Navbar addtask={addtask} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {add ? <Addingpanel apply={apply} /> : (<div className="row m-2 p-2">
        <div className="col-sm">
          <Newsec tasks={tasks} />
        </div>
        <div className="col-sm">
          <Ongoing />
        </div>
        <div className="col-sm">
          <Finished />
        </div>
        <div className="col-sm">
          <Cancelled />
        </div>
      </div>)}
    </div>
  );
}

export default App;