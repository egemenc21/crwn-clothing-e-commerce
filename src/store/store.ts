import {compose, createStore, applyMiddleware, Middleware} from "redux";
import {rootReducer} from "./root-reducer";
import {persistStore, persistReducer,PersistConfig} from "redux-persist";
import localStorage from "redux-persist/es/storage";
import logger from "redux-logger";

// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import {loggerMiddleware} from "./middlewares.js/logger";

import {rootSaga} from "./root-saga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));


type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist:(keyof RootState)[]
}
const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
