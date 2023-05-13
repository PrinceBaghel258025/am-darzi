import React from "react";
import { Box, Stack, Grid,Button, Autocomplete, Typography, TextField } from "@mui/material";
import NextLink from 'next/link'

import AllCategoryTable from "../../src/components/dashboard/Category/AllCategoryTable";
import AllAttributeTable from "../../src/components/dashboard/Products/Attributes/AllAttributesTable";
import BaseCard from "../../src/components/baseCard/BaseCard";

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


const Category = () => {
  return (
    <>
      <BaseCard title="Attributes">
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <Box align="right">
              <NextLink href="/attributes/manage-attributes">
                <Button variant="outlined" px={6} py={4} size={'large'}>Manage Attributes</Button>
              </NextLink>
            </Box>
            <Stack
              mt={2}
              direction="row"
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Typography fontSize={18} fontWeight={600}>
                Attributes
              </Typography>
              <Stack spacing={2} sx={{ width: 300 }}>
                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  options={top100Films.map((option) => option)}
                  renderInput={(params) => (
                    <TextField {...params} label="Search Attributes ..." />
                  )}
                />
              </Stack>
            </Stack>
            {/* <AllCategoryTable /> */}
            <AllAttributeTable />
          </Grid>
        </Grid>
      </BaseCard>
    </>
  );
};

export default Category;
