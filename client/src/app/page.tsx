'use client';
import {
	Flex,
	Button,
	Text,
	Card,
	CardBody,
	Link,
	Grid,
	Spinner,
} from '@chakra-ui/react';
import { useDeleteSingleProductMutation, useGetAllProductsQuery } from '../store/slices/apiSlice';
import Swal from 'sweetalert2';


const Home = () => {
	const { data: products, isError, isLoading } = useGetAllProductsQuery({});
	const [trigger, result] = useDeleteSingleProductMutation()

	// console.log('check data', products);

	const handleDelete = (id:string) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then(result => {
			if (result.isConfirmed) {
				trigger(id)
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Product has been deleted',
					showConfirmButton: false,
					timer: 1000,
				});
			}
		});
	}

	return (
		<Flex w='full' gap='8px' p='8px' justifyContent='center' alignItems='center' direction='column' minH='90vh'>
			{isLoading ? (
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='blue.500'
					size='xl'
					my='auto'
				/>
			) : isError ? (
				<Text color='teal' fontSize='60px' mx='auto' my='auto'>
					An error occurred
				</Text>
			) : (
				<Flex direction='column' gap='16px'>
					<Flex
						w='full'
						border='2px solid teal'
						p='16px'
						justifyContent='space-evenly'
						gap='16px'
					>
						<Text fontSize='3xl'>Products Gallery</Text>
					</Flex>
					<Grid
						border='2px solid teal'
						w='auto'
						templateColumns='repeat(4, 1fr)'
						gap='16px'
						p='16px'
					>
						{products &&
							products.map((product: any, index: number) => (
								<Card key={index} border='2px solid teal' w='200px' h='200px'>
									<CardBody display='flex' flexDir='column' flex={1}>
										<Text>Name: {product.name}</Text>
										<Text>Price: {product.price}</Text>
										<Flex direction='column' gap='8px' mt='auto'>
											<Link href={`/details/${product._id}`}>
												<Button colorScheme='teal' size='sm' w='full'>
													View details
												</Button>
											</Link>
											<Button
												onClick={() => handleDelete(product._id)}
												colorScheme='red'
												size='sm'
											>
												Delete
											</Button>
										</Flex>
									</CardBody>
								</Card>
							))}
					</Grid>
				</Flex>
			)}
		</Flex>
	);
};

export default Home;
