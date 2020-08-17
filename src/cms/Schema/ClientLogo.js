export default [
    {
        label: "Add Client logo's",
        name: 'cleintLogo',
        widget: 'objects',
        fields: [
            { label: 'Clients', name: 'clients', widget: 'list',
                fields: [
                    { label: 'image', name: 'image', widget: 'image' },
                ]
            }
        ]
    }
]