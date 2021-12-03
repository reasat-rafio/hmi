import { GrNotification } from 'react-icons/gr'
import { MdHighlight } from 'react-icons/md'
import React from 'react'

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
            of: [
                {
                    type: 'block',
                    marks: {
                        decorators: [
                            {
                                title: 'Pop',
                                value: 'pop',
                                blockEditor: {
                                    icon: () => <MdHighlight />,
                                    render: ({ children }) => (
                                        <span style={{ color: '#A78148' }}>{children}</span>
                                    ),
                                },
                            },
                        ],
                    },
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'description',
            media: 'icon',
        },
    },
}
