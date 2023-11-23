'use client';
import {
	Flex,
	Button,
	Text,
	Card,
	CardBody,
	Link,
	Grid,
} from '@chakra-ui/react';
import { useDeleteSingleProductMutation, useGetAllProductsQuery } from '../store/slices/apiSlice';

const Home = () => {
	const { data: products, isError, isLoading } = useGetAllProductsQuery({});
	const [trigger, result] = useDeleteSingleProductMutation()

	// console.log('check data', products);

	const handleDelete = (id:string) => {
		trigger(id)
	}

	return (
		<Flex
			w='full'
			gap='8px'
			p='8px'
			alignItems='center'
			justifyContent='center'
		>
			{isLoading ? (
				<Text color='teal' fontSize='60px' mx='auto' my='auto'>
					Loading...
				</Text>
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
					<Link href='/create'>
						<Button colorScheme='teal'>
							Create
						</Button>
					</Link>
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
												<Button onClick={() => handleDelete(product._id)} colorScheme='red' size='sm'>
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
