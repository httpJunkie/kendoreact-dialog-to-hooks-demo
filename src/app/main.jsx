import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';

const DialogWrapper = () => {;
  const [visible, setVisible] = useState(true);
  const toggleVisible = () => setVisible(!visible);

  return (
    <div>
      <Button className="k-button" onClick={toggleVisible}>Open Dialog</Button>
      {visible && <Dialog title={"Please confirm"} onClose={toggleVisible}>
        <p style={{ margin: "25px", textAlign: "center" }}>Are you sure you want to continue?</p>
        <DialogActionsBar>
          <Button className="k-button" onClick={toggleVisible}>No</Button>
          <Button className="k-button" onClick={toggleVisible}>Yes</Button>
        </DialogActionsBar>
      </Dialog>}
    </div>
  );
}

ReactDOM.render(<DialogWrapper />,document.querySelector('my-app'));