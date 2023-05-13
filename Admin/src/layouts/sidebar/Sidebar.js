import React from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";
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

import SidebarItem from "./SideBarItem";

const Sidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }) => {
  const [open, setOpen] = React.useState(true);
  const [isActive, setIsActive] = React.useState(0);

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

  const SidebarContent = (
    <Box p={2} height="100%">
      <LogoIcon />
      <Box mt={2}>
        <List>
          {Menuitems.map((item, index) => {
            // if (item.href) {
              return (
                // <NextLink href={item.href}>
                  <SidebarItem
                  href={item.href}
                    item={item}
                    key={index}
                    isActive={isActive === index ? true : false}
                    setActive={setIsActive}
                    index={index}
                  />
                // </NextLink>
              );
            // } else {
            //   return (
            //     <SidebarItem
            //       item={item}
            //       key={index}
            //       isActive={isActive === index ? true : false}
            //       setActive={setIsActive}
            //       index={index}
            //     />
            //   );
            // }
            // console.log(item);
            // return (
            //   <NextLink href={item.href ? item.href : ""}>
            //     <SidebarItem
            //       item={item}
            //       key={index}
            //       isActive={isActive === index ? true : false}
            //       setActive={setIsActive}
            //       index={index}
            //     />
            //   </NextLink>
            // );
          })}
        </List>
      </Box>

      {/* <Buynow /> */}
    </Box>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: "265px",
            border: "0 !important",
            boxShadow: "0px 7px 30px 0px rgb(113 122 131 / 11%)",
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: "265px",
          border: "0 !important",
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
};

Sidebar.propTypes = {
  isMobileSidebarOpen: PropTypes.bool,
  onSidebarClose: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
};

export default Sidebar;
