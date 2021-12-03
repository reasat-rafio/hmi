// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Common schema
import doctor from './common/documents/doctor'
import siteConfig from './common/documents/site'

// Common objects
import seo from './common/objects/seo'
import connectedWith from './common/objects/connected-with'
import ctaButton from './common/objects/ctaButton'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

//REGENCY SITE
import landingPage from './sites/regency/pages/landingPage'
import hero from './sites/regency/objects/landingPage/hero'
import transition from './sites/regency/objects/landingPage/treatment/treatment'
import option from './sites/regency/objects/landingPage/treatment/option'
import additionalInfo from './sites/regency/objects/landingPage/treatment/info'
import accreditationsAndAwards from './sites/regency/objects/landingPage/award/accreditation-award'
import otherAccreditationsAwards from './sites/regency/objects/landingPage/award/other-accreditations-awards'
import admission from './sites/regency/objects/landingPage/admission'
import notification from './sites/regency/objects/notificationbar'
import point from './sites/regency/objects/point'
import menuItem from './sites/regency/objects/menuItem'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        siteConfig,
        seo,
        connectedWith,

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
