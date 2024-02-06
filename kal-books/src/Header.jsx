import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ setFilteredBooks }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredBooks(term);
  };

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Kalvium Books
      </Link>
      <ul>
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <Link to="/about">Register</Link>
      </ul>
    </nav>
  );
}
