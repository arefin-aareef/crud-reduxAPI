'use client';
import { Flex, Button, Text, Card, CardBody, Link } from '@chakra-ui/react';
import { useGetSingleProductQuery } from '@/src/store/slices/apiSlice';

type viewDetailsProps = {
	params: {
		id: string;
	};
};

const Details = ({ params }: viewDetailsProps) => {
	const { id } = params;
	const { data: product, isError, isLoading } = useGetSingleProductQuery(id);
	// console.log(product);

	return (
		<Flex
			w='full'
			gap='8px'
			p='8px'
			alignItems='center'
			justifyContent='center'
			position='relative'
		>
			<Link href='/' position='absolute' top={10} left={10}>
				<Button colorScheme='green' type='submit'>
					Home
				</Button>
			</Link>
			{isLoading ? (
				<Text color='teal' fontSize='60px' mx='auto' my='auto'>
					Loading...
				</Text>
			) : isError ? (
				<Text color='teal' fontSize='60px' mx='auto' my='auto'>
					An error occurred
				</Text>
			) : (
				<Card p='16px' border='2px solid teal' h='300px' w='300px'>
						<Link href={`/update/${product.doc._id}`}>
							<Button colorScheme='yellow' size='sm' w='full'>
								Update
							</Button>
						</Link>
					<CardBody>
						<Text>Name: {product?.doc?.name}</Text>
						<Text>Price: {product?.doc?.price}</Text>
						<Text>Description: {product?.doc?.description}</Text>
						<Text>Note: {product?.doc?.note}</Text>
						<Text>Stock: {product?.doc?.stock}</Text>
					</CardBody>
				</Card>
			)}
		</Flex>
	);
};

export default Details;
