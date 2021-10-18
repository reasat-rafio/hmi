import { AiOutlineInfoCircle } from 'react-icons/ai'

export default {
    name: 'additionalInfo',
    title: 'Additional Info',
    type: 'object',
    icon: AiOutlineInfoCircle,
    fields: [
        { name: 'icon', title: 'Icon', type: 'image' },

        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
    preview: {
        select: {
            title: 'icon',
            subtitle: 'description',
        },
    },
}
