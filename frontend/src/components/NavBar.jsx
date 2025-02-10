import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
 

const NavBar = () => {
    return (
        <Container maxW={"1140px"} px={4}>
            <Flex
             h={16} 
             alignItems={"center"} 
             justifyContent={"space-between"}
             flexDir={{
                base: "column",
                sm: "row"
             
             }}
             >
                <Text
                    fontSize={{ base : "22", sm: "28"}}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={ "center"}
                    bgGradient={"linear(to-r, magenta.400, purple.400)"}
                    bgClip={"text"}
                >
                    <Link to={"/"}>Product Store</Link>
                </Text>
                <HStack
                    spacing={2}
                    alignItems={"center"}
                >
                    <Link to={"/create"}>
                        <Button>
                            <CiCirclePlus fontSize={"20"} />
                        </Button>
                    </Link>
                </HStack>



            </Flex>
        </Container>

)}

export default NavBar;