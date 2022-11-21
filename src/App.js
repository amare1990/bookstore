import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';
import retrieveBook from './redux/books/api/RetrieveBook';

function App() {
  const dispatch = useDispatch();
  dispatch(retrieveBook());
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
