'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";


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

    const scroll = (dir) => {
    const container = document.getElementById(`carousel-${sectionId}`);

    const amount = 400;

    container.scrollBy({
        left: dir === 1 ? amount : -amount,
        behavior: "smooth",
    });
    };

    return (
        <div className="pt-12 w-[90%]">
            <section id={sectionId}>
                <div className="flex justify-between">
                    <h2 className="font-medium text-[1.4em] sm:text-[1.6em] md:text-[1.8em] font-[Oswald]">{title}</h2>
                    
                    <div className="flex gap-2 justify-end">
                        <button onClick={() => scroll(-1)}><ChevronLeft /></button>
                        <button onClick={() => scroll(1)}><ChevronRight /></button>
                    </div>
                </div>

                <div id={`carousel-${sectionId}`} className='flex gap-6 overflow-x-auto scroll-smooth pt-4 justify-between [&::-webkit-scrollbar]:hidden'>
                    {items.map((movie, index) => (
                        <div key={index} className="flex-shrink-0 w-[150px] sm:w-[170px] md:w-[180px]">
                            <MovieCard key={index} movie={movie} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default MovieSection