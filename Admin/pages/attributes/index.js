import React from "react";
import { Box, Stack, Grid,Button, Autocomplete, Typography, TextField } from "@mui/material";
import NextLink from 'next/link'

import AllCategoryTable from "../../src/components/dashboard/Category/AllCategoryTable";
import AllAttributeTable from "../../src/components/dashboard/Products/Attributes/AllAttributesTable";
import BaseCard from "../../src/components/baseCard/BaseCard";
import attributeServices from "../../src/services/attribute";
import { QueryClient, useQuery } from "@tanstack/react-query";
import TableTop from "../../src/components/common/TableTop";


// export async function getServerSideProps (context) {
//     const queryClient = new QueryClient();

//     queryClient.fetchQuery({queryKey : ["attributes"], queryFn: async () => {
//         return attributeServices.getAllAttributes()
//     }})

//   const attributes = await attributeServices.getAllAttributes();



//   return {
//     props: {
//       attributes
//     }
//   }
  
// }


const Attributes = () => {

    const {data, isLoading, isError} = useQuery({
        queryKey: ["attributes"],
        queryFn: async () =>{ 
            return attributeServices.getAllAttributes()
        }
    })

  console.log(data)
  return (
    <>
      <BaseCard title="Attributes">
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <TableTop title={'Attributes'} isLoading={isLoading} data={data} />
            {/* <Box align="right">
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
              <Stack  sx={{ width: '20%' }}>
                <Autocomplete
                  size="small"
                  id="free-solo-demo"
                  freeSolo
                  options={isLoading ? [] : data.map((option) => option.name)}
                  renderInput={(params) => (
                    <TextField {...params} label="Search Attributes ..." />
                  )}
                />
              </Stack>
            </Stack> */}
            {
                isLoading ? "Loading" : <AllAttributeTable attributes={data} />
            }
          </Grid>
        </Grid>
      </BaseCard>
    </>
  );
};

export default Attributes;
