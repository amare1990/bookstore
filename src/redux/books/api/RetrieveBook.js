import { createAsyncThunk } from '@reduxjs/toolkit';
import FETCH_BOOK_URL from '../../../../http-common';
import { loadBooks } from '../books';

const GET_BOOKS = 'books/GET_BOOK';

const getBooks = createAsyncThunk(GET_BOOKS, async (_, thunkAPI) => {
  const response = await fetch(FETCH_BOOK_URL, {
    method: 'GET',
  });
  const responseJSON = await response.json();

  thunkAPI.dispatch(loadBooks(responseJSON));
  return responseJSON;
});

export default getBooks;
