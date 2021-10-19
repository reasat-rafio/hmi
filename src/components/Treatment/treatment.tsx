// @ts-ignore
import BlockContent from '@sanity/block-content-to-react'
import { Points } from '@components/common/points'
import { imageUrlBuilder, PortableText } from '@utils/sanity'
import React, { useState } from 'react'
import { SanityImg } from 'sanity-react-extra'
import Image from 'next/image'
import clsx from 'clsx'
import { AnimateSharedLayout, motion } from 'framer-motion'
import { Options } from './Options'

interface TreatmentProps {
    type: string
    additionalInfo: AdditionalInfo
    description: PortableText[]
    options: Option[]
    points: Point[]
    tagline: string
    title: string
}

export const Treatment: React.FC<TreatmentProps> = ({
    title,
    tagline,
    description,
    additionalInfo,
    options,
    points,
}) => {
    const [selectedOption, setselectedOption] = useState(options[0])
    const [selectedIndex, setSelectedIndex] = useState<number>(0)

    return (
        <section className="relative container xl:ml-auto xl:mr-0 ml-auto mr-auto xl:px-0  px-3  box-border">
            <div className="relative xl:pl-10 xl:pr-0 pl-5 pr-5 z-20">
                <h2 className="text-center font-light capitalize text-sm">{title}</h2>
                <h4 className="text-center text-[32px]">{tagline}</h4>
                <div className="w-full grid grid-cols-12 xl:gap-10">
                    <div className="xl:col-span-3 col-span-12 flex flex-col justify-end ">
                        <p className="font-normal text-lg">
                            <PortableText blocks={description} />
                        </p>

                        <div className="flex flex-col rounded-lg __shadow mt-5">
                            {points.map((point) => (
                                <Points key={point._key} {...point} />
                            ))}
                        </div>
                    </div>
                    <div className="xl:col-span-9 col-span-12">
                        <div className="grid grid-cols-12 relative items-end justify-center">
                            <div
                                className="absolute top-0 left-0 w-full h-[110%] transform translate-y-[-9%] bg-[#003218] z-10"
                                style={{ clipPath: `polygon(0 35%, 100% 0, 100% 100%, 0% 100%)` }}
                            />

                            <div className=" lg:col-span-5 col-span-12 flex flex-col relative z-20 mx-10 h-[60%] ">
                                <AnimateSharedLayout>
                                    <ol className="flex justify-between w-full">
                                        {options.map((option, idx) => (
                                            <motion.li
                                                className={clsx(
                                                    'text-sm relative cursor-pointer text-center transition-all duration-150 flex justify-center items-center',
                                                    idx === selectedIndex
                                                        ? 'text-[#CAB391] font-bold'
                                                        : 'text-[#75C690]',
                                                )}
                                                key={option._key}
                                                animate
                                                onClick={() => {
                                                    setselectedOption(option)
                                                    setSelectedIndex(idx)
                                                }}
                                            >
                                                {idx === selectedIndex && (
                                                    <motion.div
                                                        className="w-full h-1 absolute -bottom-4 bg-[#CAB391]"
                                                        layoutId="underline"
                                                        initial={false}
                                                        transition={{ duration: 0.3 }}
                                                    ></motion.div>
                                                )}

                                                <SanityImg
                                                    className="mx-2 "
                                                    builder={imageUrlBuilder}
                                                    image={option.icon}
                                                    width={15}
                                                    alt={option.entryName}
                                                />
                                                {option.entryName}
                                            </motion.li>
                                        ))}
                                    </ol>
                                    <Options selectedOption={selectedOption} />
                                </AnimateSharedLayout>
                            </div>
                            <div className="lg:col-span-7 col-span-12 z-20 ">
                                <SanityImg
                                    className=" rounded-[8px] "
                                    builder={imageUrlBuilder}
                                    image={selectedOption.image}
                                    height={600}
                                    alt="Hero Image"
                                />
                            </div>
                        </div>
                        <div className="flex mt-4">
                            <div className="p-2 box-border bg-[#E9FBF2] rounded-full mr-4">
                                <SanityImg
                                    className=""
                                    builder={imageUrlBuilder}
                                    image={additionalInfo.icon}
                                    width={30}
                                    alt="Virus"
                                />
                            </div>
                            <p className="flex-1 text-[#373E46]">
                                <PortableText
                                    blocks={additionalInfo.description}
                                    serializers={{
                                        marks: {
                                            pop: ({ children }: any) => (
                                                <span className=" text-copper items-center font-semibold transition-colors duration-150  group inline-block">
                                                    {children}
                                                    <div
                                                        className={clsx(
                                                            'transform inline-block transition-all duration-150 group-hover:translate-x-1 ',
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
                                                </span>
                                            ),
                                        },
                                    }}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
