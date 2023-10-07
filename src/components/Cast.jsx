import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // Tutaj możesz wykonać zapytanie do API themoviedb.org, aby pobrać informacje o zespole aktorskim
    // na podstawie movieId i ustaw je w stanie cast.
  }, [movieId]);

  return (
    <div>
      <h2>Zespół aktorski</h2>
      {/* Wyświetl informacje o zespole aktorskim */}
    </div>
  );
}

export default Cast;
