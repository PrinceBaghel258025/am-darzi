// import makeStyles  from '@mui/styles'
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
  Stack
} from "@mui/material";
import BaseCard from "../../baseCard/BaseCard";
import NestedList from "../Products/List";
import BasicPopover from "../Products/BasicPopOver";
import Image from "next/image";
import NextLink from "next/link";
import img from "./../../../../public/static/images/big/img5.jpg";
import categoryServices from "../../../services/category";

import DeleteDialog from "../../common/DeleteDialog";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";

const useStyles = (theme) => ({
  table: {
    minWidth: 650,
    "& .MuiTableCell-root": {
      border: "1px solid black",
    },
  },
});

const baseUrl = "http://localhost:5000";

const AllCategoryTable = ({ categories }) => {
  // const [isOpen, setIsOpen] = React.useState(false)

  // const handleClickOpen = () => {
  //   setIsOpen(true)
  // }

  const classes = useStyles();

  return (
    <Table
      className={useStyles.table}
      aria-label="simple table"
      sx={{
        mt: 3,
        "& .MuiTableCell-root": {
          px: 1,
          py: 1,
        },
        "& .MuiTableRow-root": {
          padding: 1,
          // margin: 2
        },
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
              Products
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              SubCategories
            </Typography>
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {categories.map((cat, i) => (
          <TableRow key={cat._id}>
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
                src={`${baseUrl}/${cat.images[0]}`}
                width="100"
                height="100"
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
                      fontSize: 30,
                      fontWeight: "600",
                    }}
                  >
                    {cat.name}
                  </Typography>
                  {/* <Typography
                      color="textSecondary"
                      fontSize={12}
                      //   sx={{
                      //     fontSize: "13px",
                      //   }}
                    >
                      {product.shortDesc}
                    </Typography> */}
                </Box>
              </Box>
            </TableCell>

            <TableCell>
              <Typography color="textSecondary" variant="h6">
                <NextLink href={`/categories/products/${cat._id}`}>
                  <Button variant="outlined">view</Button>
                </NextLink>
                {/* {product.categories.map((c) => c.name).join(" ")} */}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                <BasicPopover
                  data={
                    cat.subCategories !== []
                      ? cat.subCategories.map((c) => c.name)
                      : ""
                  }
                />
                {/* {product.customs.map((c) => c.custom.name).join(" ")} */}
              </Typography>
            </TableCell>
            <TableCell align="right" width={'20%'}>
              <Stack flexWrap={'wrap'} direction="row" gap={1}>
                <NextLink href={`/categories/edit/${cat._id}`}>
                  <Button variant="outlined">
                    <EditIcon />
                  </Button>
                </NextLink>
                <DeleteDialog id={cat._id} action={categoryServices.deleteCategory} query={'categories'} />
                <NextLink href={`/categories/${cat._id}`}>
                  <Button variant="outlined">
                    <InfoIcon />
                  </Button>
                </NextLink>
              </Stack>
            </TableCell>

            {/* <TableCell align="right">
                <Typography variant="h6">${product.budget}k</Typography>
              </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllCategoryTable;
