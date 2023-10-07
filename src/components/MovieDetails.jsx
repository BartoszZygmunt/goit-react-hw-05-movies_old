import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    // Tutaj możesz wykonać zapytanie do API themoviedb.org, aby pobrać szczegóły filmu na podstawie movieId
    // i ustaw je w stanie movieDetails.
  }, [movieId]);

  return (
    <div>
      <h2>Szczegóły filmu</h2>
      {/* Wyświetl szczegóły filmu */}
    </div>
  );
}

export default MovieDetails;
