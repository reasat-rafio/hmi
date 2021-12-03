export default {
    name: 'regency.landingPage',
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
                { type: 'regency.landingPage.hero' },
                { type: 'regency.landingPage.treatment' },
                { type: 'regency.landingPage.accreditationsAndAwards' },
                { type: 'regency.landingPage.admission' },
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
