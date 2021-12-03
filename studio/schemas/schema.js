// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import site from './sites/regency/site'
import seo from './seo'

//REGENCY
import doctor from './sites/regency/document/doctor'
import landingPage from './sites/regency/pages/landingPage'
import hero from './sites/regency/objects/hero'
import transition from './sites/regency/objects/treatment/treatment'
import option from './sites/regency/objects/treatment/option'
import additionalInfo from './sites/regency/objects/treatment/info'
import accreditationsAndAwards from './sites/regency/objects/award/accreditation-award'
import otherAccreditationsAwards from './sites/regency/objects/award/other-accreditations-awards'
import admission from './sites/regency/objects/admission/admission'
import notification from './sites/regency/objects/notificationbar'

import ctaButton from './sites/regency/objects/common/ctaButton'
import point from './sites/regency/objects/common/point'
import menuItem from './sites/regency/objects/menuItem'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        site,
        seo,
        doctor,
        landingPage,
        hero,
        transition,
        option,
        additionalInfo,
        accreditationsAndAwards,
        otherAccreditationsAwards,
        admission,
        notification,
        ctaButton,
        point,
        menuItem,
    ]),
})
