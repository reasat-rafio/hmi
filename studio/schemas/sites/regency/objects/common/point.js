import { AiOutlineMedicineBox } from 'react-icons/ai'

export default {
    name: 'point',
    title: 'point',
    type: 'object',
    icon: AiOutlineMedicineBox,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'cta',
            title: 'CTA',
            type: 'ctaButton',
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'cta.title',
        },
    },
}
