import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import Image from 'next/image'

import clsx from 'clsx'

const Link: React.FC<NextLinkProps & { className?: string }> = ({ href, children, ...props }) => {
    return (
        <NextLink href={href}>
            <a
                className={clsx(
                    'flex text-copper items-center font-semibold transition-colors duration-150 text-sm group ',
                )}
                {...props}
            >
                {children}
                <div
                    className={clsx(
                        'transform flex justify-content items-center transition-all duration-150 group-hover:translate-x-1',
                    )}
                >
                    <Image
                        layout="intrinsic"
                        height={13}
                        width={23}
                        src="/icons/checvron-right.svg"
                        alt="checvron right icon"
                    />
                </div>
            </a>
        </NextLink>
    )
}

Link.displayName = 'Link'

export default Link
