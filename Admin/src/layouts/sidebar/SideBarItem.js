import React from "react";
import NextLink from "next/link";
import PropTypes, { object } from "prop-types";
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  Link,
  Button,
  Typography,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import LogoIcon from "../logo/LogoIcon";
import Menuitems from "./MenuItems";
import Buynow from "./Buynow";
import { useRouter } from "next/router";
import NestedList from "../../components/dashboard/Products/List";

const SideBarItem = ({ item, isActive, setActive, index, href }) => {
  const [open, setOpen] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const handleClick = (index) => {
    if (open === index) {
      setOpen((prevopen) => !prevopen);
    } else {
      setOpen(index);
    }
  };
  let curl = useRouter();
  const location = curl.pathname;

  const handleExpand = () => {
    if (!item.subMenuItems) {
      return;
    } else {
      setExpanded((prev) => !prev);
    }
  };

  return (
    <>
    <NextLink href={href}>

      <Box height="100%" backgroundColor={isActive ? 'pink' : ''} onClick={() => setActive(index)} >
        <List component="li" disablePadding key={item.title} onClick={handleExpand}>
          {/* <NextLink href={item.href}> */}
          <ListItem
            // onClick={() => handleClick(index)}
            button
            selected={location === item.href}
            sx={{
              mb: 1,
              ...(location === item.href && {
                color: "white",
                backgroundColor: (theme) =>
                  `${theme.palette.primary.main}!important`,
              }),
            }}
          >
            <ListItemIcon>
              <FeatherIcon
                style={{
                  color: `${location === item.href ? "white" : ""} `,
                }}
                icon={item.icon}
                width="20"
                height="20"
              />
            </ListItemIcon>

            <ListItemText>{item.title}</ListItemText>
            {item.subMenuItems ? expanded ? ">" : "<" : ""}

          </ListItem>
          {/* </NextLink> */}
        </List>
        {expanded && (
              <NestedList data={item.subMenuItems} open={expanded} />
            )}
      </Box>
    </NextLink>
    </>
  );
};

SideBarItem.propTypes = {
  item: PropTypes.object,
};

export default SideBarItem;
