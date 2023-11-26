import { Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<Flex justifyContent='space-between' w='full' bgColor='teal' p='16px'>
			<Flex gap='10px'>
				<Link href='/'>
					<Button>Home</Button>
				</Link>
				<Link href='/create'>
					<Button>Create</Button>
				</Link>
			</Flex>
			<Flex>
				<Link href='/login'>
				<Button>Login</Button>
				</Link>
			</Flex>
		</Flex>
	);
};

export default Navbar;
