import React from 'react';
import {useRouter} from 'next/router';

const ViewAttribute = () => {

    const router = useRouter();
    const data = router.query
    console.log(data)


  return (
    <div>view</div>
  )
}

export default ViewAttribute;