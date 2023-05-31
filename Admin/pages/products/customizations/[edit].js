import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query';
import customizationServices from '../../../src/services/customization';
import CircularProgress from '@mui/material/CircularProgress';


const EditCustomization = () => {
    const router = useRouter();
    const id =  router.query.edit;

    console.log(router.query.edit)
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["customizations", id],
        queryFn: async () => {
          return customizationServices.getCustomization(id)
        }
      })

      if(isError){
        console.log(error)
      }


  return(<>
    {
        isLoading ? <CircularProgress /> : isError ? <>{error.message}</> :  <div>{id}</div>
    }
  </>
  )
}

export default EditCustomization