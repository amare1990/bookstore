// Constatnts
const CHECK_STATUS = 'bookstore/src/redux/categories/checkStatus';

const initialState = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// reducers

export default function checkStatusReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}
