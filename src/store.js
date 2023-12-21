import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { getUserReducer } from "./features/signInUser-slice";
import { verifyUserReducer } from "./features/verifyUser-slice";
import { getUserAutorization } from "./features/getAutorization-slice";
import { clientSecretReducer } from "./features/setClientSecret-slice";
import { themeReducer } from "./features/theme/theme-slice";

const appReducer = combineReducers({
  userData: getUserReducer,
  verifyUser: verifyUserReducer,
  userAutorization: getUserAutorization,
  clientSecret: clientSecretReducer,
  theme: themeReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage,
  blackList: ["verifyUser"],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
