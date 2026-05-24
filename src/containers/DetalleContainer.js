'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import DetalleMovie from '@/components/DetalleMovie'


const DetalleContainer = ({ id }) => {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const handleGetMovie = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
      const data = response.data;
      setItem(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setNotFound(true);
    }
  };

  useEffect(() => {
    handleGetMovie();
  }, []);
  
  return (
   <div>
      {notFound && (
        <div>
          <h2>NOT FOUND</h2>
        </div>
        )}
      {loading && <div className='w-full min-h-screen flex items-center justify-center'><p className='text-[1.5em] font-[Philosopher]'>
                    Loading...</p></div>}
      {!loading && <DetalleMovie item={item}/>}
    </div>
  );
};

export default DetalleContainer;