import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './modal';
import Header from "../Header";
import './Home.css';

function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
      .then(res => {
        setData(res.data.books);
        setFilteredData(res.data.books);
      })
      .catch(err => {
        console.log("Couldnt find your book :(", err);
      });
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  const handleFilterBooks = (searchTerm) => {
    const filtered = data.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <Header setFilteredBooks={handleFilterBooks} />
      {filteredData.map((item) => (
        <div key={item.id} onClick={() => handleBookClick(item)} className="book-container">
          <img src={item.imageLinks.smallThumbnail} alt={item.title} className="book-cover" />
          <p style={{ color: 'white', fontWeight: 'bold',fontFamily: 'Handjet',fontFamily: 'Poppins' }}>$0 (Free)</p> {/* Change the color and make it bold */}
        </div>
      ))}
      {selectedBook && (
        <Modal book={selectedBook} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Home;
