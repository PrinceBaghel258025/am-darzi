import React from 'react'
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import attributeServices from '../../../src/services/attribute';
import BaseCard from '../../../src/components/baseCard/BaseCard';
import { Typography, Stack, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';


// import { getSession } from 'next-auth';
const EditAttribute = () => {
  const router = useRouter();
  const { edit: id } = router.query;
  console.log(id)
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["attributes", id],
    queryFn: async () => {
      return attributeServices.getAttribute(id)
    }
  })
  console.log(data)

  return (
    <>
      {isLoading ? <CircularProgress/> : isError ? {error} : 
        <>
          <BaseCard>
            <Box flex alignItem>

              <Stack direction="row" alignItems="center">
                <Box><Typography variant='h3'>Attribute Name</Typography></Box>
                <Typography>{data.name}</Typography>
              </Stack>
              <Stack >
                {data.values.map(val => (<p id={val._id}>{val.title}</p>))}
              </Stack>
            </Box>
          </BaseCard>
        </>
        // {/* <div>{data.name}</div> */}
      }
    </>
  )
}

export default EditAttribute;

// export async function getServerSideProps(context) {
//   const session =await getSession(context);

//   return {
//     props: {
//       session
//     }
//   }
// }