import { createAsyncThunk } from '@reduxjs/toolkit';
import url from '../../../http-common';
import { loadBooks } from '../books';

const GET_BOOKS = 'books/GET_BOOK';

const retrieveBooks = createAsyncThunk(GET_BOOKS, async (_, thunkAPI) => {
  const response = await fetch(url, {
    method: 'GET',
  });
  const responseJSON = await response.json();
  console.log(responseJSON);

  thunkAPI.dispatch(loadBooks(responseJSON));
  return responseJSON;
});

export default retrieveBooks;
