import React from 'react';
import Book from './Book';
import InputBook from './InputBook';
import NavBar from './NavBar';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-wrapper">
        <NavBar />
        <ul className="books-wrapper">
          <Book />
        </ul>

        <div className="end-of-book-lists-divider" />

        <InputBook />

      </div>
    );
  }
}

export default Books;
