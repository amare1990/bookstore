// Constants
const ADD_BOOK = 'bookstore/src/redux/books/addBook';
const REMOVE_BOOK = 'bookstore/src/redux/books/removeBOOK';
const LOAD_BOOKS = 'books/LOAD_BOOKS';

// Action creators
/* const initialBook = [
  { id: 0, title: 'Operating Systems', author: 'xxx' },
  { id: 1, title: 'Computer Architecture', author: 'william Stallings' },
  { id: 2, title: 'Software Engineering', author: 'Robert Mitchil' },
]; */

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const loadBooks = (books) => ({
  type: LOAD_BOOKS,
  books,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

// reducers
export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
      /* return state.slice(0, action.payload)
      .concat(state.slice(action.payload + 1, state.length)); */
    case LOAD_BOOKS:
      const bookList = [];
      Object.entries(action.books).forEach(([key, value]) => bookList.push({
        item_id: key,
        title: value[0].title,
        author: value[0].author,
        category: value[0].category,
      }));
      return [...bookList];
    default:
      return state;
  }
}
