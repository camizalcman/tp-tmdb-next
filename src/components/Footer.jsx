import Image from "next/image"

const Footer = () => {

    return (
        <footer className='bg-[#000105] pt-24 pb-12 px-6'>

            <div className='max-w-7xl mx-auto flex fflex-row justify-between items-start gap-12'>

                
                <div className='flex flex-col items-center'>
                    
                    <Image
                        src={'/img/logo.png'}
                        width={250}
                        height={250}
                        alt='logo Cine'
                        className='w-28 sm:w-40 h-auto'
                    />

                    <h2 className='font-medium text-[1.8em] sm:text-[2em] md:text-[2.5em] font-[Oswald] text-white leading-none mt-2'>PIXEL CINEMA</h2>

                </div>

                
                <nav>
                    <ul className='flex flex-col items-start gap-4 text-neutral-300 text-sm font-medium'>
                        
                        <li>
                            <a href="/#tendencia" className='hover:text-white transition-colors'>
                                En tendencia
                            </a>
                        </li>

                        <li>
                            <a href="/#populares" className='hover:text-white transition-colors'>
                                Populares
                            </a>
                        </li>

                        <li>
                            <a href="/#mejorPuntuadas" className='hover:text-white transition-colors'>
                                Mejor puntuadas
                            </a>
                        </li>

                        <li>
                            <a href="/#cartelera" className='hover:text-white transition-colors'>
                                Cartelera
                            </a>
                        </li>

                        <li>
                            <a href="/#estrenos" className='hover:text-white transition-colors'>
                                Estrenos
                            </a>
                        </li>

                    </ul>
                </nav>

            </div>

        </footer>
    )
}

export default Footer