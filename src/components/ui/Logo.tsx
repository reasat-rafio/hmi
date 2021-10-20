import Image from 'next/image'

import clsx from 'clsx'
import { siteSettings } from '@components/Navbar/sitesetting'
import NavLink from './NavLink'

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({ className, ...props }) => {
    return (
        <NavLink
            href={siteSettings.logo.href}
            className={clsx('inline-flex focus:outline-none', className)}
            {...props}
        >
            <Image
                src={siteSettings.logo.url}
                alt={siteSettings.logo.alt}
                height={siteSettings.logo.height}
                width={siteSettings.logo.width}
                layout="fixed"
                loading="eager"
            />
        </NavLink>
    )
}

export default Logo
