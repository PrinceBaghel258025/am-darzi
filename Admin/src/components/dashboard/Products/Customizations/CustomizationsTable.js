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
  Button
} from "@mui/material";
import BasicPopover from "../../Products/BasicPopOver";
import Image from "next/image";
import img from "./../../../../../public/static/images/big/img5.jpg";
import Dialog2 from "../../../common/DeleteDialog";
import customizationServices from "../../../../services/customization";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';

const useStyles = (theme) => ({
  table: {
    minWidth: 650,
    "& .MuiTableCell-root": {
      border: "1px solid black",
    },
  },
});


const base_url = 'http://localhost:5000';

const CustomizationsTable = ({customs}) => {
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
                Name
              </Typography>
            </TableCell>

            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Variant name(s)
              </Typography>
            </TableCell>

            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Image
              </Typography>
            </TableCell>


            {/* <TableCell>
              <Typography color="textSecondary" variant="h6">
                SubCategories
              </Typography>
            </TableCell> */}
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {customs.map((cus, i) => (
            cus.variants.map(variant => 
                
            <TableRow key={variant._id}>
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
                      {cus.name}
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
                  {/* <BasicPopover data={att.values.map((val) => val.title)} /> */}
                  {/* {product.categories.map((c) => c.name).join(" ")} */}
                  {variant.title}
                </Typography>
              </TableCell>
              <TableCell>
                <Image
                unoptimized
                  src={`${base_url}/${variant.imgSrc}`}
                  width="100"
                  height="100"
                  // layout="fill"
                />
              </TableCell>
              {/* <TableCell>
                <Typography color="textSecondary" variant="h6">
                  <BasicPopover
                    data={att.values.map((val) => val.title)}
                  />
                  {/* {product.customs.map((c) => c.custom.name).join(" ")}
                </Typography>
              </TableCell> */}
              <TableCell>
                <Button variant="outlined"><EditIcon /></Button>
                <Dialog2 id={variant._id} action={customizationServices.removeCustomizationVariants} query={"customizations"} customId={cus._id}/>
                <Button variant="outlined"><InfoIcon /></Button>

              </TableCell>

              {/* <TableCell align="right">
                <Typography variant="h6">${product.budget}k</Typography>
              </TableCell> */}
            </TableRow>
            )
          ))}
        </TableBody>
      </Table>
  );
};

export default CustomizationsTable;
