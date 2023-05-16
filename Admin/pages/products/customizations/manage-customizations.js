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
import customizationServices from "../../../src/services/customization";

import BaseCard from "../../../src/components/baseCard/BaseCard";
const attributes = ["color", "fabric"];

const ManageCustomizations = () => {
  // stores all attribute after rendering component
  const [customs, setCustoms] = useState([]);
  // store title
  const [title, setTitle] = useState(null);
  // store attributeSelected
  const [custom, setCustom] = useState(null);

  // image preview related
  const [selectedImage, setSelectedImage] = useState();


  // const [imageUrl, setImageUrl] = useState();

  // useEffect(() => {
  //   if (selectedImage) {
  //     setImageUrl(URL.createObjectURL(selectedImage));
  //   }
  // }, [selectedImage]);
  useEffect(async () => {
    const data = await customizationServices.getAllCustomizations();
    setCustoms(data);
    console.log(data);
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(custom, title);
    console.log(selectedImage);

      const data = new FormData();
      await data.append("title", title);
      await data.append("images", selectedImage);
      const customObj = customs.find(cus => cus.name === custom)
      // need to patch title and image for customizations
      const res = await customizationServices.updateCustomization(customObj._id, data);
      console.log(data);
      console.log(res);
   
  };

  return (
    <BaseCard title="Add New Customization">
      <form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <Stack
            gap={1}
            direction="row"
            alignItems={"center"}
            fontWeight={600}
            sx={{
              "& .MuiTextField-root": { width: "22ch" },
              "& .MuiTypography-root": {
                fontWeight: 400,
                width: "45%",
                fontSize: 20,
              },

              //   border: 'none'
            }}
          >
            <Typography>Please select an Customization Type</Typography>
            <Stack direction="col" justifyItems={"center"} gap={1}>
              <TextField
                id="outlined-select-attribute"
                size="small"
                select
                // value={attribute}
                label="Select any one"
                defaultValue=""
                required
                onChange={(e) => setCustom(e.target.value)}
                //   helperText="Please select your currency"
              >
                {customs.map((cus) => (
                  <MenuItem
                    key={cus._id}
                    value={`${cus.name}`}
                  >
                    {cus.name}
                  </MenuItem>
                ))}
              </TextField>
              <NextLink href={"/products/customizations/add-new-customization"}>
                <Button variant="contained">
                  <AddCircleOutlineIcon />
                </Button>
              </NextLink>
            </Stack>
          </Stack>

          {
            <Stack
              gap={1}
              direction="column"
              // alignItems={"center"}
              fontWeight={600}
              sx={{
                "& .MuiTextField-root": { width: "45%" },
                "& .MuiTypography-root": { fontWeight: 700, fontSize: 20 },

                //   border: 'none'
              }}
            >
              <Box>
                <Typography fontWeight="700">Add Image :</Typography>
              </Box>
              <Stack direction="row" justifyItems={"center"} gap={1}>
                <TextField
                  label="Enter title for image"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></TextField>
                <Button
                  sx={{ width: "max-content", backgroundColor: "blue" }}
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
            <Box mt={2} textAlign="center">
              <div>Image Preview:</div>
              <img src={imageUrl} alt={selectedImage.name} height="100px" />
            </Box>
          )}  */}
              </Stack>
            </Stack>
          }

          {/* if one choose attribute of type custom */}
          {/* need to fetch all the available customs and let them select 
          if no custom available let them only then title */}
        </Stack>

        <Stack direction={"row"} my={8} gap={4}>
          <Button type="submit" variant={"contained"} size={"large"} width={8}>
            Submit
          </Button>
          <Button variant={"outlined"} size={"medium"}>
            Reset
          </Button>
        </Stack>
      </form>
    </BaseCard>
  );
};

export default ManageCustomizations;
