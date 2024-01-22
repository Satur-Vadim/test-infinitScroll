import { configureStore } from '@reduxjs/toolkit';

import baseApi from './apis/baseApi';

const makeStore = () => configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([baseApi.middleware]),
});

export default makeStore;
