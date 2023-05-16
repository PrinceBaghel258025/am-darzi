import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import categoryServices from "../../src/services/category";

export async function getServerSideProps(context) {
  const { catId } = context.query;
  const category = await categoryServices.getCategory(catId);
  return {
    props: { category }, // will be passed to the page component as props
  };
}

const ViewCategory = ({category}) => {
//   const router = useRouter();
//   const { catId } = router.query;

  // useEffect(async(catId) => {
  //     console.log("id", catId)
  //     const data = await categoryServices.getCategory(catId);
  //     console.log(data);
  // }, [])
  console.log(category);
//   console.log(catId);
  return <div>
    <p>viewing</p>
    <p>{category._id}</p>
    <p>{category.name}</p>
    {/* {category.subCategories.map} */}
  </div>;
};

export default ViewCategory;
