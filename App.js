import React, { useState } from 'react';
import './App.css';

function App() {
  // State for storing books
  const [books, setBooks] = useState([
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      description: 'A story about the challenges of growing up.',
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A novel about racism and injustice in the American South.',
    },
  ]);

  // State for form inputs
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    description: '',
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author && newBook.description) {
      // Add the new book to the list
      setBooks([...books, newBook]);
      // Clear the form
      setNewBook({ title: '', author: '', description: '' });
    }
  };

  return (
    <div className="App">
      <h1>Book List</h1>
      
      {/* Display book cards */}
      <div className="book-list">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
            <p>{book.description}</p>
          </div>
        ))}
      </div>

      {/* Form to add new books */}
      <div className="book-form">
        <h2>Add a new book</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Author:</label>
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={newBook.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default App;
