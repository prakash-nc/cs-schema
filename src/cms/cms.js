import React from 'react'
import CMS from 'netlify-cms-app'
import './cms-utils'
import HomePageTemplate from '../templates/HomePage'
//Schema
import productPage from './Schema/productPage'
import Components from './Schema/Components'

import uploadcare from 'netlify-cms-media-library-uploadcare'

CMS.init({
  config: {
    backend: {
      name: 'git-gateway'
    },
    media_folder: '../../static/images/uploads',
    public_folder: '../../images/uploads',
    collections: [...productPage, ...Components]
  }
})

CMS.registerMediaLibrary(uploadcare)

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate(HomePageTemplate, 'homePage')
