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
            name: 'primaryMenu',
            title: 'Primary Menu',
            type: 'array',
            of: [{ type: 'menuItem' }],
        },
        {
            name: 'secondaryMenu',
            title: 'Secondary Menu',
            type: 'array',
            of: [{ type: 'menuItem' }],
        },

        {
            name: 'contact',
            title: 'Contact',
            type: 'object',
            fields: [
                {
                    name: 'icon',
                    title: 'Icon',
                    type: 'image',
                },
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                },
                {
                    name: 'mail',
                    title: 'Email Address',
                    type: 'string',
                },
            ],
        },

        {
            name: 'emergency',
            title: 'Emergency',
            type: 'object',
            fields: [
                {
                    name: 'icon',
                    title: 'Icon',
                    type: 'image',
                },
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                },
                {
                    name: 'number',
                    title: 'Number',
                    type: 'string',
                },
            ],
        },
    ],
    preview: {
        select: {
            media: 'logo',
        },
    },
}
