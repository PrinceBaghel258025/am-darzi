import {
  Grid,
  Box,
  Button,
  Stack,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";
import NextLink from "next/link";
import BaseCard from "../../../src/components/baseCard/BaseCard";
import customizationServices from "../../../src/services/customization";
import CustomizationsTable from "../../../src/components/dashboard/Products/Customizations/CustomizationsTable";

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



export async function getServerSideProps(context) {
  const customs = await customizationServices.getAllCustomizations();

  return {
    props: {
      customs,
    },
  };
}

const Customizations = ({ customs }) => {
  console.log(customs);

  return (
    <BaseCard title="All Customizations">
      <Grid container spacing={0}>
        <Grid item xs={12} lg={12}>
          <Box align="right">
            <NextLink href="/products/customizations/manage-customizations">
              <Button variant="outlined">Manage Customizations</Button>
            </NextLink>
          </Box>
          <Stack
            mt={2}
            direction="row"
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Typography fontSize={18} fontWeight={600}>
              Customizations
            </Typography>
            <Stack spacing={2} sx={{ width: 300 }}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={customs.map((option) => option.name)}
                renderInput={(params) => (
                  <TextField {...params} label="Search Customizations ..." />
                )}
              />
            </Stack>
          </Stack>
          <CustomizationsTable customs={customs} />
        </Grid>
      </Grid>
    </BaseCard>
  );
};

export default Customizations;
