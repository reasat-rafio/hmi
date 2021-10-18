// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import site from './site'
import seo from './seo'

import landingPage from './pages/landingPage'
import hero from './objects/hero'
import transition from './objects/treatment/treatment'
import option from './objects/treatment/option'
import additionalInfo from './objects/treatment/info'
import accreditationsAndAwards from './objects/award/accreditation-award'
import otherAccreditationsAwards from './objects/award/other-accreditations-awards'

import ctaButton from './objects/ctaButton'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        site,
        seo,
        landingPage,
        hero,
        transition,
        option,
        additionalInfo,
        accreditationsAndAwards,
        otherAccreditationsAwards,

        ctaButton,
    ]),
})
