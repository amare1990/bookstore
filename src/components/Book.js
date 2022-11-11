import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { books } = this.props;
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
  }
}

Book.defaultProps = {
  books: [],
};

Book.propTypes = {
  books: Number,
};

export default Book;
