import React from 'react'
import { SanityImage, SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder, PortableText } from '../../../utils/sanity'
import Link from 'next/link'

interface HeroProps {
    type: string
    button: Button
    description: PortableText[]
    image: SanityImage
    tagline: string
    title: string
}

export const Hero: React.FC<HeroProps> = ({ title, image, tagline, description, button }) => {
    return (
        <div className="w-full">
            <div className="container grid grid-cols-12">
                <div className="col-span-3">
                    <h1>{title}</h1>
                    <h4>{tagline}</h4>
                </div>
                <div className="col-span-9">
                    <SanityImg
                        builder={imageUrlBuilder}
                        image={image}
                        width={500}
                        alt="Hero Image"
                    />
                    <div>
                        <p>
                            <PortableText blocks={description} />
                            <Link href={button.href}>
                                <a>{button.title}</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
