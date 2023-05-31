import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  List,
  Button,
  Stack,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import BaseCard from "../../baseCard/BaseCard";
import NestedList from "./List";
import BasicPopover from "./BasicPopOver";
import Image from "next/image";
import NextLink from "next/link";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Dialog2 from "../../common/DeleteDialog";

const baseUrl = "http://localhost:5000";


const ProductsTable = ({products}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseAgree = () => {
    console.log("send delete request");
    setOpen(false);
  };
  const handleCloseDisAgree = () => {
    console.log("user disagreed to delete the product");
    setOpen(false);
  };

  return (
    <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        // whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              No.
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Image
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Description
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Price
            </Typography>
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product, i) => (
          <TableRow key={product._id}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {i + 1}
              </Typography>
            </TableCell>
            <TableCell>
              <Image
                // src='/public/static/images/logos/logo-dark.svg'
                // loader={(src) => src}
                // src={`${baseUrl}/${cat.images[0]}`}
                src={`${baseUrl}/viennese-grey-linen-suit-multi.webp`}
                width="100"
                height="130"
                // layout="fill"
              />
            </TableCell>
            <TableCell>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    fontSize={12}
                    //   sx={{
                    //     fontSize: "13px",
                    //   }}
                  >
                    {product.shortDesc}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <BasicPopover desc={product.description} />
            </TableCell>
            <TableCell>
              <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                  backgroundColor: product.pbg,
                  color: "#aaa",
                }}
                size="small"
                label={product.price}
              ></Chip>
            </TableCell>
            <TableCell sx={{ width: 200, padding: 0 }}>
              {/* <Box > */}
              <Stack
                spacing={{ xs: 0, sm: 1 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
              >
                <NextLink href="/products/edit-product">
                  <Button variant="outlined">
                    <EditIcon />
                  </Button>
                </NextLink>
                <Dialog2 id={product._id} />
                {/* <Button variant="outlined" onClick={handleClickOpen}>
                  <DeleteIcon />
                </Button> */}
                <NextLink href="/products/view">
                  <Button variant="outlined">
                    <VisibilityIcon />
                  </Button>
                </NextLink>
              </Stack>
              {/* </Box> */}
            </TableCell>



            {/* <Dialog2 handleClickOpen={handleClickOpen} /> */}
            <Dialog
              open={open}
              onClose={handleCloseDisAgree}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Let Google help apps determine location. This means sending
                  anonymous location data to Google, even when no apps are
                  running.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDisAgree}>Disagree</Button>
                <Button onClick={handleCloseAgree} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
