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
import { useFieldArray, useForm } from "react-hook-form";
import categoryServices from "../../src/services/category";
import { toast } from "react-toastify";

const attributes = ["color", "fabric"];

const AddNewCategory = () => {
  //   const [fields, setFields] = useState([
  //     { title: "Sub-Category Name", key: 557687687 },
  //   ]);

  const { register, unregister, control, handleSubmit, reset } = useForm();

  const { append, fields, remove } = useFieldArray({
    control,
    name: "sub-cats",
    shouldUnregister: true,
  });

  const addMore = () => {
    append({ val: "New Sub-Category Name" });
    // const key = uuid4();

    // setFields((prev) => {
    //   const newField = {
    //     title: "Sub Category Name ",
    //     key,
    //   };
    //   console.log("add More", [...prev, newField]);
    //   return [...prev, newField];
    // });
  };

  const handleRemove = (field, key) => {
    console.log("key", key);
    unregister(`subCat-${key}`);
    setFields((prev) => {
      const updatedFields = prev.filter((el) => (el.key !== key ? el : null));
      console.log(updatedFields);
      return updatedFields;
    });
  };

  const onSubmit = async (data) => {
    console.log(data);
    // console.log(data['primary-image'][0])
    const formData = new FormData();

    // console.log(data['sub-cats'])
    // console.log(data['sub-cats'].map(el => el.img.length !== 0 ? el.img[0] : null))
    // formData.append('sub-cats', data['sub-cats'].map(el => el.img[0]))
    formData.append("categoryName", data.categoryName);
    formData.append("categoryImage", data.categoryImage[0]);
    formData.append("sub-cats", JSON.stringify(data["sub-cats"]));
    // formData.append('primaryimage', data['primary-image'][0])
    const res = await categoryServices.addCategory(formData);
    console.log(res);
    if (res.category === null) {
      console.log("got here");
      toast.error(`${res.message}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      reset();
    } else {
      console.log("got success in posting");
      toast.success(`${res.message}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      reset();
    }
  };

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
              "& .MuiTextField-root": { width: "95%" },
              "& .MuiTypography-root": { fontWeight: 600, fontSize: 20 },

              //   border: 'none'
            }}
          >
            <Box sx={{ width: "25%" }}>
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
              <Button
                sx={{ backgroundColor: "blue" }}
                variant="contained"
                size="small"
                component="label"
              >
                Image
                <input
                  required
                  {...register("categoryImage", { required: true })}
                  hidden
                  accept="image/*"
                  type="file"
                  // onChange={(e) => setSelectedImage(e.target.files[0])}
                />
              </Button>
              {/* <NextLink href={"/category/add-new"}>
              <Button variant="contained">
                <AddCircleOutlineIcon />
              </Button>
            </NextLink> */}
            </Stack>
          </Stack>

          {fields.map((field, index) => {
            return (
              <Stack
                key={field.id}
                gap={20}
                direction="row"
                alignItems={"center"}
                fontWeight={600}
                sx={{
                  "& .MuiTextField-root": { width: "95%" },
                  "& .MuiTypography-root": { fontWeight: 400, fontSize: 20 },

                  //   border: 'none'
                }}
              >
                <Box sx={{ width: "25%" }}>
                  <Typography>{index + 1}. Sub-Category Name</Typography>
                </Box>
                <Stack justifyItems={"center"} gap={1} direction="col">
                  <TextField
                    {...register(`sub-cats.${index}.val`)}
                    id="sub-cattegory-name"
                    size="small"
                    label="Type sub-category name"
                    // {...register("subCatName")}
                    //   defaultValue="select any one"
                    required
                    //   helperText="Please select your currency"
                  />
                  {/* <Button
                    sx={{ backgroundColor: "blue" }}
                    variant="contained"
                    size="small"
                    component="label"
                  >
                    Image
                    <input
                      {...register(`sub-cats.${index}.img`)}
                      hidden
                      accept="image/*"
                      type="file"
                      // onChange={(e) => setSelectedImage(e.target.files[0])}
                    />
                  </Button> */}
                  <Button
                    type="button"
                    variant="contained"
                    onClick={() => remove(index)}
                  >
                    <CancelIcon />
                  </Button>
                </Stack>
              </Stack>
            );
          })}
          {/* {fields.map((field, index) => {
            // const key = uuid4();

            return (
              <Stack
                key={field.key}
                gap={20}
                direction="row"
                alignItems={"center"}
                fontWeight={600}
                sx={{
                  "& .MuiTextField-root": { width: "95%" },
                  "& .MuiTypography-root": { fontWeight: 400, fontSize: 20 },

                  //   border: 'none'
                }}
              >
                <Box sx={{ width: "25%" }}>
                  <Typography>
                    {index + 1}. {field.title}
                  </Typography>
                </Box>
                <Stack justifyItems={"center"} gap={1} direction="col">
                  <TextField
                  {...register(`subCat-${field.key}`)}
                    id="sub-cattegory-name"
                    size="small"
                    label="Type sub-category name"
                    // {...register("subCatName")}
                    //   defaultValue="select any one"
                    required
                    //   helperText="Please select your currency"
                  />
                  <Button
                    variant="contained"
                    onClick={() => handleRemove(field, field.key)}
                  >
                    <CancelIcon />
                  </Button>
                </Stack>
              </Stack>
            );
          })} */}
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

        <Box mt={4}>
          <Button variant="contained" onClick={() => append({ val: "name" })}>
            <AddIcon />
            <Typography>
              {fields.length === 0 ? "Add Sub-Category" : "Add More"}
            </Typography>
          </Button>
        </Box>

        <Stack direction={"row"} my={8} gap={4}>
          <Button
            type={"submit"}
            variant={"contained"}
            size={"large"}
            width={8}
          >
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
