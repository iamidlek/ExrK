import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { boardSilceReducer } from "./Board";

const env = process.env.NODE_ENV;

const middlewares = [thunk];

if (env === "development") {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: boardSilceReducer,
  middleware: [...middlewares],
  devTools: env === "development",
});

export default store;
