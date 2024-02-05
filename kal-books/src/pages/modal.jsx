import React from 'react';

function Modal({ book, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <p>Author: {book.authors.join(", ")}</p>
        <p>Published Date: {book.publishedDate}</p>
      </div>
    </div>
  );
}

export default Modal;