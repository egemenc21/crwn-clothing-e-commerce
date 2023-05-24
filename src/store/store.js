import {compose, createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import {rootReducer} from "./root-reducer";
import {persistStore, persistReducer} from "redux-persist";
import localStorage from "redux-persist/es/storage";
// import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import {loggerMiddleware} from './middlewares.js/logger'

import {rootSaga} from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleware,
].filter(Boolean);

const persistConfig = {
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
