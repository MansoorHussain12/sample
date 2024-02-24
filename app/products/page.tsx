"use client";

import { Grid } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

interface Product {
  id: number;
  productName: string;
  price: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  //   we can create a reusable hook to fetch data using react-query as well...
  //   Ideally for this case we should be getting data from database using prisma and not making this a client component...

  useEffect(() => {
    getData();
  });

  async function getData() {
    try {
      const products = await axios.get<Product[]>("/api/products");

      setProducts(products.data);
    } catch (error) {
      console.log(error);
      // Show error message or toast notification
    }
  }

  return (
    <Grid
      gap="9"
      columns={{
        initial: "1",
        sm: "3",
        md: "4",
      }}
      mt="6"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          price={product.price}
          title={product.productName}
        />
      ))}
    </Grid>
  );
};

export default ProductsPage;
