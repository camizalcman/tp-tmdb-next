import Link from "next/link"

const MovieCard = () => {

    return (
        <div>
            <Link href={`/detalle/${id}`}>
                <button>Ver más</button>
            </Link>
        </div>
    )
}

export default MovieCard