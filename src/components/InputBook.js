import React from "react";

class InputBook extends React.Component {
  render() {
    return (
      <form className="input-book">
        <input type="text" className="book-title input-field" placeholder="Book title" />
        <input type="text" className="author input-field" placeholder="author" />
        <button type="button"> Check status </button>
      </form>
    );
  }
}

export default InputBook;