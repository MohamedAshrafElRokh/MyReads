import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from "./components/Search";
import Home from "./components/Home";

function App() {

  const [books,setBooks] = useState([]);
  
  useEffect(()=>
  {
    BooksAPI.getAll().then(apiData =>  setBooks(apiData));
    
  }, [books]);

  const ChangeShelf = (book, shelf) =>
  {
  
    const changedBookShelf = books.map((b) => {
      if (b.id === book.id)
      {
        book.shelf = shelf
      }
      return b
    })
    setBooks(changedBookShelf)
    BooksAPI.update(book, shelf)
  }

  return (
    <Routes>
      <Route path='/' element={<Home books={books} ChangeShelf={ChangeShelf} />} />
      <Route path='/search' element={<Search books={books} ChangeShelf={ChangeShelf} />} />
    </Routes>
  );
}

export default App;
