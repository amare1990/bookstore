import { createAsyncThunk } from '@reduxjs/toolkit';
import FETCH_BOOK_URL from '../../../../http-common';
import { removeBook } from '../books';

const DELETE_BOOK = 'books/DELETE_BOOK';

const deleteBook = createAsyncThunk(DELETE_BOOK, async (itemId, thunkAPI) => {
  const response = await fetch(`${FETCH_BOOK_URL}/${itemId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: itemId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseJSON = await response.text();
  thunkAPI.dispatch(removeBook(itemId));
  return responseJSON;
});

export default deleteBook;
