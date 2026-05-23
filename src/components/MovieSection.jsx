'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieSection = ({ title, endpoint, sectionId }) => {
    
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    
    const handleGetItems = async () => {
        try {
            const response = await axios.get(endpoint) //utiliza el que llega por prop
            const data = response.data.results;
            console.log(data)
            
            setItems(data);
            setLoading(false);
        } catch (error) {
            console.log('Hubo un error', error);
            setError(true);
            setErrorMsg('Hubo en error');
        }
    }

    //hace que se ejecute la funcion al montarse el componente
    useEffect(() => {
        handleGetItems();
    }, []);

    return (
        <div className="pt-12 px-12 w-full">
            <section id={sectionId}>
                <h2 className="font-medium text-[1em] sm:text-[1.6em] md:text-[1.8em] font-[Oswald]">{title}</h2>
                <div className='flex pt-4 flex-wrap justify-between'>
                    {items.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default MovieSection