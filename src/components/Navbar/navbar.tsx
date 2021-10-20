import { SanityImg } from 'sanity-react-extra'
import React from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useWindowScroll } from 'src/libs/hooks'
import { imageUrlBuilder } from '@utils/sanity'
import NavLink from '@components/ui/NavLink'
import { IoIosArrowDown } from 'react-icons/io'
import { Searchbar } from './searchbar'
import Image from 'next/image'

export function Navbar({ site }: { site: Site }) {
    const scroll = useWindowScroll()?.y ?? 0
    const router = useRouter()

    const ListMenu = ({
        main = false,
        data,
        hasSubMenu = false,
        className = '',
        sub = false,
    }: any) =>
        data.title && (
            <li
                className={clsx(
                    className,
                    'list-none relative group',
                    sub && 'py-3 w-full cursor-pointer',
                    scroll ? ' mx-3' : ' mx-1',
                )}
            >
                <div className="flex items-center justify-between ">
                    <NavLink
                        href={data.href}
                        className={clsx(
                            'relative transition duration-300 ease-in-out',
                            main ? 'font-bold 2xl:text-lg text-sm' : 'text-xs font-normal',
                            data.hightlight && 'text-[#00863F]',
                        )}
                    >
                        <span className="block w-full">{data.title}</span>
                    </NavLink>
                    {hasSubMenu && (
                        <div className="cursor-pointer   text-lg flex-shrink-0 flex items-center justify-center">
                            <IoIosArrowDown
                                className={`transition duration-200 ease-in-out transform text-heading h-2 w-2 mx-2 rotate-0 group-hover:-rotate-180`}
                            />
                        </div>
                    )}
                </div>
                {hasSubMenu && <SubMenu data={data.submenu} />}
            </li>
        )

    const SubMenu = ({ data }: any) => {
        return (
            <ul className="absolute hidden text-gray-700 pt-2 group-hover:block  bg-[#909498] text-white rounded-[8px] overflow-hidden transition-all duration-150 w-[200%]">
                {data?.map((menu: any, index: number) => {
                    return (
                        <ListMenu
                            key={menu._key}
                            data={menu}
                            hasSubMenu={menu.subMenu}
                            menuIndex={index}
                            sub
                        />
                    )
                })}
            </ul>
        )
    }

    return (
        <div
            className={clsx(
                'fixed w-full py-4 z-40 top-0 transition-all duration-300 ease-out xl:block hidden  bg-white',
                scroll ? 'bg-white shadow-md' : 'bg-transparent',
            )}
        >
            <nav className="container mx-auto px-20 flex justify-between items-start h-full ">
                <div className="w-auto static block justify-start">
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
                            image={site.logo}
                            height={120}
                            className={clsx('transition-all w-auto', scroll ? 'h-10' : 'h-16')}
                        />
                    </a>
                </div>

                <div className="h-full flex flex-col justify-center items-center  my-auto">
                    <div className="flex ">
                        {site.primaryMenu.map((menu, index) => {
                            return (
                                <ListMenu
                                    data={menu}
                                    main
                                    hasSubMenu={menu?.submenu}
                                    key={menu._key}
                                    menuIndex={index}
                                />
                            )
                        })}
                    </div>
                    <div className={clsx(scroll ? 'hidden ' : 'flex mt-3  my-auto items-center ')}>
                        {site.secondaryMenu.map((menu, index) => {
                            return (
                                <ListMenu
                                    data={menu}
                                    hasSubMenu={menu?.submenu}
                                    key={menu._key}
                                    menuIndex={index}
                                />
                            )
                        })}
                    </div>
                </div>

                <div className={clsx('flex flex-grow justify-center')}>
                    <ul className="flex flex-col items-center list-none ml-auto mt-4 md:mt-0  transition-all duration-150">
                        <div
                            className={clsx(
                                ' w-full transition-all duration-150',
                                scroll ? 'hidden' : 'block',
                            )}
                        >
                            <div className="flex items-center text-xs w-full font-light my-2">
                                <div className="flex h-5 space-x-2 flex-1">
                                    <SanityImg
                                        className="h-4 w-4"
                                        builder={imageUrlBuilder}
                                        image={site.emergency.icon}
                                        height={5}
                                        alt={site.emergency.title + 'icon'}
                                    />
                                    <span>{site.emergency.title}</span>
                                    <span className="font-bold text-[#00863F]">
                                        {site.emergency.number}
                                    </span>
                                </div>
                                <div className="flex">
                                    <Image
                                        layout="intrinsic"
                                        height={16}
                                        width={16}
                                        src="/icons/user.svg"
                                        alt="user icon"
                                    />
                                    <span className="mx-2">Login</span>
                                </div>
                                <div className="flex h-5 space-x-2 flex-1">
                                    <SanityImg
                                        className="h-4 w-4"
                                        builder={imageUrlBuilder}
                                        image={site.contact.icon}
                                        height={5}
                                        alt={site.contact.title + 'icon'}
                                    />
                                    <a href={`maiolto:${site.contact.mail}`}>
                                        {site.contact.title}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-5 ">
                            <div className="">
                                <Searchbar />
                            </div>

                            <button className="px-5 py-3 text-white text-xs font-semibold bg-[#00863F] rounded-[8px]">
                                Make appointment
                            </button>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
