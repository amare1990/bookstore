import { createAsyncThunk } from '@reduxjs/toolkit';
import FETCH_BOOK_URL from '../../endpoint';
import { addBook } from '../books';

const POST_BOOK = 'books/POST_BOOK';

const postBook = createAsyncThunk(POST_BOOK, async (book, thunkAPI) => {
  const response = await fetch(FETCH_BOOK_URL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseText = await response.text();

  thunkAPI.dispatch(addBook(book));
  return responseText;
});

export default postBook;
