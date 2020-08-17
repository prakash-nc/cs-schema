export default [
    {
        label: 'Add Top Banner',
        name: 'banner',
        widget: 'objects',
        fields: [
            { label: 'Banner title', name: 'title', widget: 'string' },
            { label: 'Text align', name: 'textAlign', widget: 'select',
                options: [
                    { label: 'Left', value: 'L' },
                    { label: 'Center', value: 'C' },
                    { label: 'Right', value: 'R' }
                ]
            },
            { label: 'Banner background image', name: 'backgroundImg', widget: 'image' },
            { label: 'Banner background Color', name: 'backgroundColor', widget: 'string' }
        ]
    }
]