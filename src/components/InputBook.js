import React from 'react';

const InputBook = () => (
  <form className="input-book">
    <input type="text" className="book-title input-field" placeholder="Book title" />
    <input type="text" className="author input-field" placeholder="author" />
    <button type="button"> ADD BOOK </button>
  </form>
);

export default InputBook;
