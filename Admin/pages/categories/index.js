import React, {useState, useEffect} from "react";
import { Box, Stack, Grid,Button, Autocomplete, Typography, TextField } from "@mui/material";
import NextLink from 'next/link'

import AllCategoryTable from "../../src/components/dashboard/Category/AllCategoryTable";
import BaseCard from "../../src/components/baseCard/BaseCard";
import { useQuery } from "@tanstack/react-query";

import categoryServices from '../../src/services/category'

import TableTop from "../../src/components/common/TableTop";

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

    const {data : categories, isLoading} = useQuery({
        queryKey: ["categories"],
        queryFn: async () => await categoryServices.getCategories()
    })
//   const [categories, setCategories] = useState([]);
//   const [isLoading, setLoading] = useState(false);
 
//   useEffect(() => {
//     setLoading(true);
//     categoryServices.getCategories()
//       .then((data) => {
//         console.log("data", data)
//         setCategories(data);
//         setLoading(false);
//       });
//   }, []);
 
  if (isLoading) return <p>Loading...</p>;
  if (!categories) return <p>No profile data</p>;


  return (
    <>
      <BaseCard title="Categories">
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <TableTop data={categories} isLoading={isLoading} title={"Categories"} />
            {/* <Box align="right">
              <NextLink href="/category/manage-category">
                <Button variant="outlined" px={6} py={4} size={'large'}>Manage Categoies</Button>
              </NextLink>
            </Box>
            <Stack
              mt={2}
              direction="row"
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Typography fontSize={18} fontWeight={600}>
                Categories
              </Typography>
              <Stack spacing={2} sx={{ width: 300 }}>
                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  options={categories.map((cat) => cat.name)}
                  renderInput={(params) => (
                    <TextField {...params} label="Search Categories ..." />
                  )}
                />
              </Stack>
            </Stack> */}
            <AllCategoryTable categories={categories} />
          </Grid>
        </Grid>
      </BaseCard>
    </>
  );
};

export default Category;
