import { RiAwardFill } from 'react-icons/ri'

export default {
    name: 'regency.landingPage.accreditationsAndAwards.otherAccreditationsAwards',
    title: 'Other accreditations & awards',
    type: 'object',
    icon: RiAwardFill,
    fields: [
        { name: 'title', title: 'Title', type: 'string' },

        {
            name: 'accreditationsAwards',
            title: 'Accreditations & Awards',
            type: 'array',
            of: [
                {
                    type: 'accreditationsAward',
                    title: 'Accreditation & Award',
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        },
                        { name: 'icon', title: 'Icon', type: 'image' },
                        { name: 'icourln', title: 'Url', type: 'url' },
                    ],
                    preview: {
                        select: {
                            title: 'name',
                            media: 'icon',
                        },
                    },
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'icon',
            subtitle: 'description',
        },
    },
}
