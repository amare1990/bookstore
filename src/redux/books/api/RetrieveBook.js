import { createAsyncThunk } from '@reduxjs/toolkit';
import url from '../../../http-common';
import { loadBook } from '../books';

const LOAD_BOOK = 'books/loadBooks';

const retrieveBook = createAsyncThunk(LOAD_BOOK, async (_, thunkAPI) => {
  const response = await fetch(url, {
    method: 'GET',
  });
  const responseJSON = await response.json();
  thunkAPI.dispatch(loadBook(responseJSON));
  return responseJSON;
});
export default retrieveBook;
