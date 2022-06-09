import { Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Card from "../components/Card";
import LangSwitcher from "../components/LangSwitcher";
import { data } from "../data/data";

const Home: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <Flex w="100%">
      <Flex margin={"auto"} width={"80%"} direction="column">
        <Flex alignSelf={"flex-end"}>
          <LangSwitcher />
        </Flex>

        <SimpleGrid columns={3} spacing={5}>
          {data.map((item, index) => {
            const { title_en, title_ar, currency_en, currency_ar } = item;
            const title = locale === "en" ? title_en : title_ar;
            const currency = locale === "en" ? currency_en : currency_ar;
            return (
              <Card key={index}>
                <Image src={item.image_url} alt={item.image_url} />
                <Text fontSize="xl">{title}</Text>
                <Text fontSize="xl">
                  {currency} {item.price}
                </Text>
              </Card>
            );
          })}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Home;
