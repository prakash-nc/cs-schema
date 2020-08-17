export default [
    {
        label: 'Add Text Block & Image',
        name: 'textBlock',
        widget: 'objects',
        fields: [
            { label: 'Text Block Header', name: 'header', widget: 'string' },
            { label: 'Text Block title', name: 'title', widget: 'string' },
            { label: 'Brand name', name: 'brandName', widget: 'string' },
            { label: 'Text Block Description', name: 'description', widget: 'markdown' },
            { label: 'Image Position', name: 'imagePosition', widget: 'select',
                options: [
                    { label: 'Left', value: 'L' },
                    { label: 'Center', value: 'C' },
                    { label: 'Right', value: 'R' },
                    { label: 'Top', value: 'T' },
                    { label: 'Middle', value: 'M' },
                    { label: 'Bottom', value: 'B' }
                ]
            },
            { label: 'image', name: 'background', widget: 'image' },
            { label: 'Action Buttons', name: 'btns', widget: 'list',
                fields : [
                    { label: 'Button Text', name: 'text', widget: 'string'},
                    { label: 'Button Image', name: 'imgLink', widget: 'image'},
                    { label: 'Button Link', name: 'link', widget: 'string'}
                ]
            }
        ]
    }
]