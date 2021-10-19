import React, { Dispatch, SetStateAction } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { SanityImage, SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@utils/sanity'

const ease = [0.04, 0.62, 0.23, 0.98]

const showMoreSortVariants = {
    initial: {
        y: '-30px',
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    },
    exit: {
        y: '-10px',
        opacity: 0,
    },
}

const rotate = {
    collapsed: { rotate: 0 },
    open: { rotate: -180 },
}

interface SmFilterDropDownProps {
    selected: string
    options: Option[]
    setSelectedOption: Dispatch<SetStateAction<Option>>
    icon: SanityImage
}

export const SmFilterDropDown: React.FC<SmFilterDropDownProps> = ({
    options,
    selected,
    setSelectedOption,
    icon,
}) => {
    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <div className="flex justify-center items-center xl:hidden ">
            <div className="relative text-xs flex-1 ">
                <button
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-labelledby="listbox-label"
                    className="relative bg-[#005427] rounded-[4px] p-3 text-left text-xs w-full shadow"
                    onClick={() => setShowDropDown((prev: boolean) => !prev)}
                >
                    <span className="flex items-center">
                        <SanityImg
                            className="mx-2 "
                            builder={imageUrlBuilder}
                            image={icon}
                            width={15}
                            alt={selected}
                        />

                        <span className="pl-3 block truncate text-white">{selected}</span>
                    </span>
                    <motion.span
                        variants={rotate}
                        initial="collapsed"
                        animate={showDropDown ? 'open' : 'collapsed'}
                        transition={{ duration: 0.02, ease }}
                        className="pl-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none transition-all duration-150"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </motion.span>
                </button>
                <AnimatePresence exitBeforeEnter>
                    {showDropDown && (
                        <motion.div
                            variants={showMoreSortVariants}
                            initial="inital"
                            animate="animate"
                            exit="exit"
                            className="absolute mt-1 w-full rounded-md bg-white  shadow-lg z-40"
                        >
                            <ul
                                role="listbox"
                                aria-labelledby="listbox-label"
                                aria-activedescendant="listbox-item-3"
                                className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5  focus:outline-none sm:text-sm"
                            >
                                {options.map((option, i) => (
                                    <li
                                        key={i}
                                        id="listbox-item-0"
                                        role="option"
                                        className="text-black text-xs lg:base  select-none relative py-2 pl-3 pr-9 cursor-pointer"
                                        onClick={() => {
                                            setSelectedOption(option)
                                            setShowDropDown(false)
                                        }}
                                    >
                                        <div className="flex items-center">
                                            <span className="ml-3 block font-normal truncate">
                                                {option.entryName}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
