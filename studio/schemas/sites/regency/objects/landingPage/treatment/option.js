import { BsJournalMedical } from 'react-icons/bs'

export default {
    name: 'regency.landingPage.treatment.option',
    title: 'Option',
    type: 'object',
    icon: BsJournalMedical,
    fields: [
        {
            name: 'entryName',
            title: 'Entry Name',
            type: 'string',
        },

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
            name: 'description',
            title: 'Description',
            type: 'text',
        },

        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },

        {
            name: 'button',
            title: 'Button',
            type: 'ctaButton',
        },

        { name: 'featuredName', title: 'Featured Name', type: 'string' },
        { name: 'role', title: 'Role', type: 'string' },
    ],
    preview: {
        select: {
            title: 'entryName',
            subtitle: 'description',
            media: 'icon',
        },
    },
}
