import React from "react";

import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  Chip,
} from "@mui/material";

const BaseCard = (props) => {
  return (
    <Card>
      <Box p={2} display="flex" alignItems="center" justifyContent={'center'}>
        <Typography variant="h1" fontSize={34}>{props.title}</Typography>
      </Box>
      <CardContent overflow={"scroll"}>{props.children}</CardContent>
    </Card>
  );
};

export default BaseCard;
