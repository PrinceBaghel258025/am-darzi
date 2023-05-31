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
  import AddProductForm from "../../src/components/Forms/AddProduct";
  import BaseCard from "../../src/components/baseCard/BaseCard";
  
  const CreateProduct = () => {
    return (
      <Grid container spacing={0}>
        <AddProductForm />
      </Grid>
    );
  };
  
  export default CreateProduct;
  