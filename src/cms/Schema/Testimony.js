export default [
    {
        label: 'Add testimonials',
        name: 'testimonial',
        widget: 'objects',
        fields: [
            { label: 'testimonials', name: 'testimonials', widget: 'list',
                fields: [
                    { label: 'Testimony Content', name: 'content', widget: 'text' },
                    { label: 'Author', name: 'author', widget: 'string' },
                ]
            }
        ]
    }
]