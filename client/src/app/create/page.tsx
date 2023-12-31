'use client'
import React, { useEffect, useState } from 'react';
import { Button, Flex, FormLabel, Input, Spinner, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useCreateSingleProductMutation } from '@/src/store/slices/apiSlice';
import Swal from 'sweetalert2';

const Create = () => {

  const [trigger, result] = useCreateSingleProductMutation()

  const {isLoading, isError} = result

	const router = useRouter();
	const [newName, setNewName] = useState('');
	const [newPrice, setNewPrice] = useState('');
	const [newDescription, setNewDescription] = useState('');
	const [newNotes, setNewNotes] = useState('');
	const [newStock, setNewStock] = useState('');

  	const handleSubmit = async (e: React.FormEvent) => {
			e.preventDefault();

			const patchData = {
				name: newName,
				price: newPrice,
				description: newDescription,
				note: newNotes,
				stock: newStock,
			};

			trigger(patchData);
		};

    	useEffect(() => {
				if (result.isSuccess) {
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: 'New Product has been created',
						showConfirmButton: false,
						timer: 1500,
					});
					router.push('/');
				}
			}, [result, router]);

	return (
		<Flex w='full' alignItems='center' justifyContent='center' p='8px' minH='90vh'>
			{isLoading ? (
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='blue.500'
					size='xl'
				/>
			) : isError ? (
				<Text color='teal' fontSize='60px' mx='auto' my='auto'>
					An error occurred
				</Text>
			) : (
				<Flex direction='column' border='2px solid teal' gap='8px' p='8px'>
					<Flex
						as={'form'}
						onSubmit={handleSubmit}
						direction='column'
						gap='8px'
						w='700px'
					>
						<Flex alignItems='center' justifyContent='space-between'>
							<Text>Create Product</Text>
							<Button colorScheme='blue' type='submit'>
								Create
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
	);
};

export default Create;
