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
import { useQueryClient } from "@tanstack/react-query";


const Dialog2 = ({id, action, query, customId}) => {
    const queryClient = useQueryClient()
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleAgree = async () => {
    console.log("send delete request");
    if(!customId){
        const isOk = await action(id);
    } else {
        const isOk = await action(customId, id);
    }
    queryClient.invalidateQueries([`${query}`])
    setIsOpen(false);
  };
  const handleDisAgree = () => {
    console.log(customId)
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
