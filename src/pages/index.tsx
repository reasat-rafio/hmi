import { groq } from 'next-sanity'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { withDimensions, renderObjectArray, SanityImg } from 'sanity-react-extra'
import { SanityProps } from 'next-sanity-extra'
import { imageUrlBuilder, PortableText, sanityStaticProps, useSanityQuery } from '@utils/sanity'
import { Hero } from '@components/Hero/hero'
import { Treatment } from '@components/Treatment/treatment'
import { Awards } from '@components/Awards/awards'
import { Admisssion } from '@components/Admission/admisssion'
import SmNavigation from '@components/Navbar/mobile-navigation/mobile-navigation'
import { useState } from 'react'
import { Navbar } from '@components/Navbar/navbar'
import clsx from 'clsx'
import Image from 'next/image'

const query = groq`{
  "site": *[_id == "site"][0] {
    ...,
    "logo": ${withDimensions('logo')}
  },
  "notification" : *[_id == "notification"][0] {
  ...,
  "icon": ${withDimensions('icon')}
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
        data: { site, landingPage, notification },
    } = useSanityQuery(query, props)

    const [navbarActive, setNavbarActive] = useState(false)

    return (
        <div>
            <NextSeo title={landingPage.seo.title} description={landingPage.seo.description} />
            <div className="w-full bg-[#F3CD68] ">
                <div className="container mx-auto flex justify-center items-center h-[40px]">
                    <SanityImg
                        className="mx-2"
                        builder={imageUrlBuilder}
                        image={notification.icon}
                        width={20}
                        alt="notification icon"
                    />
                    <p className="text-xs">
                        <PortableText
                            blocks={notification.description}
                            serializers={{
                                marks: {
                                    pop: ({ children }: any) => (
                                        <span className=" text-[#373E46] items-center font-semibold transition-colors duration-150  group inline-block ">
                                            {children}
                                            <div
                                                className={clsx(
                                                    'transform inline-block transition-all duration-150 group-hover:translate-x-1 ',
                                                )}
                                            >
                                                <Image
                                                    layout="intrinsic"
                                                    height={13}
                                                    width={23}
                                                    src="/icons/checvron-right.svg"
                                                    alt="checvron right icon"
                                                />
                                            </div>
                                        </span>
                                    ),
                                },
                            }}
                        />
                    </p>
                </div>
            </div>

            <Navbar site={site} />
            <SmNavigation
                site={site}
                setNavbarActive={setNavbarActive}
                navbarActive={navbarActive}
            />

            {renderObjectArray(landingPage.screens, {
                hero: Hero,
                treatment: Treatment,
                accreditationsAndAwards: Awards,
                admission: Admisssion,
            })}
        </div>
    )
}
