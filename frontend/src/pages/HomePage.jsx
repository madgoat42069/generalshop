import { Container } from "@chakra-ui/react";
import { Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <Container maxW="container.xl" py={12}>
            <VStack spacing={8}>
                <Text
                    fontSize={"30"}
                    fontWeight={"bold"}
                    bgGradient={"linear(to-r, magenta.400, purple.400)"}
                    bgClip={"text"}
                    textAlign={"center"}
                >
                    Current Products
                </Text>

                <Text
                    fontSize="xl"
                    textAlign={"center"}
                    fontWeight={"bold"}
                    color={"purple.400"}
                >
                    No products found {" "}
                    <Link to={"/create"}>
                        <Text
                            as="span"
                            color={"purple.700"}
                            _hover={{
                                textDecoration: "underline"
                            }}
                        >
                            Create a product
                        </Text>
                    </Link>
                </Text>

            </VStack>
        </Container>
)}

export default HomePage;