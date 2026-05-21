import Image from 'next/image';

const Nav = () => {

    return (
        <div>
            
            <div className='text-sm'>
                <Image src={'/assets/img/cubiertos-blanco.png'} width={100} height={100} alt='logo cocina' className="w-8 h-auto"/>
            </div>

            <nav>       
                <ul className='flex gap-6 text-base font-medium sm:gap-8'>
                    <li><a href="/#tendencia">En tendencia</a></li>
                    <li><a href="/#populares">Populares</a></li>
                    <li><a href="/#mejorPunteadas">Mejor punteadas</a></li>
                    <li><a href="/#carteleras">Cartelera</a></li>
                    <li><a href="/#estrenos">Estrenos</a></li> 
                </ul>
            </nav>

        </div>
    )
}

export default Nav