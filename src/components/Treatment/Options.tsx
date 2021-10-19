import React from 'react'

interface OptionsProps {
    selectedOption: Option
}

export const Options: React.FC<OptionsProps> = ({
    selectedOption: { description, button, role, featuredName, title },
}) => {
    return (
        <div className="mt-10 h-full flex flex-col justify-center space-y-5">
            <p className="text-2xl text-white">{title}</p>
            <p className="text-white text-lg leading-relaxed">{description}</p>

            <div className="flex">
                <button className="bg-copper rounded-[4px] p-3 text-white text-sm ">
                    {button.title}
                </button>
            </div>

            <div className="text-xs text-white text-right hidden lg:block ">
                <p>{featuredName}</p>
                <p>{role}</p>
            </div>
        </div>
    )
}
