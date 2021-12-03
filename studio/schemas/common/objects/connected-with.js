export default {
    name: 'connectedWith',
    title: 'Connected With',
    type: 'object',
    fields: [
        {
            name: 'connectedWith',
            title: 'Connected With',
            type: 'array',
            of: [
                {
                    type: 'string',
                },
            ],

            options: {
                list: [
                    { title: 'Regency', value: 'regeny' },
                    { title: 'HMI Institute', value: 'hmi-institute' },
                    { title: 'Site 3', value: 'site_3' },
                    { title: 'Site 4', value: 'site_4' },
                ],
            },
        },
    ],
}
