'use client'
import Hero from "@/components/Hero"
import MovieSection from "@/components/MovieSection";
import { endpoints } from "../../lib/endpoints";

const HomeContainer = () => {
    
    return (
        <div>
            <Hero></Hero>
            <main className='bg-[#000212] text-white'>
                <MovieSection title="En tendencia" sectionId="tendencia" endpoint={endpoints.trendingMovies} />
                <MovieSection title="Populares" sectionId="populares" endpoint={endpoints.popularMovies} />
                <MovieSection title="Mejor puntuadas" sectionId="mejorPuntuadas" endpoint={endpoints.topRatedMovies} />
                <MovieSection title="En cartelera" sectionId="cartelera" endpoint={endpoints.nowPlayingMovies} />
                <MovieSection title="Próximos estrenos" sectionId="estrenos" endpoint={endpoints.upcomingMovies} />
            </main>
        </div>
    )   
}

export default HomeContainer