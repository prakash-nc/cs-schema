export default [
    {
        label: "Add Our Customers",
        name: 'ourCustomers',
        widget: 'objects',
        fields: [
            { label: 'Customers', name: 'customers', widget: 'list',
                fields: [
                    { label: 'title', name: 'title', widget: 'string' },
                    { label: 'Value', name: 'value', widget: 'string' },
                ]
            }
        ]
    }
]