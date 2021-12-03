import { AiOutlineInfoCircle } from 'react-icons/ai'
import React from 'react'
import { MdHighlight } from 'react-icons/md'

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
            title: 'icon',
            subtitle: 'description',
        },
    },
}
