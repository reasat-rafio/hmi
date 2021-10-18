import { RiAwardFill } from 'react-icons/ri'

export default {
    name: 'accreditationsAndAwards',
    title: 'Accreditations & awards',
    type: 'object',
    icon: RiAwardFill,
    fields: [
        { name: 'title', title: 'Title', type: 'string' },

        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        },
        { name: 'cta', title: 'CTA', type: 'ctaButton' },

        {
            name: 'highlightedAward',
            title: 'highlightedAward',
            type: 'object',
            fields: [
                { name: 'image', title: 'Image', type: 'image' },
                {
                    name: 'name',
                    title: 'Name',
                    type: 'string',
                },
                { name: 'icourln', title: 'Url', type: 'url' },
            ],
        },

        {
            name: 'otherAccreditationsAwards',
            title: 'Other accreditations & awards',
            type: 'otherAccreditationsAwards',
        },
    ],
    preview: {
        select: {
            title: 'icon',
            subtitle: 'description',
        },
    },
}
