module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    mode: 'jit',
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            container: {
                // center: true,
                padding: '0rem',
                // screens: {
                //     sm: '640px',
                //     md: '768px',
                //     lg: '1024px',
                //     xl: '1280px',
                //     '2xl': '1536px',
                // },
            },

            colors: {
                warning: '#F3CD68',
                biscay: '#1E4372',
                copper: '#A78148',
                green: '#00863F',
                gray: '#FBF9F6',
                ebony: '#212932',
                'bright-gray': '#373E46',
            },

            boxShadow: {
                point: '0px 8px 32px rgba(0, 0, 0, 0.1)',
            },
            fontSize: {
                '10px': '.625rem',
                '22px': '1.375rem',
            },
            screens: {
                sm: '480px',
                lg: '1025px',
                '2xl': '1500px',
                '3xl': '1780px',
            },
            borderRadius: {
                mid: '20px',
                big: '30px',
                large: '60px',
            },
            zIndex: {
                500: '500',
                max: '1000',
            },
            spacing: {
                '430px': '430px',
                '450px': '450px',
                '500px': '500px',
                '64vh': '64vh',
            },
            minHeight: {
                '50px': '50px',
            },
            scale: {
                80: '0.8',
                85: '0.85',
                300: '3',
                400: '4',
            },
            flex: {
                2: '2 2 0%',
                3: '3 3 0%',
                4: '4 4 0%',
                5: '5 5 0%',
                6: '6 6 0%',
                7: '7 7 0%',
                8: '8 8 0%',
                9: '9 9 0%',
            },

            keyframes: {
                shine: {
                    '100%': { left: '125%' },
                },
            },
            backgroundSize: {
                full: '100% 100%',
            },
            boxShadow: {
                navigation: '0 3px 6px rgba(0, 0, 0, 0.16)',
                header: '0 2px 3px rgba(0, 0, 0, 0.08)',
                subMenu: '1px 2px 3px rgba(0, 0, 0, 0.08)',
                bottomNavigation: '0 -2px 3px rgba(0, 0, 0, 0.06)',
            },
            fontFamily: {
                inter: ["'Inter', sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
