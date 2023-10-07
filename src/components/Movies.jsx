import React, { useState } from 'react';

function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Tutaj możesz wykonać zapytanie do API themoviedb.org, aby wyszukać filmy na podstawie searchQuery
    // i ustaw je w stanie searchResults.
  };

  return (
    <div>
      <h2>Wyszukiwanie filmów</h2>
      <input
        type="text"
        placeholder="Wyszukaj film"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Szukaj</button>
      {/* Wyświetl wyniki wyszukiwania */}
    </div>
  );
}

export default Movies;
