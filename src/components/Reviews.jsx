import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Tutaj możesz wykonać zapytanie do API themoviedb.org, aby pobrać recenzje filmu
    // na podstawie movieId i ustaw je w stanie reviews.
  }, [movieId]);

  return (
    <div>
      <h2>Recenzje</h2>
      {/* Wyświetl recenzje */}
    </div>
  );
}

export default Reviews;
