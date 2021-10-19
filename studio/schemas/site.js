export default {
    name: 'site',
    title: 'Site',
    type: 'document',
    fields: [
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
        },
        {
            name: 'notification',
            title: 'Notification',
            type: 'notification',
        },
    ],
    preview: {
        select: {
            media: 'logo',
        },
    },
}
