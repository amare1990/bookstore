import React from 'react';
import { useSelector } from 'react-redux';

const Book = () => {
  // const { books } = this.props;
  const books = useSelector((state) => state.books);
  return (
    <>

      { books.map((book) => (
        <li key={book.id}>
          {book.title}
          {' '}
          {book.author}
          {' '}
          <button type="button">Remove</button>
        </li>
      ))}

    </>
  );
};

Book.defaultProps = {
  books: [],
};

/* Book.propTypes = {
  books: Number,
}; */

export default Book;
