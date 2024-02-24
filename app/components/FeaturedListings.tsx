import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import ProductCard from "./ProductCard";

const FeaturedListings = () => {
  return (
    <>
      <Text className="text-zinc-500 font-semibold text-sm">
        FEATURED LISTINGS
      </Text>
      <Flex justify="between" mt="2">
        <Heading>Recommended just for you</Heading>
        <Text>
          <Link href="/products" className="text-xs font-semibold">
            See All <ChevronRightIcon className="inline" />
          </Link>
        </Text>
      </Flex>
      <Grid
        gap="9"
        columns={{
          initial: "1",
          sm: "3",
          md: "4",
        }}
        mt="6"
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>
    </>
  );
};

export default FeaturedListings;
