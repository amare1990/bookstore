import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import createBook from '../redux/books/api/CreateBook';

const InputBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(createBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };
  return (
    <div className="form-container">
      <h2 className="form-title"> ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-fields">
          <input
            className="input input-title"
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {/*  <input
            className="input input-author"
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          /> */}
        </div>
        <select
          className="input category-options"
          type="text"
          name="category"
          value={category}
          id="catgory"
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        >
          <option value="Category" selected>Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
          <option value="Computer Science">Computer Science</option>

        </select>

        <button type="submit" className="submit-btn">Add Book</button>
      </form>
    </div>
  );
};

export default InputBook;
