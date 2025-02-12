import { Box, Image, Heading, HStack, IconButton, Text,  } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useColorModeValue } from '@chakra-ui/react';
import { useProductStore } from '../store/product';
import { useToast } from '@chakra-ui/react';

const ProductCard = ({product}) => {

    const textColor = useColorModeValue("gray.700", "gray.100");
    const bg = useColorModeValue("white", "gray.800");
    
    const {deleteProduct} = useProductStore();
    const toast = useToast();
    
    const handleDeleteProduct = async (pid) => {
        const {success, message} = await deleteProduct(pid);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                isClosable: true,
                duration: 3000
            });
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                isClosable: true,
                duration: 3000
            });
        }
    }

    return (
        <Box
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            transition="all 0.25s"
            _hover={{
                transform: "translateY(-5px)", 
                shadow: "xl"
            }}
            bg={bg}
        >
            <Image
                src={product.image}
                alt={product.name}
                h={48}
                w="full" objectFit="cover"/>

            <Box p={4}>
                <Heading 
                    as="h3"
                    size="md"
                    mb={2}
                >
                    {product.name}
                </Heading>

                <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color={textColor}
                    mb={4}
                >
                    ${product.price}
                </Text>

                <HStack spacing={2}>
                    <IconButton icon={<EditIcon />} colorScheme="purple" />
                    <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)}
                     colorScheme="red"/>
                </HStack>
            </Box>
        </Box>
    )}

export default ProductCard;

