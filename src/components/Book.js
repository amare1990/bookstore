import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deleteBook from '../redux/books/api/DeleteBook';
import '../App.css';

const Book = () => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(deleteBook(id));
  };
  const books = useSelector((state) => state.books);
  return (
    <div>
      { books.map((book) => (
        <li key={book.item_id} className="book-card">
          <div className="book-description">
            {book.title}
            {'   '}
            {book.author}
            {'   '}
            {book.category}
          </div>
          <div className="btn-group">
            <button type="button" className="btn comment">Comments</button>
            <button type="button" onClick={() => handleRemove(book.item_id)} className="btn remove">
              Remove
            </button>
            <button type="button" className="btn edit">
              Edit
            </button>
          </div>
          <div className="progress">
            <div className="progress-circle" />
            <div className="percentage-status">
              <span>87%</span>
              <p className="status">Completed</p>
            </div>
          </div>
          <div className="vertical-bar" />
          <div className="chapter-card">
            <h3 className="current-chapter">Current chapter</h3>
            <p className="Chapter">Chapter Seven</p>
            <button type="button" className="update-chapter-btn">Update progress</button>
          </div>
        </li>
      ))}

    </div>
  );
};

Book.defaultProps = {
  books: [],
};

/* Book.propTypes = {
  books: Number,
}; */

export default Book;
