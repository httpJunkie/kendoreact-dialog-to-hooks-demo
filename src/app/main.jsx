import React from 'react';
import ReactDOM from 'react-dom';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';

class DialogWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.toggleDialog = this.toggleDialog.bind(this);
  }

  toggleDialog() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div>
        <Button className="k-button" onClick={this.toggleDialog}>Open Dialog</Button>
        {this.state.visible && <Dialog title={"Please confirm"} onClose={this.toggleDialog}>
          <p style={{ margin: "25px", textAlign: "center" }}>Are you sure you want to continue?</p>
          <DialogActionsBar>
            <Button className="k-button" onClick={this.toggleDialog}>No</Button>
            <Button className="k-button" onClick={this.toggleDialog}>Yes</Button>
          </DialogActionsBar>
        </Dialog>}
      </div>
    );
  }
}

ReactDOM.render(<DialogWrapper />,document.querySelector('my-app'));

