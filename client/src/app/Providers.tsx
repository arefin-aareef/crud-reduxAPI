'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Navbar from '../components/Navbar';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<CacheProvider>
				<ChakraProvider>
					<Box minH='100vh'>{children}</Box>
				</ChakraProvider>
			</CacheProvider>
		</Provider>
	);
}
