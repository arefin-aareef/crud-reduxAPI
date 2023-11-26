/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { FC } from 'react';
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Button,
	Heading,
	Text,
} from '@chakra-ui/react';
import Link from 'next/link';

type pageProps = {};

const page: FC<pageProps> = ({}) => {
	return (
		<Flex minH={'90vh'} align={'center'} justify={'center'}>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'}>Create a new account</Heading>
				</Stack>
				<Box rounded={'lg'} boxShadow={'lg'} p={8}>
					<Stack spacing={4}>
						<FormControl id='name'>
							<FormLabel>Name</FormLabel>
							<Input type='email' />
						</FormControl>
						<FormControl id='email'>
							<FormLabel>Email address</FormLabel>
							<Input type='email' />
						</FormControl>
						<FormControl id='password'>
							<FormLabel>Password</FormLabel>
							<Input type='password' />
						</FormControl>
						<Stack spacing={10}>
							<Button
								bg={'blue.400'}
								color={'white'}
								_hover={{
									bg: 'blue.500',
								}}
							>
								Sign up
							</Button>
							<Text>
								Already have an account?
								<Button color='blue' variant='link' ms='2px'>
									<Link href='/login'>Login Now</Link>
								</Button>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
};

export default page;
