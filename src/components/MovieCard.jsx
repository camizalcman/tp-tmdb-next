import Link from "next/link"
import Image from "next/image"
import { Calendar, Star } from "lucide-react";

const MovieCard = ({ movie }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const formatDate = (date) => {
    if (!date) return "";
    const [y, m, d] = date.split("-");
    return `${d}-${m}-${y}`;
    };

    return (
        <div className="group relative w-full cursor-pointer">
            <div className="relative overflow-hidden rounded-md">
                <Image className='group-hover:scale-105 transition-all duration-300  rounded-md relative overflow-hidden' src={imageUrl} alt={movie.title} width={200} height={200} />
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    <Star size={14} className="text-yellow-400" fill="currentColor" />{movie.vote_average.toFixed(1)}
                </div>
            </div>
            
            <h3 className="mt-2 font-semibold text-sm sm:text-base md:text-lg line-clamp-1">{movie.title}</h3>
            
            <div className="flex items-center gap-1">
                <Calendar size={14} />
                <p>{movie.release_date.split('-').reverse().join('/')}</p>
            </div>
            
            <Link href={`/detalle/${movie.id}`}>
                <button className="cursor-pointer mt-3 w-full py-2 rounded-md border border-[#faad55] text-white font-medium transition-all duration-300 hover:bg-[#faad55] hover:shadow-lg active:scale-95">Ver detalle</button>
            </Link>
        </div>
    )
}

export default MovieCard