import { Box, Image, Heading, HStack, IconButton, Text,  } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useColorModeValue } from '@chakra-ui/react';

const ProductCard = ({product}) => {

    const textColor = useColorModeValue("gray.700", "gray.100");
    const bg = useColorModeValue("white", "gray.800");
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
                    <IconButton icon={<DeleteIcon />} colorScheme="red"/>
                </HStack>
            </Box>
        </Box>
    )}

export default ProductCard;

