import {
    FormControlLabel,
    Stack,
    TextField,
    Typography,
    Button,
    Box,
    Switch,
    Alert,
  } from "@mui/material";
  import { useForm } from "react-hook-form";
  import customizationServices from "../../../src/services/customization";
  import { useRouter } from "next/dist/client/router";
  import { ToastContainer, toast } from "react-toastify";
  
  import BaseCard from "../../../src/components/baseCard/BaseCard";
  const attributes = ["color", "fabric"];
  
  const AddCustomization = () => {
    const router = useRouter();
  
    const { handleSubmit, register } = useForm({
      defaultValues: {
        images: false,
      },
    });
  
    const submitForm = async (data) => {
      console.log(data);
  
      const custom = await customizationServices.addCustomization(data);
      console.log("inside add-new-customization", custom);
      // if (typeof custom === "string") {
      //   alert("attribute already exist")
      //   router.back()
      // }
    };
  
    return (
      <>
      {/* <ToastContainer autoClose={2000} /> */}
      <BaseCard title="Add New Customization">
        {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
        <form onSubmit={handleSubmit(submitForm)}>
          <Stack gap={2}>
            <Stack
              gap={4}
              direction={{xs: 'column', sm: 'row'}}
              alignItems={"center"}
              fontWeight={600}
              sx={{
                "& .MuiTextField-root": { width: "25ch" },
                "& .MuiTypography-root": { fontWeight: 600, fontSize: 20 },
              }}
            >
              <Box >
                <Typography>Customization Name: </Typography>
              </Box>
              <TextField
                {...register("name", { required: true })}
                id="new-customization-name"
                size="small"
                label="Enter Customization Name"
                required
              ></TextField>
            </Stack>
            {/* <FormControlLabel
              {...register("images")}
              control={<Switch />}
              label="Would it's values contain an image"
            /> */}
          </Stack>
  
          <Stack direction={"row"} my={8} gap={4}>
            <Button type="submit" variant={"contained"} size={"large"} width={8}>
              Submit
            </Button>
            <Button type={"reset"} variant={"outlined"} size={"medium"}>
              Reset
            </Button>
          </Stack>
        </form>
      </BaseCard>
      </>
    );
  };
  
  export default AddCustomization;
  