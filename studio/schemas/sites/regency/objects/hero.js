import { AiOutlineHome } from 'react-icons/ai'

export default {
    name: 'hero',
    title: 'Hero',
    type: 'object',
    icon: AiOutlineHome,
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
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'button',
            title: 'Button',
            type: 'ctaButton',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'tagline',
            media: 'image',
        },
    },
}
