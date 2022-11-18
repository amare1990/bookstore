// Constants
const ADD_BOOK = 'bookstore/src/redux/books/addBook';
const REMOVE_BOOK = 'bookstore/src/redux/books/removeBOOK';
const RETRIEVE_BOOKS = 'books/RETRIEVE_BOOKS';

const initialState = [];

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const loadBooks = (books) => ({
  type: RETRIEVE_BOOKS,
  books,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

// reducer
export default function booksReducer(state = initialState, action) {
  const bookArray = [];
  /* const { books } = action; */
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case RETRIEVE_BOOKS:
      Object.entries(action.books).forEach(([key, value]) => bookArray.push({
        item_id: key,
        title: value[0].title,
        author: value[0].author,
        category: value[0].category,
      }));
      return [...bookArray];
    default:
      return state;
  }
}
