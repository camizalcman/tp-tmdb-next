import Image from 'next/image';

const Hero = () => {
  return (
    <div id="inicio" className='relative w-full h-screen'>
        <Image className="object-cover" src='/img/cine.jpg' fill alt='Cine'/>
        
        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[#000105] via-[rgba(5,8,31,0.85)] to-transparent z-0" />
        
        <div className='absolute inset-0 z-10 flex flex-col items-center px-12 justify-start text-white pt-40'>
            <h1 className='font-medium text-[3em] sm:text-[3.3em] md:text-[4em] font-[Oswald]'>PIXEL CINEMA</h1>
            <h2 className='text-center mb-4 font-medium text-[1.4em] sm:text-[1.6em] md:text-[1.6em] '>Descubrí películas, tendencias y estrenos en un solo lugar.</h2>
            <button className='inline-block px-16 py-3 text-sm font-medium text-white rounded-xl mt-4 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 border border-white/30 transition-all duration-300 hover:border-white/80 hover:bg-zinc-700 hover:shadow-lg hover:scale-98'><a href="#tendencia">Ver películas</a></button>
        </div>
    </div>
  )
}

export default Hero