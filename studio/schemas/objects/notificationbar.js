import { GrNotification } from 'react-icons/gr'

export default {
    name: 'notification',
    title: 'Notification',
    type: 'object',
    icon: GrNotification,
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
            title: 'description',
            media: 'icon',
        },
    },
}
