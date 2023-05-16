import React from 'react'
import {useRouter} from 'next/router';
const EditAttribute = () => {


    const router = useRouter();
    const data = router.query;
        console.log(data)

  return (

    <div>EditAttribute</div>
  )
}

export default EditAttribute