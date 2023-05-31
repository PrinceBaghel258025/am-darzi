import React from "react";
import NextLink from "next/link";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder";

const ListItem = ({ element, onClose }) => {
  return (
    <div>
      <NextLink href={element.href} >
        <ListItemButton
          sx={{ pl: 2}}
          onClick={onClose}
        >
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary={element.title} />
        </ListItemButton>
      </NextLink>
    </div>
  );
};

export default ListItem;
