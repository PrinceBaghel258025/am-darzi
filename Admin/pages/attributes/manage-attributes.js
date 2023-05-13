import {
  Autocomplete,
  FormControl,
  FormControlLabel,
  Stack,
  TextField,
  MenuItem,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  tableCellClasses,
  Divider,
  Button,
  Box,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NextLink from "next/link";
import { useState, useEffect } from "react";

import BaseCard from "../../src/components/baseCard/BaseCard";
const attributes = ["color", "fabric"];

const ManageAttributes = () => {
  // image preview related
  // const [selectedImage, setSelectedImage] = useState();
  // const [imageUrl, setImageUrl] = useState();

  // useEffect(() => {
  //   if (selectedImage) {
  //     setImageUrl(URL.createObjectURL(selectedImage));
  //   }
  // }, [selectedImage]);

  return (
    <BaseCard title="Add New Attribute">
      <Stack gap={2}>
        <Stack
          gap={20}
          direction="row"
          alignItems={"center"}
          fontWeight={600}
          sx={{
            "& .MuiTextField-root": { width: "25ch" },
            "& .MuiTypography-root": { fontWeight: 600, fontSize: 20 },

            //   border: 'none'
          }}
        >
          <Box sx={{ width: 400 }}>
            <Typography>Please select an Attribute</Typography>
          </Box>
          <Stack direction="col" justifyItems={"center"} gap={1}>
            <TextField
              id="outlined-select-attribute"
              size="small"
              select
              label="Select any one"
              //   defaultValue="select any one"
              required
              //   helperText="Please select your currency"
            >
              {attributes.map((att) => (
                <MenuItem key={att} value={att}>
                  {att}
                </MenuItem>
              ))}
            </TextField>
            <NextLink href={"/attributes/add-new-attribute"}>
              <Button variant="contained">
                <AddCircleOutlineIcon />
              </Button>
            </NextLink>
          </Stack>
        </Stack>

        <Stack
          gap={20}
          direction="row"
          alignItems={"center"}
          fontWeight={600}
          sx={{
            "& .MuiTextField-root": { width: "25ch" },
            "& .MuiTypography-root": { fontWeight: 400, fontSize: 20 },

            //   border: 'none'
          }}
        >
          <Box sx={{ width: 400 }}>
            <Typography>New value for attribute</Typography>
          </Box>
          <Stack justifyItems={"center"} gap={1}>
            <TextField
              id="sub-cattegory-name"
              size="small"
              label="Type sub-category name"
              //   defaultValue="select any one"
              required
              //   helperText="Please select your currency"
            />
          </Stack>
        </Stack>

        {/* if one choose attribute of type custom */}
        {/* <Stack
          gap={20}
          direction="row"
          alignItems={"center"}
          fontWeight={600}
          sx={{
            "& .MuiTextField-root": { width: "25ch" },
            "& .MuiTypography-root": { fontWeight: 400, fontSize: 20 },

            //   border: 'none'
          }}
        >
          <Box sx={{ width: 400 }}>
            <Typography>Add Sub-Category Image</Typography>
          </Box>
          <Stack direction="row" justifyItems={"center"} gap={1}>
            <Button
              sx={{ width: "25ch", backgroundColor: "blue" }}
              variant="contained"
              size="large"
              component="label"
            >
              Upload Primary Image
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />
            </Button>

            {/* // image preview/ 
             {imageUrl && selectedImage && (
            //   <Box mt={2} textAlign="center">
            //     <div>Image Preview:</div>
            //     <img src={imageUrl} alt={selectedImage.name} height="100px" />
            //   </Box>
            // )} 
          </Stack>
        </Stack> 
        */}
      </Stack>

      <Stack direction={"row"} my={8} gap={4}>
        <Button variant={"contained"} size={"large"} width={8}>
          Submit
        </Button>
        <Button variant={"outlined"} size={"medium"}>
          Reset
        </Button>
      </Stack>
    </BaseCard>
  );
};

export default ManageAttributes;
