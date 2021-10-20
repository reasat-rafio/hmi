import NextLink, { LinkProps as NextLinkProps } from 'next/link'

const NavLink: React.FC<NextLinkProps & { className?: string }> = ({
    href,
    children,
    ...props
}) => {
    return (
        <NextLink href={href}>
            <a {...props}>{children}</a>
        </NextLink>
    )
}

export default NavLink
