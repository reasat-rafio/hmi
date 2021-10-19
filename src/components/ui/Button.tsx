import clsx from 'clsx'
import React, { forwardRef, ButtonHTMLAttributes } from 'react'
import styles from '@styles/ui/button.module.scss'
import { motion } from 'framer-motion'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    active?: boolean
    type?: 'submit' | 'reset' | 'button'
    loading?: boolean
    disabled?: boolean
}

const Button = forwardRef<HTMLButtonElement, any>((props, ref) => {
    const { className, children, active, loading = false, disabled = false, ...rest } = props

    const rootClassName = clsx(
        // 'outline-none text-white lg:text-lg text-xs 2xl:px-16 xl:px-8 lg:px-10  px-16 py-5 xl:py-3 2xl:py-5  font-bold transition-all duration-150 lg:w-auto w-full',
        styles.button,
        loading && 'cursor-not-allowed',
        disabled && 'cursor-not-allowed hover:cursor-not-allowed',
        className,
    )

    return (
        <button
            type="button"
            aria-pressed={active}
            ref={ref}
            className={rootClassName}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    )
})

Button.displayName = 'Button'

export default Button
