import React from "react";
import { Button, Dialog, DialogActions, DialogTitle, DialogContentText, DialogContent } from "@material-ui/core";
export default class ConfirmDialog extends React.Component {
    render() {
        return (
            <Dialog
                open={true}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{this.props.dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {this.props.dialogMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={() => this.props.handleCancel()}>
                        Cancel
                    </Button>
                    <Button color="primary" autoFocus onClick={() => this.props.handleConfirm()}>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}