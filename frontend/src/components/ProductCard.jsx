import { useState } from 'react'; 
import { Box, Image, Heading, Button, HStack, IconButton, Text, ModalContent, VStack, Input } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useColorModeValue } from '@chakra-ui/react';
import { useProductStore } from '../store/product';
import { useToast } from '@chakra-ui/react';
import { Modal, ModalFooter, useDisclosure, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';

const ProductCard = ({ product }) => {
    const textColor = useColorModeValue("gray.700", "gray.100");
    const bg = useColorModeValue("white", "gray.800");
    
    const { deleteProduct, updateProduct } = useProductStore();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure(); 
    
    const [updatedProduct, setUpdatedProduct] = useState({ ...product });

    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);
        toast({
            title: success ? "Success" : "Error",
            description: message,
            status: success ? "success" : "error",
            isClosable: true,
            duration: 3000
        });
    };

    const handleUpdateProduct = async (pid, updatedProduct) => {
        const {success, message} =await updateProduct(pid, updatedProduct);
        onClose();
        if(!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                isClosable: true,
                duration: 3000
            });
        } else{
            toast({
                title: "Success",
                description: "Product updated successfully",
                status: "success",
                isClosable: true,
                duration: 3000});
        }
    };

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
                w="full"
                objectFit="cover"
            />

            <Box p={4}>
                <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
                <Text fontSize="xl" fontWeight="bold" color={textColor} mb={4}>${product.price}</Text>

                <HStack spacing={2}>
                    <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme="purple" />
                    <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} colorScheme="red" />
                </HStack>
            </Box>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose}> {/*  Fix casing `isOpen` */}
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input
                                placeholder='Product Name'
                                name='name'
                                value={updatedProduct.name}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                            />
                            <Input 
                                placeholder='Price'
                                name='price'
                                type='number'
                                value={updatedProduct.price}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                            />
                            <Input 
                                placeholder='Image URL'
                                name="image" 
                                value={updatedProduct.image}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                            />
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="purple" onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
                            Update
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Caancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default ProductCard;
