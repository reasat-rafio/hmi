import Link from '@components/ui/Link'
import { imageUrlBuilder, PortableText } from '@utils/sanity'
import React from 'react'
import { SanityImg } from 'sanity-react-extra'
// import { useWindowSize } from 'src/libs/hooks'

interface AwardsProps {
    type: string
    cta: Button
    description: PortableText[]
    highlightedAward: HighlightedAward
    otherAccreditationsAwards: OtherAccreditationsAwards
    title: string
}

export const Awards: React.FC<AwardsProps> = ({
    cta,
    description,
    highlightedAward,
    otherAccreditationsAwards,
    title,
}) => {
    // const windowWidth = useWindowSize()?.width ?? 0

    return (
        <section className="max-w-7xl mx-auto grid grid-cols-12 my-20 px-5">
            <div className="xl:col-span-8 col-span-12 grid grid-cols-12">
                <div className="xl:col-span-8 col-span-12">
                    <h4 className="font-bold text-lg">{title}</h4>
                    <p className="font-normal lg:text-lg text-base my-3">
                        <PortableText blocks={description} />
                    </p>
                    <Link href={cta.href}>{cta.title}</Link>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <a href={highlightedAward.icourln}>
                        <SanityImg
                            title={highlightedAward.name}
                            className="mx-auto"
                            builder={imageUrlBuilder}
                            image={highlightedAward.image}
                            height={200}
                            alt={highlightedAward.name}
                        />
                    </a>
                </div>
            </div>
            <div className="xl:col-span-4 col-span-12">
                <p className="text-sm my-5 text-center">{otherAccreditationsAwards.title}</p>
                <ul className="flex flex-wrap">
                    {otherAccreditationsAwards.accreditationsAwards.map((awards) => (
                        <li key={awards._key}>
                            <a href={awards.icourln}>
                                <SanityImg
                                    title={highlightedAward.name}
                                    className="w-full h-full"
                                    builder={imageUrlBuilder}
                                    image={awards.icon}
                                    height={80}
                                    alt={awards.name}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
