import { Container } from "@chakra-ui/react";
import { Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
    
    const {fetchProducts, products} = useProductStore();
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    console.log("products", products);

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

                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3}}
                    spacing={10}
                    w={"full"}
                    
                >
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product}/>
                    ))}
                </SimpleGrid>

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