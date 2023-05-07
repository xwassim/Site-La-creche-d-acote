import React, {useState} from 'react';

import {useNotification} from "./NotificationProvider";
import Notification from './Notification';

function MesNotifs() {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useNotification();

  const handleNewNotification = () => {
    dispatch({
      type: "ERROR",
      message: inputVal,
      title: "Successful Request"
    })
  }

  return (
    <div className="App">
      <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
      <button onClick={handleNewNotification}>Add Notification</button>
    </div>
  );
}

export default MesNotifs;