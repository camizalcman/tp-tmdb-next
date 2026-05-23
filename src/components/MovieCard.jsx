import Link from "next/link"
import Image from "next/image"

const MovieCard = ({ movie }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <div className="w-[15%]">
            <Image className='rounded-md' src={imageUrl} alt={movie.title} width={200} height={200} />
            <h3 className="font-bold text-[0.8em] sm:text-[1em] md:text-[1.2em] ">{movie.title}</h3>
            <p>{movie.release_date}</p>
            <p>{movie.vote_average}</p>
            <Link href={`/detalle/${movie.id}`}>
                <button>Ver detalle</button>
            </Link>
        </div>
    )
}

export default MovieCard