import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import './App.css';
import BookFinder from './features/book_finder/BookFinder'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/book-finder" element={<BookFinder />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
