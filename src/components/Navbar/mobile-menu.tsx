import { Dispatch, SetStateAction, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import Scrollbar from '@components/ui/Scrollbar'
import NavLink from '@components/ui/NavLink'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@utils/sanity'
import { Searchbar } from './searchbar'
import clsx from 'clsx'
import Image from 'next/image'

export default function MobileMenu({
    setNavbarActive,
    site,
}: {
    setNavbarActive: Dispatch<SetStateAction<boolean>>
    site: Site
}) {
    const [activeMenus, setActiveMenus] = useState<any>([])

    const handleArrowClick = (menuName: string) => {
        let newActiveMenus = [...activeMenus]

        if (newActiveMenus.includes(menuName)) {
            var index = newActiveMenus.indexOf(menuName)
            if (index > -1) {
                newActiveMenus.splice(index, 1)
            }
        } else {
            newActiveMenus.push(menuName)
        }

        setActiveMenus(newActiveMenus)
    }

    const ListMenu = ({
        main = false,
        dept,
        data,
        hasSubMenu = false,
        menuName,
        menuIndex,
        className = '',
    }: any) =>
        data.title && (
            <li className={`mb-0.5 ${className}`}>
                <div className="flex items-center justify-between">
                    <NavLink
                        href={data.href}
                        className={clsx(
                            'w-full relative py-3 transition duration-300 ease-in-out',
                            main ? 'font-bold text-[16px]' : 'text-sm font-normal',
                            data.hightlight && 'text-[#00863F]',
                        )}
                    >
                        <span className="block w-full" onClick={() => setNavbarActive(false)}>
                            {data.title}
                        </span>
                    </NavLink>
                    {hasSubMenu && (
                        <div
                            className="cursor-pointer w-16 md:w-20 h-8 text-lg flex-shrink-0 flex items-center justify-center"
                            onClick={() => handleArrowClick(menuName)}
                        >
                            <IoIosArrowDown
                                className={`transition duration-200 ease-in-out transform text-heading ${
                                    activeMenus.includes(menuName) ? '-rotate-180' : 'rotate-0'
                                }`}
                            />
                        </div>
                    )}
                </div>
                {hasSubMenu && (
                    <SubMenu
                        dept={dept}
                        data={data.submenu}
                        toggle={activeMenus.includes(menuName)}
                        menuIndex={menuIndex}
                    />
                )}
            </li>
        )

    const SubMenu = ({ dept, data, toggle, menuIndex }: any) => {
        if (!toggle) {
            return null
        }

        dept = dept + 1

        return (
            <ul className="pt-0.5">
                {data?.map((menu: any, index: number) => {
                    const menuName: string = `sidebar-submenu-${dept}-${menuIndex}-${index}`

                    return (
                        <ListMenu
                            dept={dept}
                            data={menu}
                            hasSubMenu={menu.subMenu}
                            menuName={menuName}
                            key={menuName}
                            menuIndex={index}
                            className={dept > 1 && 'ps-4'}
                        />
                    )
                })}
            </ul>
        )
    }

    return (
        <>
            <div className="flex flex-col justify-between w-screen h-full px-4 bg-[#FBF9F6]">
                <div className="w-full flex justify-between items-center relative ps-5 md:ps-7 flex-shrink-0 py-0.5 ">
                    <SanityImg builder={imageUrlBuilder} image={site.logo} height={35} alt="Logo" />

                    <button
                        className="flex text-2xl items-center justify-center text-gray-500 md:px-5 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
                        onClick={() => setNavbarActive(false)}
                        aria-label="close"
                    >
                        <IoClose className="text-black mt-1 md:mt-0.5" />
                    </button>
                </div>

                <div>
                    <Searchbar />
                </div>

                <Scrollbar className="menu-scrollbar flex-grow mb-auto">
                    <div className="flex flex-col py-7 px-0 lg:px-2 text-heading">
                        <ul className="mobileMenu">
                            {site.primaryMenu.map((menu, index) => {
                                const dept: number = 1
                                const menuName: string = `sidebar-menu-${dept}-${index}`

                                return (
                                    <ListMenu
                                        dept={dept}
                                        data={menu}
                                        main
                                        hasSubMenu={menu?.submenu}
                                        menuName={menuName}
                                        key={menu._key}
                                        menuIndex={index}
                                    />
                                )
                            })}

                            {site.secondaryMenu.map((menu, index) => {
                                const dept: number = 1
                                const menuName: string = `sidebar-menu-${dept}-${index}`

                                return (
                                    <ListMenu
                                        dept={dept}
                                        data={menu}
                                        hasSubMenu={menu?.submenu}
                                        menuName={menuName}
                                        key={menuName}
                                        menuIndex={index}
                                    />
                                )
                            })}
                        </ul>
                    </div>
                </Scrollbar>

                <div className="flex border-t border-[#E9EAEA] flex-col">
                    {site.emergency && (
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
                            <div className="">
                                <Image
                                    layout="intrinsic"
                                    height={16}
                                    width={16}
                                    src="/icons/user.svg"
                                    alt="user icon"
                                />
                                <span className="mx-2">Login</span>
                            </div>
                        </div>
                    )}

                    {site.contact && (
                        <div className="flex items-center text-xs w-full font-light my-2">
                            <div className="flex h-5 space-x-2 flex-1">
                                <SanityImg
                                    className="h-4 w-4"
                                    builder={imageUrlBuilder}
                                    image={site.contact.icon}
                                    height={5}
                                    alt={site.contact.title + 'icon'}
                                />
                                <a href={`maiolto:${site.contact.mail}`}>{site.contact.title}</a>
                            </div>
                            <div></div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
