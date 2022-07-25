import { configureStore } from "@reduxjs/toolkit";
import Word from "./modules/word";

const middlewares = [];

const env = process.env.NODE_ENV;

if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

export default configureStore({
    reducer: {
        word: Word,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(...middlewares),
});
