import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import cartReducer from '../features/slicer'; 
import { postsApi } from '../redux/api';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);


export const store = configureStore({
  reducer: {
    cart: persistedReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(postsApi.middleware),
  
});


export const persistor = persistStore(store);