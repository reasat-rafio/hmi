import React from 'react'

export const Points: React.FC<Point> = ({ name, cta }) => {
    return (
        <div className="border-b border-gray p-5 bg-white hover:cursor-pointer hover:drop-shadow-2xl box-border transition-all duration-150 group">
            <p className="text-lg text-[#212932] font-medium group-hover:text-copper group-hover:font-bold transition-all duration-150">
                {name}
            </p>
            <a href={cta.href} className="text-sm">
                {cta.title}
            </a>
        </div>
    )
}
