import MobileMenu from '../mobile-menu'
import { Drawer } from '@components/common/drawer/drawer'
import { FiMenu } from 'react-icons/fi'
import { Dispatch, SetStateAction } from 'react'
import { SanityImage, SanityImg } from 'sanity-react-extra'
import NavLink from '@components/ui/NavLink'
import { imageUrlBuilder } from '@utils/sanity'

const BottomNavigation: React.FC<{
    setNavbarActive: Dispatch<SetStateAction<boolean>>
    navbarActive: boolean
    logo: SanityImage
}> = ({ setNavbarActive, navbarActive, logo }) => {
    function handleMobileMenu() {
        setNavbarActive(true)
    }
    function closeSidebar() {
        setNavbarActive(false)
    }

    const dir = 'ltr'
    const contentWrapperCSS = dir === 'ltr' ? { left: 0 } : { right: 0 }

    return (
        <>
            <div className="md:hidden fixed top-0 flex items-center justify-between shadow-bottom Navigation text-gray-700 body-font  w-full h-14 sm:h-16 px-5 z-40 bg-[#FBF9F6]">
                <NavLink href="/">
                    <SanityImg
                        className=""
                        builder={imageUrlBuilder}
                        image={logo}
                        height={35}
                        alt="Logo"
                    />
                </NavLink>

                <button className="px-5 py-3 text-white text-xs font-semibold bg-[#00863F] rounded-[8px]">
                    Make appointment
                </button>

                <button
                    aria-label="Menu"
                    className="menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
                    onClick={handleMobileMenu}
                >
                    <FiMenu />
                </button>
            </div>
            <Drawer
                placement={'left'}
                open={navbarActive}
                onClose={closeSidebar}
                handler={false}
                showMask={true}
                level={null}
                contentWrapperStyle={contentWrapperCSS}
            >
                <MobileMenu logo={logo} setNavbarActive={setNavbarActive} />
            </Drawer>
        </>
    )
}

export default BottomNavigation
