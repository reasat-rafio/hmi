import { Points } from '@components/common/points'
import { imageUrlBuilder, PortableText } from '@utils/sanity'
import React from 'react'
import { SanityImage, SanityImg } from 'sanity-react-extra'
import { useWindowSize } from 'src/libs/hooks'

interface AdmisssionProps {
    type: string
    additionalInfo: PortableText[]
    description: PortableText[]
    points: Point[]
    primaryImg: SanityImage
    secondaryImg: SanityImage
    tagline: string
    title: string
}

export const Admisssion: React.FC<AdmisssionProps> = ({
    additionalInfo,
    title,
    tagline,
    description,
    points,
    primaryImg,
    secondaryImg,
}) => {
    const windowWidth = useWindowSize()?.width ?? 0

    //

    return (
        <section className="w-full relative">
            <div
                className="absolute left-0 top-0 h-full w-full !bg-[#1E4372] z-10"
                style={{
                    clipPath:
                        windowWidth > 1280
                            ? `polygon(6% 0, 98% 0, 98% 93%, 6% 66%)`
                            : `polygon(0 0, 100% 0, 100% 93%, 0 86%)`,
                }}
            />

            <div className="container mr-auto ml-auto grid grid-cols-12 relative z-20  pt-16 xl:ml-5 box-border px-5">
                <div className="xl:col-span-7 col-span-12 relative xl:block hidden">
                    <SanityImg
                        className="w-[90%] rounded-[8px]"
                        builder={imageUrlBuilder}
                        image={primaryImg}
                        width={windowWidth > 1280 ? 1000 : 700}
                        alt="img"
                    />
                    <SanityImg
                        className="absolute bottom-0 right-0 rounded-[8px] transform translate-y-[20%]"
                        builder={imageUrlBuilder}
                        image={secondaryImg}
                        width={windowWidth > 1280 ? 350 : windowWidth > 720 ? 200 : 150}
                        alt="img"
                    />
                </div>
                <div className="xl:col-span-5 col-span-12 flex flex-col space-y-5 2xl:px-16 xl:px-8 xl:mt-0 mt-5">
                    <h2 className=" font-light capitalize text-sm text-white xl:text-left text-center">
                        {title}
                    </h2>
                    <h4 className="xl:text-left text-center text-[32px] text-white ">{tagline}</h4>

                    <p className="font-normal lg:text-lg text-base text-white xl:text-left text-center">
                        <PortableText blocks={description} />
                    </p>

                    <div className="relative xl:hidden block">
                        <SanityImg
                            className="w-[90%] rounded-[8px]"
                            builder={imageUrlBuilder}
                            image={primaryImg}
                            width={windowWidth > 1280 ? 1000 : 700}
                            alt="img"
                        />
                        <SanityImg
                            className="absolute bottom-0 right-0 rounded-[8px] transform translate-y-[20%]"
                            builder={imageUrlBuilder}
                            image={secondaryImg}
                            width={windowWidth > 1280 ? 350 : windowWidth > 720 ? 200 : 150}
                            alt="img"
                        />
                    </div>

                    <div className="bg-[#2F578A] rounded-[8px]">
                        <p className="font-normal lg:text-xs text-sm text-white p-5">
                            <PortableText blocks={additionalInfo} />
                        </p>
                    </div>

                    <div className="flex flex-col rounded-lg __shadow overflow-hidden">
                        {points.map((point) => (
                            <Points key={point._key} {...point} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
