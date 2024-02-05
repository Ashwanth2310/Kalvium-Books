import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './modal';
import './Home.css';

function App() {
  const [data, setData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
      .then(res => {
        setData(res.data.books);
      })
      .catch(err => {
        console.log("Error fetching books:", err);
      });
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} onClick={() => handleBookClick(item)} className="book-container">
          <img src={item.imageLinks.smallThumbnail} alt={item.title} className="book-cover" />
        </div>
      ))}
      {selectedBook && (
        <Modal book={selectedBook} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
