import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

import NextLink from "next/link";
import ListItem from "./ListItem";

export default function NestedList({ open, data, onClose }) {
  // const [isActive , setIsActive] = React.useState()
  //   const [open, setOpen] = React.useState(false);
  //   console.log(props.data);

  //   const handleClick = () => {
  //     setOpen(!open);
  //   };

  return (
    // <Collapse in={open} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
      {data.map((el, i) => (
        <ListItem onClose={onClose} key={i} element={el} />
        // <NextLink href={el.href} key={el} >
        //   <ListItemButton sx={{ pl: 2, backgroundColor: isActive? 'orange': '' }}  onClick={() => setIsActive(i)} >
        //     <ListItemIcon>
        //       <StarBorder />
        //     </ListItemIcon>
        //     <ListItemText primary={el.title} />
        //   </ListItemButton>
        // </NextLink>
      ))}
    </List>
    // </Collapse>
  );
  {
    /* <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton> */
  }
  {
    /* <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton> */
  }
}
