import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ProductsTable from "../../../src/components/dashboard/Products/ProductsTable";
import categoryServices from "../../../src/services/category";
import BaseCard from "../../../src/components/baseCard/BaseCard";

export async function getServerSideProps(context) {
  const { catId } = context.query;
//   // getProduct by category
  const products = await categoryServices.productsByCategory(catId);
  return {
    props: { catId, products},
  };
}

const ViewCategory = ({catId, products}) => {

  console.log(catId, products);

  return <BaseCard title="Category: CatName">
    {/* update products table so that it takes props and display on basis of that */}
    <ProductsTable products={products} />
  </BaseCard>;
};

export default ViewCategory;
