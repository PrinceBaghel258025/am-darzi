import React from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Dialog2 = ({id}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleCloseAgree = () => {
    console.log("send delete request");
    setIsOpen(false);
  };
  const handleCloseDisAgree = () => {
    console.log("user disagreed to delete the product");
    setIsOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        <DeleteIcon />
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleCloseDisAgree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {id}
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDisAgree}>Disagree</Button>
          <Button onClick={handleCloseAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Dialog2;
