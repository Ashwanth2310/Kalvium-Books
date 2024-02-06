import React from 'react';
import './modal.css'; 

function Modal({ book, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="book-details">
          <div className="book-image">
            <img src={book.imageLinks.thumbnail} alt={book.title} />
          </div>
          <div className="book-info">
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <p>Author: {book.authors.join(", ")}</p>
            <p>Published Date: {book.publishedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
