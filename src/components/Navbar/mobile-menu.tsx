import { Dispatch, SetStateAction, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import {
    IoLogoInstagram,
    IoLogoTwitter,
    IoLogoFacebook,
    IoLogoYoutube,
    IoClose,
} from 'react-icons/io5'
import Scrollbar from '@components/ui/Scrollbar'
import { siteSettings } from './sitesetting'
import NavLink from '@components/ui/NavLink'
import { SanityImage, SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@utils/sanity'
import { Searchbar } from './searchbar'
import clsx from 'clsx'

const social = [
    {
        id: 0,
        link: 'https://www.facebook.com/redqinc/',
        icon: <IoLogoFacebook />,
        className: 'facebook',
        title: 'text-facebook',
    },
    {
        id: 1,
        link: 'https://twitter.com/redqinc',
        icon: <IoLogoTwitter />,
        className: 'twitter',
        title: 'text-twitter',
    },
    {
        id: 2,
        link: 'https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw',
        icon: <IoLogoYoutube />,
        className: 'youtube',
        title: 'text-youtube',
    },
    {
        id: 3,
        link: 'https://www.instagram.com/redqinc/',
        icon: <IoLogoInstagram />,
        className: 'instagram',
        title: 'text-instagram',
    },
]

export default function MobileMenu({
    setNavbarActive,
    logo,
}: {
    setNavbarActive: Dispatch<SetStateAction<boolean>>
    logo: SanityImage
}) {
    const [activeMenus, setActiveMenus] = useState<any>([])
    const { site_header } = siteSettings

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
        data.label && (
            <li className={`mb-0.5 ${className}`}>
                <div className="flex items-center justify-between">
                    <NavLink
                        href={data.path}
                        className={clsx(
                            'w-full relative py-3 transition duration-300 ease-in-out',
                            main ? 'font-bold text-[16px]' : 'text-sm font-normal',
                            data.color && 'text-[#00863F]',
                        )}
                    >
                        <span className="block w-full" onClick={() => setNavbarActive(false)}>
                            {data.label}
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
                        data={data.subMenu}
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
                    <SanityImg builder={imageUrlBuilder} image={logo} height={35} alt="Logo" />

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
                            {site_header.primaryMenu.map((menu, index) => {
                                const dept: number = 1
                                const menuName: string = `sidebar-menu-${dept}-${index}`

                                return (
                                    <ListMenu
                                        dept={dept}
                                        data={menu}
                                        main
                                        menuName={menuName}
                                        key={menuName}
                                        menuIndex={index}
                                    />
                                )
                            })}

                            {site_header.secondaryMenu.map((menu, index) => {
                                const dept: number = 1
                                const menuName: string = `sidebar-menu-${dept}-${index}`

                                return (
                                    <ListMenu
                                        dept={dept}
                                        data={menu}
                                        hasSubMenu={menu.subMenu}
                                        menuName={menuName}
                                        key={menuName}
                                        menuIndex={index}
                                    />
                                )
                            })}
                        </ul>

                        {/* <ul className="mobileMenu">
                            {site_header.mobileMenu.map((menu, index) => {
                                const dept: number = 1
                                const menuName: string = `sidebar-menu-${dept}-${index}`

                                return (
                                    <ListMenu
                                        dept={dept}
                                        data={menu}
                                        hasSubMenu={menu.subMenu}
                                        menuName={menuName}
                                        key={menuName}
                                        menuIndex={index}
                                    />
                                )
                            })}
                        </ul> */}
                    </div>
                </Scrollbar>

                <div className="flex items-center justify-center bg-white border-t border-gray-100 px-7 flex-shrink-0 space-s-1">
                    {social?.map((item, index) => (
                        <a
                            href={item.link}
                            className={`text-heading p-5 opacity-60 first:-ms-4 transition duration-300 ease-in hover:opacity-100 ${item.className}`}
                            target="_blank"
                            key={index}
                        >
                            <span className="sr-only">{item.title}</span>
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}
