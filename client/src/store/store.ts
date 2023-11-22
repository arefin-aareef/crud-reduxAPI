import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './slices/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
	reducer: {
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productsApi.middleware),
	// middleware: defaultMid => [...defaultMid(), productsApi.middleware],
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
