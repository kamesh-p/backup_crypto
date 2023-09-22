import { configureStore } from "@reduxjs/toolkit";
import { cryptoNewsApi } from "../Components/Resources/CryptoNewsApp";
import { cryptoApi } from "../Components/Resources/CryptoApi";

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cryptoNewsApi.middleware)
      .concat(cryptoApi.middleware),
});

export default store;
