import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Flex,
} from "@chakra-ui/react";
import { BiLike, BiChat } from "react-icons/bi";

const Cards = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Card zIndex={"-1"} maxW="sm">
        <CardBody>
          <Flex justifyContent="center">
            <Image
              height={"15vmax"}
              src={data.image}
              alt="Candy Crush"
              borderRadius="lg"
              css={{
                "@media screen and (max-width: 426px)": {
                    height: "30vmax",
                },
              }}
            />
          </Flex>

          <Stack mt="5" spacing="3">
            <Flex justifyContent="center">
              <Heading size="md">{data.title}</Heading>
            </Flex>
            <Flex justifyContent="end" marginEnd={"2vmax"}>
              <Text>~{data.user}</Text>
            </Flex>
          </Stack>
        </CardBody>
        <CardFooter style={{ paddingTop: "0" }}>
          <ButtonGroup spacing="1" width="100%">
            <Button
              flex={1}
              variant="ghost"
              leftIcon={<BiLike />}
              justifyContent="center"
            >
              Like {data.likes}
            </Button>
            <Button
              flex={1}
              variant="ghost"
              leftIcon={<BiChat />}
              justifyContent="center"
            >
              Comment {data.comments}
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;
