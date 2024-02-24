import { Card, Inset, Strong, Text, Flex, Box } from "@radix-ui/themes";
import { CiLocationOn } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";

interface Props {
  title?: string;
  price?: string;
}

const ProductCard = ({ title, price }: Props) => {
  return (
    <Card
      size="3"
      className={`duration-500 hover:scale-105 hover:shadow-xl w-72`}
    >
      <Inset clip="border-box" side="top" pb="current">
        <img
          src="https://picsum.photos/1200/1200"
          alt="Bold typography"
          className="block object-cover w-full h-auto bg-gray-500"
        />
      </Inset>
      <Box>
        <Text as="p" size="2" className="font-semibold" mb="4">
          {title ? title : "Sony Noise-Cancelling Headphones"}
        </Text>
        <Flex gap="4">
          <Text size="1">
            {" "}
            <CiLocationOn className="inline mr-1 text-base" />
            New Hampshire
          </Text>
          <Text size="1">
            {" "}
            <LiaShippingFastSolid className="inline mr-1 text-base" />
            Free Shipping
          </Text>
        </Flex>
        <Flex justify="between" mt="4">
          <Text className="font-bold">{price ? price : "$849"} </Text>
          <Text className="text-sm">
            Ends in <strong>17 days</strong>
          </Text>
        </Flex>
      </Box>
    </Card>
  );
};

export default ProductCard;
