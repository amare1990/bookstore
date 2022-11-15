// Constants
const ADD_BOOK = 'bookstore/src/redux/books/addBook';
const REMOVE_BOOK = 'bookstore/src/redux/books/removeBOOK';

// Action creators
initialBook = [
  {id: 0, title: 'Operating Systems', author: 'xxx'}, 
  {id: 1, title: 'Computer Architecture', author: 'william Stallings'},
  {id: 2, title: 'Software Engineering', author: 'Robert Mitchil'}
]

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id
});

// reducers
export default function booksReducer(state = initialBook, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      // return state.filter((book) => book.id !== action.book.id);
      return [...state.slice(0, action.payload), ...state.slice(action.payload+1)];
    default:
      return state;
  }
}