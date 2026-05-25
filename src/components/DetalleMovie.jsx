
import Image from 'next/image';
import Link from 'next/link';
import {   Calendar, Star, Users, Flame, Languages, ChevronLeft } from "lucide-react";

const DetalleMovie = ({ item }) => {
    console.log(item);
    return (
        <section className='w-full min-h-screen bg-[#05081f] text-white pt-28 pb-20 px-6 relative overflow-hidden'>
            <Link href="/" className="relative z-20 inline-flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300">
                <ChevronLeft size={18} />Volver</Link>
            
            <div className='absolute inset-0 opacity-20'>

                <Image
                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                    alt={item.title}
                    fill
                    className='object-cover relative'
                />

            </div>

            
            <div className='absolute inset-0 bg-gradient-to-b from-[rgba(5,8,31,0.4)] via-[rgba(5,8,31,0.5)] to-[#000105]' />

            
            <div className='relative z-10 max-w-7xl mx-auto flex flex-col sm:flex-row gap-12'>

               
                <div className='relative w-full md:max-w-[420px]'>

                    <Image
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt={item.title}
                        width={500}
                        height={750}
                        className='w-full md:max-w-[420px] sm:h-auto rounded-2xl shadow-2xl object-cover'
                    />

                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                        <Star size={14} className="text-yellow-400" fill="currentColor" />{item.vote_average?.toFixed(1)}
                    </div>

                </div>

                
                <div className='w-full lg:w-[65%] flex flex-col gap-8'>

                    
                    <div className='flex flex-col gap-4'>

                        <h1 className='text-[2.6em] sm:text-[3em] md:text-[3.8em] font-[Oswald] leading-none'>
                            {item.title}
                        </h1>

                        <div className='flex flex-wrap gap-6 text-sm text-neutral-300'>

                             <span className='flex gap-2 items-center'>
                                <Calendar size={16} />
                                {item.release_date?.split('-').reverse().join('/')}
                            </span>

                            {/*<span className='flex gap-2 items-center'>
                                 <Star size={16} />{item.vote_average?.toFixed(1)} 
                            </span>*/}

                            <span className='flex gap-2 items-center'>
                                <Users size={16} />{item.vote_count} votos
                            </span>

                            <span className='flex gap-2 items-center'>
                                <Flame size={16} />Popularidad: {Math.round(item.popularity)}
                            </span>

                            <span className='flex gap-2 items-center'>
                                <Languages size={16} />Idioma: {item.original_language}
                            </span>

                        </div>

                    </div>

                    
                    <div className='flex flex-wrap gap-3'>

                        {item.genres?.map((genre) => (

                            <span
                                key={genre.id}
                                className='px-4 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-100 text-sm'
                            >
                                {genre.name}
                            </span>

                        ))}

                    </div>

                    {/* Sinopsis */}
                    <div className='flex flex-col gap-4'>

                        <h2 className='text-2xl font-semibold'>
                            Sinopsis
                        </h2>

                        <p className='text-neutral-300 leading-8 text-base md:text-lg max-w-3xl'>
                            {item.overview}
                        </p>

                    </div>

                </div>

            </div>

        </section>
    )}

export default DetalleMovie;