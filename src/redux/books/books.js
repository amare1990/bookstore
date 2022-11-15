// Constants
const ADD_BOOK = 'bookstore/src/redux/books/addBook';
const REMOVE_BOOK = 'bookstore/src/redux/books/removeBOOK';

// reducers
export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
}

// Action creators

export const addBook = () => ({
  type: ADD_BOOK,
  book: { id: 0, title: 'Operating Systems', author: 'xxx' },
});

export const removeBook = () => ({
  type: REMOVE_BOOK,
  payload: 'Removed',
});
