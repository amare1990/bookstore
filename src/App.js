import { Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';
// import store from './redux/configureStore';

function App() {
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
