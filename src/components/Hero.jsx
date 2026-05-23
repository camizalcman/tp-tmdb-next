import Image from 'next/image';

const Hero = () => {
  return (
    <div id="inicio" className='relative w-full h-screen'>
        <Image className="object-cover" src='/img/cine.jpg' fill alt='Cine'/>
        
        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[#000212] via-[rgba(5,8,31,0.85)] to-transparent z-0" />
        
        <div className='absolute inset-0 z-10 flex flex-col items-center px-12 justify-start text-white pt-40'>
            <h1 className='font-medium text-[2.5em] sm:text-[3.3em] md:text-[4em] font-[Oswald]'>PIXEL CINEMA</h1>
            <h2 className='mb-4 font-medium text-[1.8em] sm:text-[1.6em] md:text-[1.6em] '>Descubrí películas, tendencias y estrenos en un solo lugar.</h2>
            <button className='px-16 py-3 text-sm font-medium text-black transition-all duration-300 border-none rounded-xl mt-4'><a href="#recipes">Ver películas</a></button>
        </div>
    </div>
  )
}

export default Hero