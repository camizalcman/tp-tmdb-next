'use client'
import Image from 'next/image';
import { useState } from 'react';

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
        <div className='bg-black py-3 px-4 flex justify-between items-center fixed top-0 left-0 w-full z-50'>
            
            <div className='text-sm'>
                <Image src={'/img/logo.png'} width={100} height={100} alt='logo Cine' className="w-12 h-auto"/>
            </div>

            <nav className='hidden md:block'>
                <ul className='flex gap-6 text-base font-medium sm:gap-8 text-white'>
                    <li><a href="/#tendencia" className='text-white/80 transition-all duration-100 hover:text-white hover:font-semibold'>En tendencia</a></li>
                    <li><a href="/#populares" className='text-white/80 transition-all duration-100 hover:text-white hover:font-semibold'>Populares</a></li>
                    <li><a href="/#mejorPuntuadas" className='text-white/80 transition-all duration-100 hover:text-white hover:font-semibold'>Mejor puntuadas</a></li>
                    <li><a href="/#cartelera" className='text-white/80 transition-all duration-100 hover:text-white hover:font-semibold'>Cartelera</a></li>
                    <li><a href="/#estrenos" className='text-white/80 transition-all duration-100 hover:text-white hover:font-semibold'>Estrenos</a></li> 
                </ul>
            </nav>

            <div className='hidden md:block text-base font-medium text-white pr-4'>Favoritos</div>

            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className='md:hidden flex flex-col gap-1'
            >
                <span
                    className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                        menuOpen ? 'rotate-45 translate-y-[6px]' : ''
                    }`}
                ></span>

                <span
                    className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                        menuOpen ? 'opacity-0' : ''
                    }`}
                ></span>

                <span
                    className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                        menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                    }`}
                ></span>
            </button>

        </div>

        <aside
                className={`fixed top-0 right-0 h-screen w-[75%] bg-[#0D0D0D] z-40 transition-transform duration-300 md:hidden ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <ul className='flex flex-col gap-8 pt-28 px-8 text-white text-lg font-medium'>

                    <li>
                        <a href="/#tendencia" onClick={() => setMenuOpen(false)}>
                            En tendencia
                        </a>
                    </li>

                    <li>
                        <a href="/#populares" onClick={() => setMenuOpen(false)}>
                            Populares
                        </a>
                    </li>

                    <li>
                        <a href="/#mejorPuntuadas" onClick={() => setMenuOpen(false)}>
                            Mejor puntuadas
                        </a>
                    </li>

                    <li>
                        <a href="/#cartelera" onClick={() => setMenuOpen(false)}>
                            Cartelera
                        </a>
                    </li>

                    <li>
                        <a href="/#estrenos" onClick={() => setMenuOpen(false)}>
                            Estrenos
                        </a>
                    </li>

                    <li className='pt-6 border-t border-white/10'>
                        <a href="#">Favoritos</a>
                    </li>

                </ul>
            </aside>
        </div>

    )
}

export default Nav