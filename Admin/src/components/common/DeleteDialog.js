import React from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Dialog2 = ({id, serviceName}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleAgree = async () => {
    console.log("send delete request");
    await
    setIsOpen(false);
  };
  const handleDisAgree = () => {
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
        onClose={handleDisAgree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are your sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* {id} */}
            <Typography>Deleted data can not be recovered in any case.</Typography>
            {"\t"}
            <Typography>Think Twice!!</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisAgree}>Disagree</Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Dialog2;
