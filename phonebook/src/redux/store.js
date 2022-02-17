import { configureStore } from '@reduxjs/toolkit';
import { 
  persistStore, 
  FLUSH, 
  REHYDRATE, 
  PAUSE, 
  PERSIST, 
  PURGE, 
  REGISTER} from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from './contacts/contact-slice';

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactApi.middleware,
];

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
