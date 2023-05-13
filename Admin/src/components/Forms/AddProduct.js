import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import { useState } from "react";
import InputAdornment from "@mui/material";
import BaseCard from "../baseCard/BaseCard";
import { CurrencyRupeeIcon } from "@mui/icons-material/CurrencyRupee";
import Select from "./FormComponents/MultiSelect";
import NestedSelect from "./FormComponents/NestedMultiSelect";
import addProduct from "../../data/addProduct.json";
import { useForm, useFieldArray } from "react-hook-form";

const CreateProduct = () => {

  const [colors, setColors] = useState([]);
  const [customs, setCustoms] = useState([]);
  const [occassions, setOccassions] = useState([]);
  const [fabrics, setFabrics] = useState([]);


  const { register, handleSubmit, control, reset } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "colors", // unique name for your Field Array
    }
  );

  const onSubmit = (data) => {
    console.log("colors", colors)
    console.log("customs", customs)
    console.log("occassions", occassions)
    console.log("fabrics",fabrics)
    console.log(data);
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Add Product">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <TextField
                {...register("name")}
                id="name-basic"
                label="Product Name"
                variant="outlined"
                // defaultValue="Nirav Joshi"
              />
              <TextField
                {...register("shortDesc")}
                id="short-desc"
                label="Short Description"
                variant="outlined"
                multiline
                rows={2}
              />
              <TextField
                {...register("description")}
                id="description"
                label="Description"
                // type="password"
                variant="outlined"
                multiline
                rows={5}
              />
              <Stack direction="row" gap={8}>
                <TextField
                  {...register("price")}
                  sx={{
                    width: "50%",
                  }}
                  id="price"
                  label="Price"
                  type="number"
                  variant="outlined"
                />
                <TextField
                  {...register("quantity")}
                  sx={{
                    width: "50%",
                  }}
                  id="quantity"
                  label="Quantity (in stock)"
                  type="number"
                  variant="outlined"
                  default={1}
                />
              </Stack>
              <Stack direction="row" gap={8}>
                <Select
                  // register={register}
                  setState={setColors}
                  prefix="colors"
                  label="Select colors (if any)"
                  attributes={addProduct.colors}
                />
                <Select
                setState={setFabrics}
                  label="Available in fabrics (if any)"
                  attributes={addProduct.fabrics}
                />
              </Stack>
              <Stack direction="row" gap={8}>
                <Select
                setState={setOccassions}
                  label="Select suitable occassions (if any)"
                  attributes={addProduct.occassions}
                />
                <NestedSelect
                  label="Select Category"
                  data={addProduct.categories}
                />
              </Stack>
              <Stack direction="row">
                <Select
                setState={setCustoms}
                  label="Select a custom (if any)"
                  attributes={addProduct.customs}
                />
              </Stack>
              <Stack direction="row" gap={8}>
                <Button
                  sx={{ width: "50%", backgroundColor: "blue" }}
                  variant="contained"
                  size="large"
                  component="label"
                >
                  Upload Primary Image
                  <input hidden accept="image/*" type="file" {...register("primary-image")} />
                </Button>
                <Button
                  sx={{ width: "50%", backgroundColor: "blue" }}
                  variant="contained"
                  component="label"
                >
                  Upload More Images (if any)
                  <input hidden accept="image/*" multiple type="file"  {...register("more-images")}/>
                </Button>
              </Stack>
            </Stack>
            <br />
            <Stack direction="row" gap={4}>
              <Button
                fontSize={8}
                padding={8}
                variant="contained"
                mt={2}
                type="submit"
              >
                Submit
              </Button>
              <Button variant="outlined" mt={2} type="reset">
                Reset
              </Button>
            </Stack>
          </form>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default CreateProduct;
