import React from "react";

class Book extends React.Component {

  render() {
    return (
      <>
      <li>
        {this.props.books.map(book =>(book.title))}
        {this.props.books.map(book =>(book.author))}
        <button type="button">Remove</button>
      </li>
      </>
    );
  }
}

export default Book;