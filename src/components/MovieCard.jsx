import Link from "next/link"
import Image from "next/image"
import { Calendar, Star, ChevronRight, Heart } from "lucide-react";
import { useAppContext } from '@/contexts/AppContext'

const MovieCard = ({ movie }) => {
    const { favoritos, handleAddFavorite, setFavoritos } = useAppContext()

    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const formatDate = (date) => {
    if (!date) return "";
    const [y, m, d] = date.split("-");
    return `${d}-${m}-${y}`;
    };

    //esFavorito es true o false
    const esFavorito = favoritos.some(fav => fav.id === movie.id)
    
    const handleFavorito = () => {
        if (esFavorito) {
            //si ya es favorito, lo saco del array
            setFavoritos(favoritos.filter(fav => fav.id !== movie.id))
        } else {
            //si no es favorito, lo agrego al array
            handleAddFavorite(movie)
        }
    }


    return (
        <div className="group relative w-full cursor-pointer">
            <div className="relative overflow-hidden rounded-md aspect-[2/3]">
                <Link href={`/detalle/${movie.id}`}>   
                    <Image className='group-hover:scale-[1.04] transition-all duration-300 rounded-md' src={imageUrl} alt={movie.title} width={200} height={300} />
                    
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                        <Star size={14} className="text-yellow-400" fill="currentColor" />{movie.vote_average.toFixed(1)}
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

                    <button className="absolute bottom-3 left-3 flex items-center gap-1 text-white cursor-pointer z-20">Ver más
                        <ChevronRight size={18}className="transition-transform duration-300 group-hover:translate-x-1"/>
                    </button>
                </Link>

                <button
                    onClick={handleFavorito}
                    className="absolute top-2 left-2 z-20 p-1 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                >
                    <Heart
                        size={18}
                        className={esFavorito ? "text-red-500" : "text-white"}
                        fill={esFavorito ? "currentColor" : "none"}
                    />
                </button>    
            </div>
            
            <h3 className="mt-2 font-semibold text-base sm:text-base md:text-lg line-clamp-1">{movie.title}</h3>
            
            <div className="flex items-center gap-1 text-xs sm:text-sm md:text-base">
                <Calendar size={14} />
                <p>{movie.release_date.split('-').reverse().join('/')}</p>
            </div>
            
        </div>
    )
}

export default MovieCard