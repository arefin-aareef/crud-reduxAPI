/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { FC } from 'react';

import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
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
					<Heading fontSize={'4xl'}>Sign in to your account</Heading>
				</Stack>
				<Box rounded={'lg'} boxShadow={'lg'} p={8}>
					<Stack spacing={4}>
						<FormControl id='email'>
							<FormLabel>Email address</FormLabel>
							<Input type='email' />
						</FormControl>
						<FormControl id='password'>
							<FormLabel>Password</FormLabel>
							<Input type='password' />
						</FormControl>
						<Stack spacing={10}>
							<Stack
								direction={{ base: 'column', sm: 'row' }}
								align={'start'}
								justify={'space-between'}
							>
								<Checkbox>Remember me</Checkbox>
								<Text color={'blue.400'}>Forgot password?</Text>
							</Stack>
							<Button
								bg={'blue.400'}
								color={'white'}
								_hover={{
									bg: 'blue.500',
								}}
							>
								Sign in
							</Button>
							<Text>
								Don't have an account?
								<Button color='blue' variant='link' ms='2px'>
									<Link href='/register'>Register Now</Link>
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
