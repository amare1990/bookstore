import { createAsyncThunk } from '@reduxjs/toolkit';
import url from '../../../http-common';
import { loadBook } from '../books';

const RETRIEVE_BOOK = 'books/loadBook';

const retrieveBook = createAsyncThunk(RETRIEVE_BOOK, async (_, thunkAPI) => {
  const response = await fetch(url, {
    method: 'GET',
  });
  const responseJSON = await response.json();
  thunkAPI.dispatch(loadBook(responseJSON));
  return responseJSON;
});
console.log(retrieveBook);
export default retrieveBook;
