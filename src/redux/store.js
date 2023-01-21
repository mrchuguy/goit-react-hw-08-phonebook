import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './authSlice';
import { contactsApi } from './contactsApi'
import { filterSlice } from './filterSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        auth: persistReducer(authPersistConfig, authReducer),
        filter: filterSlice.reducer,
    },

      middleware: getDefaultMiddleware => [
         ...getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
        contactsApi.middleware,
    ],
})

export const persistor = persistStore(store);
