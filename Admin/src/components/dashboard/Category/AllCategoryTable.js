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
} from "@mui/material";
import BaseCard from "../../baseCard/BaseCard";
import NestedList from "../Products/List";
import BasicPopover from "../Products/BasicPopOver";
import Image from "next/image";
import NextLink from "next/link";
import img from "./../../../../public/static/images/big/img5.jpg";

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

// const products = [
//   {
//     id: "1",
//     name: "Sunil Joshi",
//     post: "Web Designer",
//     pname: "Elite Admin",
//     priority: "Low",
//     pbg: "primary.main",
//     budget: "3.9",
//   },
//   {
//     id: "2",
//     name: "Andrew McDownland",
//     post: "Project Manager",
//     pname: "Real Homes WP Theme",
//     priority: "Medium",
//     pbg: "secondary.main",
//     budget: "24.5",
//   },
//   {
//     id: "3",
//     name: "Christopher Jamil",
//     post: "Project Manager",
//     pname: "MedicalPro WP Theme",
//     priority: "High",
//     pbg: "error.main",
//     budget: "12.8",
//   },
//   {
//     id: "4",
//     name: "Nirav Joshi",
//     post: "Frontend Engineer",
//     pname: "Hosting Press HTML",
//     priority: "Critical",
//     pbg: "success.main",
//     budget: "2.4",
//   },
// ];

const products = [
  {
    _id: "6454836fcdc405373b26ccf5",
    name: "black suit",
    shortDesc: "Product 1",
    description:
      "dfghjds fgdsjf dj hfkjdhkjad fadf asf adsf dasf das f asf a  ",
    price: 56789,
    color: ["red", "brown", "orange"],
    fabric: ["cotton", "silk"],
    occasion: ["Wedding", "casual"],
    categories: [
      {
        name: "Tuxedo",
      },
    ],
    customs: [
      {
        custom: {
          _id: "64537b6383f7b06e40d2024b",
          name: "lapels",
          variants: [
            {
              title: "patch",
              imgSrc: "/public/images/custom/patch.jpg",
              _id: "64537b6383f7b06e40d2024c",
            },
            {
              title: "patch-with-flap",
              imgSrc: "/public/images/custom/patch-with-flap.jpg",
              _id: "64537b6383f7b06e40d2024d",
            },
            {
              title: "slant-flap",
              imgSrc: "/public/images/custom/slant-flap.jpg",
              _id: "64537b6383f7b06e40d2024e",
            },
            {
              title: "straight-flap",
              imgSrc: "/public/images/custom/straight-flap.jpg",
              _id: "64537b6383f7b06e40d2024f",
            },
            {
              title: "straight-no-flap",
              imgSrc: "/public/images/custom/straight-no-flap.jpg",
              _id: "64537b6383f7b06e40d20250",
            },
          ],
          createdAt: "2023-05-04T09:31:15.463Z",
          updatedAt: "2023-05-04T09:31:15.463Z",
          __v: 0,
        },
        pattern: "0 1 0 1 0 0",
        _id: "6454836fcdc405373b26ccf6",
      },
    ],
    createdAt: "2023-05-05T04:17:51.974Z",
    updatedAt: "2023-05-05T04:17:51.974Z",
    __v: 0,
  },
  {
    _id: "6454836fcdc405373b26ccf5",
    name: "black suit",
    shortDesc: "Product 2",
    description: "dfghjds fgdsjf dj hfkjdhkjad",
    price: 56789,
    color: ["red", "brown", "orange"],
    fabric: ["cotton", "silk"],
    occasion: ["Wedding", "casual"],
    categories: [
      {
        name: "Tuxedo",
      },
    ],
    customs: [
      {
        custom: {
          _id: "64537b6383f7b06e40d2024b",
          name: "lapels",
          variants: [
            {
              title: "patch",
              imgSrc: "/public/images/custom/patch.jpg",
              _id: "64537b6383f7b06e40d2024c",
            },
            {
              title: "patch-with-flap",
              imgSrc: "/public/images/custom/patch-with-flap.jpg",
              _id: "64537b6383f7b06e40d2024d",
            },
            {
              title: "slant-flap",
              imgSrc: "/public/images/custom/slant-flap.jpg",
              _id: "64537b6383f7b06e40d2024e",
            },
            {
              title: "straight-flap",
              imgSrc: "/public/images/custom/straight-flap.jpg",
              _id: "64537b6383f7b06e40d2024f",
            },
            {
              title: "straight-no-flap",
              imgSrc: "/public/images/custom/straight-no-flap.jpg",
              _id: "64537b6383f7b06e40d20250",
            },
          ],
          createdAt: "2023-05-04T09:31:15.463Z",
          updatedAt: "2023-05-04T09:31:15.463Z",
          __v: 0,
        },
        pattern: "0 1 0 1 0 0",
        _id: "6454836fcdc405373b26ccf6",
      },
    ],
    createdAt: "2023-05-05T04:17:51.974Z",
    updatedAt: "2023-05-05T04:17:51.974Z",
    __v: 0,
  },
];

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
                <NextLink href={`/category/products/${cat._id}`}>
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
            <TableCell>
              <NextLink href={`/category/edit/${cat._id}`}>
                <Button variant="outlined">
                  <EditIcon />
                </Button>
              </NextLink>
              <DeleteDialog id={cat._id} />
              <NextLink href={`/category/${cat._id}`}>  
                <Button variant="outlined">
                  <InfoIcon />
                </Button>
              </NextLink>
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
