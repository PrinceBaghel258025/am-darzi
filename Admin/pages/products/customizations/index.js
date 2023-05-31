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
import TableTop from "../../../src/components/common/TableTop";
import { useQuery } from "@tanstack/react-query";
import {useRouter} from 'next/router'

// export async function getServerSideProps(context) {
//   const customs = await customizationServices.getAllCustomizations();

//   return {
//     props: {
//       customs,
//     },
//   };
// }

const Customizations = () => {


  const { data, isLoading, isError } = useQuery({
    queryKey: ["customizations"],
    queryFn: async () => {
      return await customizationServices.getAllCustomizations();
    },
  });
  console.log(data);

  return (
    <BaseCard title="All Customizations">
      <Grid container spacing={0}>
        <Grid item xs={12} lg={12}>
          <TableTop data={data} title={'Customizations'} isLoading={isLoading} />
          {isLoading ? "Loading..." : <CustomizationsTable customs={data} />}
        </Grid>
      </Grid>
    </BaseCard>
  );
};

export default Customizations;
