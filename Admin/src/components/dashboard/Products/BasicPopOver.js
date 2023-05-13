import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export default function BasicPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const button = props.desc ? "paper" : "button";

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div style={{maxWidth: '80%'}}>
      {props.desc ? (
        <Typography color="textSecondary" fontSize={13}  onClick={handleClick}>{`${props.desc.slice(0, 20)}....`}</Typography>
      ) : (
        <Button
          aria-describedby={id}
          variant={button === "button" ? "outlined" : "ghost"}
          // paddingLeft="0"
          size="medium"
          onClick={handleClick}
        >
          {props.desc ? `${props.desc.slice(0, 50)} + "...."` : "view"}
        </Button>
      )}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {props.data ? (
          props.data.map((el) => (
            <>
              <Typography
                fontSize={12}
                key={el}
                sx={{
                  pl: 1,
                  pr: 3,
                  py: 2,
                  backgroundColor: "#8da3c573",
                  color: "black",
                  "&:hover": { backgroundColor: "#9e9e9e" },
                }}
                color="textSecondary"
              >
                {el}
              </Typography>
              <Divider />
            </>
          ))
        ) : (
          // : `${props.desc}`}
          <Typography>{props.desc}</Typography>
        )}
      </Popover>
    </div>
  );
}
