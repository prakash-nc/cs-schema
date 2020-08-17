export default [
    {
        label: 'Add testimonials',
        name: 'testimonial',
        widget: 'objects',
        fields: [
            { label: 'testimonials', name: 'testimonials', widget: 'relation',
                collection: 'testimony',
                valueField: 'author',
                searchFields: ['author'],
                displayFields: ['author']
            }
        ]
    }
]