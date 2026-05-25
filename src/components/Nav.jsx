import Image from 'next/image';

const Nav = () => {

    return (
        <div className='bg-black py-3 px-4 flex justify-between items-center fixed top-0 left-0 w-full z-50'>
            
            <div className='text-sm'>
                <Image src={'/img/logo.png'} width={100} height={100} alt='logo Cine' className="w-12 h-auto"/>
            </div>

            <nav>       
                <ul className='flex gap-6 text-base font-medium sm:gap-8 text-white'>
                    <li><a href="/#tendencia" className='text-white/80 transition-all duration-100 hover:text-white hover:font-semibold'>En tendencia</a></li>
                    <li><a href="/#populares" className='text-white/80 transition-all duration-100 hover:text-white hover:font-semibold'>Populares</a></li>
                    <li><a href="/#mejorPuntuadas" className='text-white/80 transition-all duration-100 hover:text-white hover:font-semibold'>Mejor puntuadas</a></li>
                    <li><a href="/#cartelera" className='text-white/80 transition-all duration-100 hover:text-white hover:font-semibold'>Cartelera</a></li>
                    <li><a href="/#estrenos" className='text-white/80 transition-all duration-100 hover:text-white hover:font-semibold'>Estrenos</a></li> 
                </ul>
            </nav>

            <div className='text-base font-medium sm:gap-8 text-white pr-4'>Favoritos</div>

        </div>
    )
}

export default Nav