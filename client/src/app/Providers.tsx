'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<CacheProvider>
				<ChakraProvider>
					<Flex minH='100vh'>{children}</Flex>
				</ChakraProvider>
			</CacheProvider>
		</Provider>
	);
}
