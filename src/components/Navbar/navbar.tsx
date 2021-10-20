import { SanityImage, SanityImg } from 'sanity-react-extra'
// import { imageUrlBuilder } from '../utils/sanity'
import React, { useState } from 'react'
import clsx from 'clsx'
// import { useWindowScroll } from '../lib/hooks'
import { useRouter } from 'next/router'
import { useWindowScroll } from 'src/libs/hooks'
import { imageUrlBuilder } from '@utils/sanity'

export function Navbar({ logo }: { logo: SanityImage }) {
    const [navbarOpen, setNavbarOpen] = useState(false)
    // const [isActive, setIsActive] = useState(false)
    const scroll = useWindowScroll()?.y ?? 0
    const router = useRouter()
    return (
        <div
            className={clsx(
                'fixed w-full py-4 z-75 top-0 transition-all duration-300 ease-out',
                navbarOpen || scroll ? 'bg-white shadow-md' : 'bg-transparent',
            )}
        >
            <nav className="page-container mx-auto flex flex-wrap justify-between items-start">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                        href="/#home"
                        onClick={(ev) => {
                            if (router.pathname == '/') {
                                ev.preventDefault()
                                document
                                    .querySelector('#home')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }
                        }}
                    >
                        <SanityImg
                            builder={imageUrlBuilder}
                            image={logo}
                            height={120}
                            className={clsx('transition-all w-auto', scroll ? 'h-10' : 'h-16')}
                        />
                    </a>
                    <button
                        className="lg:hidden outline-none focus:outline-none"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <img src="burger.svg" width={25} height={25} />
                    </button>
                </div>
                <div
                    className={clsx(
                        'lg:flex flex-grow justify-center',
                        navbarOpen ? 'flex' : 'hidden',
                    )}
                >
                    <ul className="flex flex-col lg:flex-row items-center list-none lg:ml-auto mt-4 md:mt-0"></ul>
                </div>
            </nav>
        </div>
    )
}
