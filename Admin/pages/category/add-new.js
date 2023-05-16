import React from "react";
import {
  Stack,
  TextField,
  Box,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import BaseCard from "../../src/components/baseCard/BaseCard";
import NextLink from "next/link";
import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import {useForm} from 'react-hook-form'
import categoryServices from "../../src/services/category";

const attributes = ["color", "fabric"];

const AddNewCategory = () => {

  const [fields, setFields] = useState([
    { title: "Sub Category Name 1", key: 557687687 },
  ]);

  const {register, handleSubmit, reset}  = useForm();

  const addMore = () => {
    const key = uuid4();
    setFields((prev) => {
      const newField = {
        title: "Sub Category Name ",
        key,
      };
      console.log("add More", [...prev, newField]);
      return [...prev, newField];
    });
  };

  const handleRemove = (field, key) => {
    console.log("key", key);
    setFields((prev) => {
      const updatedFields = prev.filter((el) => (el.key !== key ? el : null));
      console.log(updatedFields);
      return updatedFields;
    });
  };

  const onSubmit = async (data) => {
    console.log(data)
    const category = await categoryServices.addCategory(data);
    console.log(category)
  }

  return (
    <BaseCard title="Add New Category">
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <Typography>Category Name</Typography>
          </Box>
          <Stack direction="col" justifyItems={"center"} gap={1}>
            <TextField
              {...register("categoryName")}
              id="outlined-select-attribute"
              size="small"
              // select
              label="Enter Category Name"
              //   defaultValue="select any one"
              required
              //   helperText="Please select your currency"
            >
              {/* {attributes.map((att) => (
                <MenuItem key={att} value={att}>
                  {att}
                </MenuItem>
              ))} */}
            </TextField>
            {/* <NextLink href={"/category/add-new"}>
              <Button variant="contained">
                <AddCircleOutlineIcon />
              </Button>
            </NextLink> */}
          </Stack>
        </Stack>

        {fields.map((field, index) => {
          const key = uuid4();

          return (
            <Stack
              key={key}
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
                <Typography>{field.title}</Typography>
              </Box>
              <Stack justifyItems={"center"} gap={1} direction="col">
                <TextField
                  id="sub-cattegory-name"
                  size="small"
                  label="Type sub-category name"
                  {...register("subCatName")}
                  //   defaultValue="select any one"
                  required
                  //   helperText="Please select your currency"
                />
                {/* <Button
                  variant="contained"
                  onClick={() => handleRemove(field, field.key)}
                >
                  <CancelIcon />
                </Button> */}
              </Stack>
            </Stack>
          );
        })}
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
            <Typography>Sub-Category Name</Typography>
          </Box>
          <Stack justifyItems={"center"} gap={1} direction="col">
            <TextField
              id="sub-cattegory-name"
              size="small"
              label="Type sub-category name"
              //   defaultValue="select any one"
              required
              //   helperText="Please select your currency"
            />
            <Button variant="contained">
              <CancelIcon />
            </Button>
          </Stack>
        </Stack> */}
      </Stack>

      {/* <Box mt={4}>
        <Button variant="contained" onClick={addMore}>
          <AddIcon />
          <Typography>Add More</Typography>
        </Button>
      </Box> */}

      <Stack direction={"row"} my={8} gap={4}>
        <Button type={"submit"} variant={"contained"} size={"large"} width={8}>
          Submit
        </Button>
        <Button type={"reset"} variant={"outlined"} size={"medium"}>
          Reset
        </Button>
      </Stack>
      </form>
    </BaseCard>
  );
};

export default AddNewCategory;
