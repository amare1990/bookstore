import booksReducer from "./books/books";
import checkStatusReducer from "./categories/categories";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({books: booksReducer, category: checkStatusReducer});

const store = configureStore(rootReducer);

export default store;