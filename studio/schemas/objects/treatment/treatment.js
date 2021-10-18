import { AiOutlineMedicineBox } from 'react-icons/ai'

export default {
    name: 'treatment',
    title: 'Treatment',
    type: 'object',
    icon: AiOutlineMedicineBox,
    fields: [
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
            name: 'points',
            title: 'Points',
            type: 'array',
            of: [
                {
                    name: 'ponit',
                    title: 'Point',
                    type: 'object',
                    icon: AiOutlineMedicineBox,
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        },
                        {
                            name: 'cta',
                            title: 'CTA',
                            type: 'ctaButton',
                        },
                    ],
                },
            ],
        },

        {
            name: 'options',
            title: 'Options',
            type: 'array',
            of: [{ type: 'option' }],
        },

        {
            name: 'additionalInfo',
            title: 'Additional Info',
            type: 'additionalInfo',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'tagline',
        },
    },
}
