import seo from './seo'
import languages from './language'
import brandColor from './brandColor'
import TopBanner from './TopBanner'
import TextBlock from './TextBlock'
import Testimony from './Testimony'
import CardBlock from './CardBlock'
import ClientLogo from './ClientLogo'
import OurCustomers from './OurCustomers'


export default [
    {
        label: 'Product Page',
        name: 'productPage',
        folder: 'src/pages/products',
        slug: '{{name}}',
        create: true,
        filter: {field: "language", value: "EN"},
        fields: [
            { ...languages },
            { ...brandColor },
            { ...seo },
            { label: 'Title', name: 'title', widget: 'string', required: false },
            {
                label: 'Body', name: 'body', widget: 'list',
                types: [
                    ...TopBanner,
                    ...TextBlock,
                    ...Testimony,
                    ...CardBlock,
                    ...ClientLogo,
                    ...OurCustomers
                ]
            }
        ]
    }
]
