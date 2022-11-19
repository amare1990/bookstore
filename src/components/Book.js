import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deleteBook from '../redux/books/api/DeleteBook';
// import Categories from './Categories';
// import retrieveBooks from '../redux/books/api/RetrieveBook';

// const checkStatusText = document.querySelector('.check-status-categories');
// const bookCard = document.querySelector('.book-card');
// bookCard.append(checkStatusText);

const Book = () => {
  const bookArray = useSelector((state) => state.books);
  // console.log(bookArray);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(deleteBook(id));
  };
  /*  useEffect(() => {
    dispatch(retrieveBooks(books));
  }, [dispatch]); */
  // books.map((book) => console.log(book));
  return (
    <>
      { bookArray.map((book) => (
        <li key={book.item_id} className="book-card">
          <div className="book-description">
            <h4 className="book-category">{book.category}</h4>

            <h2 className="book-title">{book.title}</h2>

            <h6 className="book-author">{book.author}</h6>

            <div className="btn-group">
              <button type="button" className="btn comment">Comments</button>
              <div className="vertical-divider" />
              <button type="button" onClick={() => handleRemove(book.item_id)} className="btn remove">
                Remove
              </button>
              <div className="vertical-divider" />
              <button type="button" className="btn edit">
                Edit
              </button>
            </div>
          </div>
          <div className="progress">
            <div className="progress-circle-container">
              <div className="progress-circular" />
            </div>
            <div className="percentage-status">
              <span className="precentage">87%</span>
              <p className="status">Completed</p>
            </div>
          </div>
          <div className="vertical-bar-progress" />
          <div className="chapter-card">
            <h3 className="current-chapter">Current chapter</h3>
            <p className="Chapter">Chapter Seven</p>
            <button type="button" className="update-chapter-btn">Update progress</button>
          </div>
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
