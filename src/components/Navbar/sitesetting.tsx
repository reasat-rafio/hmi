export const siteSettings = {
    site_header: {
        primaryMenu: [
            {
                id: 1,
                path: '/',
                label: 'Treatment',
            },
            {
                id: 2,
                path: '/',
                label: 'Admission',
            },
            {
                id: 3,
                path: '/',
                label: 'Getting Here',
            },
            {
                id: 4,
                path: '/',
                color: true,
                label: 'Content Hub',
            },
        ],

        secondaryMenu: [
            {
                id: 1,
                path: '/',
                label: 'Our Doctors',
            },
            {
                id: 2,
                path: '/',
                label: 'Services',
                subMenu: [
                    { id: 1, path: '/', label: 'services 1' },
                    { id: 2, path: '/', label: 'services 2' },
                    { id: 3, path: '/', label: 'services 3' },
                ],
            },
            {
                id: 3,
                path: '/',
                label: 'Rooms & Equipment',
                subMenu: [
                    { id: 1, path: '/', label: 'Room 1' },
                    { id: 2, path: '/', label: 'Room 2' },
                ],
            },
            {
                id: 4,
                path: '/',
                label: 'Cost',
                subMenu: [
                    { id: 1, path: '/', label: 'Cost 1' },
                    { id: 2, path: '/', label: 'Cost 2' },
                    { id: 2, path: '/', label: 'Cost 3' },
                    { id: 2, path: '/', label: 'Cost 4' },
                ],
            },
        ],
    },
}
