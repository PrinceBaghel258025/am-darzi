import React from "react";
import NextLink from "next/link";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder";

const ListItem = ({ element, isActive, setActive, index }) => {
  return (
    <div>
      <NextLink href={element.href} backgroundColor={isActive ? 'orange' : ''} onClick={() => {
        console.log('click happening')
        setActive(index)
      }}>
        <ListItemButton
          sx={{ pl: 2, backgroundColor: isActive ? "orange" : "" }}
        //   onClick={() => setActive(i)}
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
