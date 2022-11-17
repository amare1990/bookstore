// Constants
const ADD_BOOK = 'bookstore/src/redux/books/addBook';
const REMOVE_BOOK = 'bookstore/src/redux/books/removeBOOK';
const RETRIEVE_BOOKS = 'books/RETRIEVE_BOOKS';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const retrieveBooks = (books) => ({
  type: RETRIEVE_BOOKS,
  books,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

// reducer
export default function booksReducer(state = [], action) {
  const bookArray = [];
  const { books } = action;
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case RETRIEVE_BOOKS:
      Object.keys(books).forEach((key) => {
        bookArray.push({
          item_id: key,
          title: books[key][0].title,
          author: books[key][0].author,
          category: books[key][0].category,
        });
      });
      return [...bookArray];
    default:
      return state;
  }
}
