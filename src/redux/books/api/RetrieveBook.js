import { createAsyncThunk } from '@reduxjs/toolkit';
import FETCH_BOOK_URL from '../../../../http-common';
import { loadBooks } from '../books';

const RETRIVE_BOOKS = 'books/RETRIEVE_BOOK';

const retrieveBooks = createAsyncThunk(RETRIVE_BOOKS, async (_, thunkAPI) => {
  const response = await fetch(FETCH_BOOK_URL, {
    method: 'GET',
  });
  const responseJSON = await response.json();

  thunkAPI.dispatch(loadBooks(responseJSON));
  return responseJSON;
});

export default retrieveBooks;
