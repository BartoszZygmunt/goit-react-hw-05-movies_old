import React, { useEffect, useState } from 'react';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    // Tutaj możesz wykonać zapytanie do API themoviedb.org, aby pobrać listę popularnych filmów
    // i ustawić ją w stanie trendingMovies.
  }, []);

  return (
    <div>
      <h2>Popularne filmy dzisiaj</h2>
      {/* Wyświetl listę popularnych filmów */}
    </div>
  );
}

export default Home;
