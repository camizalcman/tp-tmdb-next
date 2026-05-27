'use client'
import { useAppContext } from '@/contexts/AppContext'
import MovieCard from '@/components/MovieCard'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function FavoritosContainer() {
    const { favoritos } = useAppContext()

    return favoritos.length === 0 ? (
        <div>
            <main className="bg-[#000105] min-h-[70vh] flex flex-col items-center justify-center gap-2 text-white">
                <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300">
                    <ChevronLeft size={18} />Volver
                </Link>
                <h1 className="text-xl font-bold">No tenés favoritos guardados</h1>
                <p className="text-sm">Agregá películas desde el inicio</p>
            </main>
        </div>
    ) : (
        <main className="pt-12 bg-[#000105] flex justify-center">
            <div className="pt-12 w-[90%] text-white">
                <section>
                    <div className="flex justify-between">
                        <h2 className="font-medium text-[1.4em] sm:text-[1.6em] md:text-[1.8em] font-[Oswald]">Favoritos ({favoritos.length})</h2>
                        
                        <div className="flex gap-2 justify-end">
                            <button onClick={() => scroll(-1)}><ChevronLeft /></button>
                            <button onClick={() => scroll(1)}><ChevronRight /></button>
                        </div>
                    </div>

                    <div className='flex gap-6 overflow-x-auto scroll-smooth pt-4 justify-start [&::-webkit-scrollbar]:hidden'>
                        {favoritos.map((movie, index) => (
                            <div key={index} className="flex-shrink-0 w-[150px] sm:w-[170px] md:w-[180px]">
                                <MovieCard key={index} movie={movie} />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}

