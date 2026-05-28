'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import DetalleMovie from '@/components/DetalleMovie'
import LoadingMessage from '@/components/LoadingMessage';
import ErrorMessage from '@/components/ErrorMessage';

const DetalleContainer = ({ id }) => {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleGetMovie = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=es-ES`);
      const data = response.data;
      setItem(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("No se pudieron cargar los datos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetMovie();
  }, []);
  
  return (
    <div>
      {loading && <LoadingMessage />}
      {error && <ErrorMessage />}
      {!loading && !error && <DetalleMovie item={item} />}
    </div>
  );
};

export default DetalleContainer;