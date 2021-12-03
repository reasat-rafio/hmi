import { FaClinicMedical } from 'react-icons/fa'

export default {
    name: 'regency.landingPage.admission',
    title: 'Admission',
    type: 'object',
    icon: FaClinicMedical,
    fields: [
        {
            name: 'primaryImg',
            title: 'Primary Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'secondaryImg',
            title: 'Secondary Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        },

        {
            name: 'additionalInfo',
            title: 'Additional Info',
            type: 'array',
            of: [{ type: 'block' }],
        },

        {
            name: 'points',
            title: 'Points',
            type: 'array',
            of: [{ type: 'point' }],
        },
    ],
    preview: {
        select: {
            title: 'tagline',
            subtitle: 'tagline',
            media: 'primaryImg',
        },
    },
}
