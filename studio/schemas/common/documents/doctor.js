import { GoPerson } from 'react-icons/go'

export default {
    name: 'doctor',
    title: 'Doctor',
    type: 'document',
    icon: GoPerson,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        },

        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'field_of_expertise',
            title: 'Field Of Expertise',
            type: 'string',
        },
        {
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string',
        },

        {
            title: 'Gender',
            name: 'gender',
            type: 'string',
            options: {
                list: [
                    { title: 'Male', value: 'male' },
                    { title: 'Female', value: 'female' },
                ],
                layout: 'radio',
            },
        },

        {
            name: 'clinic_location',
            title: 'Clinic Location',
            type: 'string',
        },

        {
            name: 'is_vertual_consultant',
            title: 'Is Vertual Consultant',
            type: 'boolean',
        },
        {
            name: 'consultation_hour',
            title: 'Consultation Hour',
            type: 'date',
        },
        { name: 'connectedWith', type: 'connectedWith' },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'description',
            media: 'image',
        },
    },
}
