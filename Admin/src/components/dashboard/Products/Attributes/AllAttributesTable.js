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
  Stack,
  Grid
} from "@mui/material";
import BasicPopover from "../../Products/BasicPopOver";
import Image from "next/image";
import img from "./../../../../../public/static/images/big/img5.jpg";
import NextLink from "next/link";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import DeleteDialog from "../../../common/DeleteDialog";

import attributeServices from "../../../../services/attribute";
import DetailsModal from '../../../common/DetailsModal';

const useStyles = (theme) => ({
  table: {
    minWidth: 650,
    "& .MuiTableCell-root": {
      border: "1px solid black",
    },
  },
});

const AllAttributeTable = ({ attributes }) => {
  const classes = useStyles();

  return (
    <Table
      className={useStyles.table}
      aria-label="simple table"
      sx={{
        mt: 3,
        '& .MuiTableCell-root': {
            padding: 1
        }
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
          {/* <TableCell>
              <Typography color="textSecondary" variant="h6">
                Image
              </Typography>
            </TableCell> */}
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Attribute
            </Typography>
          </TableCell>

          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Attribute value(s)
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
        {attributes.map((att, i) => (
          <TableRow key={att._id}>
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
            {/* <TableCell>
                <Image
                  // src='/public/static/images/logos/logo-dark.svg'
                  src={img}
                  width="100"
                  height="100"
                  // layout="fill"
                />
              </TableCell> */}
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
                    {att.name}
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
                <BasicPopover data={att.values.map((val) => val.title)} />
                {/* {product.categories.map((c) => c.name).join(" ")} */}
              </Typography>
            </TableCell>
            {/* <TableCell>
              <Typography color="textSecondary" variant="h6">
                <BasicPopover data={att.values.map((val) => val.title)} />
              </Typography>
            </TableCell> */}
            <TableCell align="right" width={'20%'}>
              <Stack gap={1} direction={'row'} flexWrap={"wrap"} > 
                <NextLink
                  href={{
                    pathname: `/attributes/edit/${att._id}`,
                    // query: `${att._id}`,
                  }}
                >
                  <Button variant="outlined">
                    <EditIcon />
                  </Button>
                </NextLink>
                <DeleteDialog
                  id={att._id}
                  action={attributeServices.deleteAttribute}
                  query="attributes"
                />
                {/* <NextLink
                  href={{
                    pathname: `/attributes/${att._id}`,
                    query: att,
                  }}
                >
                  <Button variant="outlined">
                    <InfoIcon />
                  </Button>
                </NextLink> */}
                  <DetailsModal data={att} name="Attribute">
                    <InfoIcon />
                  </DetailsModal>
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

export default AllAttributeTable;
