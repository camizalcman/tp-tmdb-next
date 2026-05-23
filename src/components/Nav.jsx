import Image from 'next/image';

const Nav = () => {

    return (
        <div className='bg-black pt-4 pl-4 flex justify-between'>
            
            <div className='text-sm'>
                <Image src={'/img/logo.png'} width={100} height={100} alt='logo Cine' className="w-12 h-auto"/>
            </div>

            <nav>       
                <ul className='flex gap-6 text-base font-medium sm:gap-8 text-white'>
                    <li><a href="#tendencia">En tendencia</a></li>
                    <li><a href="#populares">Populares</a></li>
                    <li><a href="#mejorPuntuadas">Mejor puntuadas</a></li>
                    <li><a href="#cartelera">Cartelera</a></li>
                    <li><a href="#estrenos">Estrenos</a></li> 
                </ul>
            </nav>

            <div className='text-base font-medium sm:gap-8 text-white pr-4'>Favoritos</div>

        </div>
    )
}

export default Nav