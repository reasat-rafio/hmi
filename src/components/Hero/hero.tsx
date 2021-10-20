import React from 'react'
import { SanityImage, SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder, PortableText } from '../../../utils/sanity'
import Link from '@components/ui/Link'

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
        <section className="w-full relative h-full pt-28">
            <div
                className="absolute left-0 top-0 h-full w-full !bg-gray z-10 block xl:hidden"
                style={{ clipPath: ` polygon(0 0, 100% 0, 100% 93%, 0 99%` }}
            />

            <div className="relative container xl:ml-auto xl:mr-0 ml-auto mr-auto xl:px-0 px-3">
                <div
                    className="absolute left-0 top-0 h-full w-1/2 !bg-gray z-10 hidden xl:block"
                    style={{ clipPath: ` polygon(0 1%, 100% 0, 100% 81%, 0% 100%)` }}
                />
                <div className="relative xl:pl-10 xl:pr-0 pl-5 pr-5 grid grid-cols-12 xl:gap-10 z-20 ">
                    <div className="xl:col-span-3 col-span-12 h-full my-auto flex flex-col justify-center items-center font-light">
                        <h1 className="text-2xl text-center xl:text-left xl:text-[40px] leading-relaxed text-ebony ">
                            {title}
                        </h1>
                        <h4 className="text-bright-gray text-center xl:text-left xl:text-xl text-base my-2">
                            {tagline}
                        </h4>
                    </div>
                    <div className="xl:col-span-9 col-span-12">
                        <div>
                            <SanityImg
                                className="w-full h-full rounded-[8px]"
                                builder={imageUrlBuilder}
                                image={image}
                                height={600}
                                alt="Hero Image"
                            />
                        </div>

                        <div className="max-w-2xl xl:p-7 p-3 xl:ml-auto transform xl:-translate-y-1/2 -translate-y-1/4 bg-white rounded-sm font-normal box-border mx-2 ">
                            <p className="max-w-md xl:text-sm text-xs leading-relaxed">
                                <PortableText blocks={description} />
                                <Link href={button.href}>{button.title}</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
