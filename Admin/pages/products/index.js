import {
  Grid,
  Box,
  Button,
  Stack,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";
import ProductTable from "../../src/components/dashboard/Products/ProductsTable";
import NextLink from "next/link";
import BaseCard from "../../src/components/baseCard/BaseCard";
import productsServices from "../../src/services/products";

const top100Films = [
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
  "ghjkfd",
];


export async function getServerSideProps (context) {

  const products = await productsServices.getAllProducts();



  return {
    props: {
      products
    }
  }
  
}

const Tables = ({products}) => {

  console.log(products)


  return (
    <BaseCard title="Product Perfomance">
      <Grid container spacing={0}>
        <Grid item xs={12} lg={12}>
          <Box align="right">
            <NextLink href="/products/create-product">
              <Button variant="outlined">Add New Product</Button>
            </NextLink>
          </Box>
          <Stack
            mt={2}
            direction="row"
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Typography fontSize={18} fontWeight={600}>
              Products
            </Typography>
            <Stack spacing={2} sx={{ width: 300 }}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={top100Films.map((option) => option)}
                renderInput={(params) => (
                  <TextField {...params} label="Search Products ..." />
                )}
              />
            </Stack>
          </Stack>
          <ProductTable products={products} />
        </Grid>
      </Grid>
    </BaseCard>
  );
};

export default Tables;
