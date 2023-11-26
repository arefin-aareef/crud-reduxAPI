'use client';
import {
	useGetSingleProductQuery,
	useUpdateSingleProductMutation,
} from '@/src/store/slices/apiSlice';
import { Button, Flex, FormLabel, Input, Spinner, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


type updateDetailsProps = {
	params: {
		id: string;
	};
};

const Update = ({ params }: updateDetailsProps) => {
	const { id } = params;
	const { data: product, isError, isLoading } = useGetSingleProductQuery(id);
	const [trigger, result] = useUpdateSingleProductMutation();
	console.log(product);

	const router = useRouter();
	const [newName, setNewName] = useState('');
	const [newPrice, setNewPrice] = useState('');
	const [newDescription, setNewDescription] = useState('');
	const [newNotes, setNewNotes] = useState('');
	const [newStock, setNewStock] = useState('');

	useEffect(() => {
		setNewName(product?.name);
		setNewPrice(product?.price);
		setNewDescription(product?.description);
		setNewNotes(product?.note);
		setNewStock(product?.stock);
	}, [product]);

	useEffect(() => {
		if (result.isSuccess) {
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'Product has been updated',
				showConfirmButton: false,
				timer: 1500,
			});
			router.push(`/details/${id}`);
		}
	}, [result, id, router]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const patchData = {
			name: newName,
			price: parseInt(newPrice),
			description: newDescription,
			note: newNotes,
			stock: parseInt(newStock),
		};

		trigger({ id: id, body: patchData });
	};

	return (
		<Flex minH='90vh'>
			<Flex w='full' alignItems='center' justifyContent='center' >
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
					<Flex direction='column' border='2px solid teal' gap='8px' 
					p='8px'
					>
						<Flex
							as={'form'}
							onSubmit={handleSubmit}
							direction='column'
							gap='8px'
							w='700px'
						>
							<Flex alignItems='center' justifyContent='space-between'>
								<Text>Update Information</Text>
								<Button colorScheme='blue' type='submit'>
									Update
								</Button>
							</Flex>
							<Flex direction='column' border='2px solid teal' p='16px'>
								<FormLabel>Name: {newName} </FormLabel>
								<Flex gap='4px'>
									<Input
										value={newName}
										onChange={e => setNewName(e.target.value)}
									/>
								</Flex>
							</Flex>
							<Flex direction='column' border='2px solid teal' p='16px'>
								<FormLabel>Price: {newPrice} </FormLabel>
								<Flex gap='4px'>
									<Input
										type='number'
										value={newPrice}
										onChange={e => setNewPrice(e.target.value)}
									/>
								</Flex>
							</Flex>
							<Flex direction='column' border='2px solid teal' p='16px'>
								<FormLabel>Description: {newDescription} </FormLabel>
								<Flex gap='4px'>
									<Input
										value={newDescription}
										onChange={e => setNewDescription(e.target.value)}
									/>
								</Flex>
							</Flex>
							<Flex direction='column' border='2px solid teal' p='16px'>
								<FormLabel>Notes: {newNotes} </FormLabel>
								<Flex gap='4px'>
									<Input
										value={newNotes}
										onChange={e => setNewNotes(e.target.value)}
									/>
								</Flex>
							</Flex>
							<Flex direction='column' border='2px solid teal' p='16px'>
								<FormLabel>Stock: {newStock} </FormLabel>
								<Flex gap='4px'>
									<Input
										type='number'
										value={newStock}
										onChange={e => setNewStock(e.target.value)}
									/>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				)}
			</Flex>
		</Flex>
	);
};

export default Update;
