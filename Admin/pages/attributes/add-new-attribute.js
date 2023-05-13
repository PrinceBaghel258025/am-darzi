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
import attributeServices from "../../src/services/attribute";
import { useRouter } from "next/dist/client/router";
import { ToastContainer, toast } from "react-toastify";

import BaseCard from "../../src/components/baseCard/BaseCard";
const attributes = ["color", "fabric"];

const ManageAttributes = () => {
  const router = useRouter();

  const { handleSubmit, register } = useForm({
    defaultValues: {
      images: false,
    },
  });

  const submitForm = async (data) => {
    console.log(data);

    const attribute = await attributeServices.addAttribute(data);
    if (typeof attribute === "string") {
      alert("attribute already exist")
      router.back()
    }
  };

  return (
    <>
    {/* <ToastContainer autoClose={2000} /> */}
    <BaseCard title="Add New Attribute">
      {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
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
            }}
          >
            <Box sx={{ width: 400 }}>
              <Typography>Attribute Name: </Typography>
            </Box>
            <TextField
              {...register("name", { required: true })}
              id="new-attribute-name"
              size="small"
              label="Enter Attribute Name"
              required
            ></TextField>
          </Stack>
          <FormControlLabel
            {...register("images")}
            control={<Switch />}
            label="Would it's values contain an image"
          />
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

export default ManageAttributes;
