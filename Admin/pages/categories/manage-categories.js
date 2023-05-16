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

import { useForm } from "react-hook-form";

import BaseCard from "../../src/components/baseCard/BaseCard";
import categoryServices from "../../src/services/category";
const attributes = ["color", "fabric"];

export async function getServerSideProps(context) {
  const categories = await categoryServices.getCategories();
  return {
    props: {
      categories
    }
  }
}

const Add = ({categories}) => {
  console.log(categories)
  console.log( categories.map(cat => cat.name))

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  // image preview related
  // const [selectedImage, setSelectedImage] = useState();
  // const [imageUrl, setImageUrl] = useState();

  // useEffect(() => {
  //   if (selectedImage) {
  //     setImageUrl(URL.createObjectURL(selectedImage));
  //   }
  // }, [selectedImage]);
  const submitForm = (data) => {
    console.log(data);
  }

  return (
    <BaseCard title="Add New Category">
      <form onSubmit={handleSubmit(submitForm)}>
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
              <Typography>Please select a category</Typography>
            </Box>
            <Stack direction="col" justifyItems={"center"} gap={1}>
              <TextField
                {...register("selected-category", { required: true })}
                id="outlined-select-attribute"
                size="small"
                select
                label="Select any one"
                //   defaultValue="select any one"
                required
                defaultValue={null}
                //   helperText="Please select your currency"
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat.name}>
                    {cat.name}
                  </MenuItem>
                ))}
              </TextField>
              <NextLink href={"/categories/add-new"}>
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
              <Typography>Sub-Category Name</Typography>
            </Box>
            <Stack justifyItems={"center"} gap={1}>
              <TextField
              {...register('sub-category-image')}
                // id="sub-cattegory-name"
                size="small"
                label="Type sub-category name"
                //   defaultValue="select any one"
                required
                //   helperText="Please select your currency"
              />
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
                  {...register("primary-image")}
                  hidden
                  accept="image/*"
                  type="file"
                  // onChange={(e) => setSelectedImage(e.target.files[0])}
                />
              </Button>

              {/* // image preview/ */}
              {/* {imageUrl && selectedImage && (
              //   <Box mt={2} textAlign="center">
            //     <div>Image Preview:</div>
            //     <img src={imageUrl} alt={selectedImage.name} height="100px" />
            //   </Box>
            // )} */}
            </Stack>
          </Stack>
        </Stack>

        <Stack direction={"row"} my={8} gap={4}>
          <Button variant={"contained"} size={"large"} width={8} type="submit">
            Submit
          </Button>
          <Button variant={"outlined"} size={"medium"} type="reset">
            Reset
          </Button>
        </Stack>
      </form>
    </BaseCard>
  );
};

export default Add;
