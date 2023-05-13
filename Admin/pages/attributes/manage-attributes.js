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
import attributeServices from "../../src/services/attribute";

import BaseCard from "../../src/components/baseCard/BaseCard";
const attributes = ["color", "fabric"];

const ManageAttributes = () => {
  // stores all attribute after rendering component
  const [attributes, setAttributes] = useState([]);
  // input type to know which type of input box should be shown
  const [inputType, setInputType] = useState("input");
  // store title
  const [title, setTitle] = useState(null);
  // store attributeSelecte
  const [attribute, setAttribute] = useState(null)

  // image preview related
  // const [selectedImage, setSelectedImage] = useState();
  // const [imageUrl, setImageUrl] = useState();

  // useEffect(() => {
  //   if (selectedImage) {
  //     setImageUrl(URL.createObjectURL(selectedImage));
  //   }
  // }, [selectedImage]);
  useEffect(async () => {
    const attributes = await attributeServices.getAllAttributes();
    setAttributes(attributes);
    console.log(attributes);
  }, []);

  const handleInput = (e) => {
    const value = e.target.value.split(",")[0];
    const hasImages = e.target.value.split(",")[1];
    setAttribute(value);
    console.log(typeof hasImages);
    if (hasImages === "true") {
      setInputType("images");
    } else {
      setInputType("input");
    }
    console.log(value, hasImages);
  };

  const handleSubmit = async () => {
    console.log(attribute, title);

  }

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
              // value={attribute}
              label="Select any one"
              defaultValue=""
              required
              onChange={handleInput}
              //   helperText="Please select your currency"
            >
              {attributes.map((att) => (
                <MenuItem key={att._id} value={`${att.name},${att.hasImages}`}>
                  {att.name}
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

        {inputType === "input" ? (
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
                id="attribute-value"
                size="small"
                label="Enter value to add"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                //   defaultValue="select any one"
                required
                //   helperText="Please select your currency"
              />
            </Stack>
          </Stack>
        ) : (
          <Stack
            gap={1}
            direction="column"
            // alignItems={"center"}
            fontWeight={600}
            sx={{
              "& .MuiTextField-root": { width: "25ch" },
              "& .MuiTypography-root": { fontWeight: 400, fontSize: 20 },

              //   border: 'none'
            }}
          >
            <Stack><Typography variant="h4" fontWeight={"600"}>Value</Typography></Stack>
            <Box sx={{ width: 400 }}>
              <Typography>Add Image</Typography>
            </Box>
            <Stack direction="row" justifyItems={"center"} gap={1}>
              <TextField label="Enter title for image">
              </TextField>
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
        )}

        {/* if one choose attribute of type custom */}
        {/* need to fetch all the available customs and let them select 
        if no custom available let them only then title */}
      </Stack>

      <Stack direction={"row"} my={8} gap={4}>
        <Button type="submit" onClick={handleSubmit} variant={"contained"} size={"large"} width={8}>
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
