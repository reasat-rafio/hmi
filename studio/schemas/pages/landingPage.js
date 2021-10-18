export default {
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    fields: [
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        },
        {
            name: 'screens',
            title: 'Screens',
            type: 'array',
            of: [
                { type: 'hero' },
                { type: 'treatment' },
                { type: 'accreditationsAndAwards' },
                { type: 'admission' },
            ],
        },
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'description',
        },
    },
}
