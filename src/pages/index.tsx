import { groq } from 'next-sanity'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { withDimensions, renderObjectArray } from 'sanity-react-extra'
import { SanityProps } from 'next-sanity-extra'
import { sanityStaticProps, useSanityQuery } from '@utils/sanity'
import { Hero } from '@components/Hero/hero'

const query = groq`{
  "site": *[_id == "site"][0] {
    ...,
    "logo": ${withDimensions('logo')}
  },
  "landingPage": *[_id == "landingPage"][0]{
    ...,
    sections[]{
        ...,
      "image": ${withDimensions('image')},
      "primaryImg": ${withDimensions('primaryImg')},
      "secondaryImg": ${withDimensions('secondaryImg')},
      additionalInfo {
        ...,
        "icon": ${withDimensions('icon')},
      },
      options[]{
        ...,
        "icon": ${withDimensions('icon')},
        "image": ${withDimensions('image')},
      },
      highlightedAward{
        ...,
        "image": ${withDimensions('image')},
      },
      otherAccreditationsAwards{
          ...,
          accreditationsAwards[]{
              ...,
              "icon": ${withDimensions('icon')},
          }
      }
    }
  }
}`

export const getStaticProps: GetStaticProps = async (context) => ({
    props: await sanityStaticProps({ query, context }),
})

export default function Home(props: SanityProps) {
    const {
        data: { site, landingPage },
    } = useSanityQuery(query, props)

    return (
        <div>
            <NextSeo title={landingPage.seo.title} description={landingPage.seo.description} />

            {renderObjectArray(landingPage.screens, {
                hero: Hero,
            })}
        </div>
    )
}