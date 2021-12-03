import S from '@sanity/desk-tool/structure-builder'
import { GrEdit, GrView, GrNotification, GrContact, GrCatalog } from 'react-icons/gr'
import * as React from 'react'
import { FaSitemap, FaHome, FaWindowRestore } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'
import { BiSitemap } from 'react-icons/bi'
import { VscPersonAdd } from 'react-icons/vsc'
import { BsBuilding } from 'react-icons/bs'
import { FaRegHospital, FaHospitalSymbol } from 'react-icons/fa'

function SitePreview({ document, options }) {
    if (!process.env.SANITY_STUDIO_PREVIEW_URL) {
        console.warn(
            'SANITY_STUDIO_PREVIEW_URL should be set for preview to work! Falling back to localhost:3000',
        )
    }
    return (
        <iframe
            src={`${
                process.env.SANITY_STUDIO_PREVIEW_URL ?? 'http://localhost:3000'
            }/api/preview?secret=${process.env.SANITY_STUDIO_PREVIEW_TOKEN}&slug=${options.slug}`}
            style={{ width: '100%', height: '100%', border: 0 }}
        />
    )
}

const pageEditViews = (page) => [
    S.view.form().icon(GrEdit),
    S.view.component(SitePreview).icon(GrView).options({ page }).title('Preview'),
]

const singleItem = ({ schemaType, id, title, icon }) =>
    S.listItem({ schemaType, title, id, icon }).child(
        S.editor().id(id).title(title).schemaType(schemaType),
    )

const pageItem = ({ schemaType, id, title, icon, slug }) =>
    S.documentListItem({ schemaType, id, title, icon }).child(
        S.editor()
            .schemaType(schemaType)
            .views([
                S.view.form().icon(GrEdit),
                S.view.component(SitePreview).icon(GrView).options({ slug }).title('Preview'),
            ]),
    )

const HMI_INSTITUTE = () =>
    S.listItem()
        .title('HMI Institute')
        .icon(BsBuilding)
        .child(
            S.list()
                .title('HMI Institute')
                .items([
                    singleItem({
                        schemaType: 'site',
                        id: 'hmiInstitute.site',
                        title: 'Site Config',
                        icon: FaSitemap,
                    }),

                    S.divider(),
                    S.listItem()
                        .title('Pages')
                        .icon(CgWebsite)
                        .child(S.list().title('Pages').items([])),
                ]),
        )

const SITE_3 = () =>
    S.listItem()
        .title('Site 3')
        .icon(FaHospitalSymbol)
        .child(
            S.list()
                .title('Site 3')
                .items([
                    singleItem({
                        schemaType: 'site',
                        id: 'site_3.site',
                        title: 'Site Config',
                        icon: FaSitemap,
                    }),

                    S.divider(),
                    S.listItem()
                        .title('Pages')
                        .icon(CgWebsite)
                        .child(S.list().title('Pages').items([])),
                ]),
        )

const SITE_4 = () =>
    S.listItem()
        .title('Site 4')
        .icon(FaHospitalSymbol)
        .child(
            S.list()
                .title('Site 4')
                .items([
                    singleItem({
                        schemaType: 'site',
                        id: 'site_4.site',
                        title: 'Site Config',
                        icon: FaSitemap,
                    }),

                    S.divider(),
                    S.listItem()
                        .title('Pages')
                        .icon(CgWebsite)
                        .child(S.list().title('Pages').items([])),
                ]),
        )

const REGENCY = () =>
    S.listItem()
        .title('Regency')
        .icon(FaRegHospital)
        .child(
            S.list()
                .title('Regency')
                .items([
                    singleItem({
                        schemaType: 'site',
                        id: 'regency.site',
                        title: 'Site Config',
                        icon: FaSitemap,
                    }),
                    S.listItem()
                        .title('Notifications')
                        .icon(GrNotification)
                        .child(
                            S.list()
                                .title('Notifications')
                                .items([
                                    pageItem({
                                        schemaType: 'regency.notification',
                                        id: 'regency.notification',
                                        icon: GrNotification,
                                    }),
                                ]),
                        ),
                    S.divider(),
                    S.listItem()
                        .title('Pages')
                        .icon(CgWebsite)
                        .child(
                            S.list()
                                .title('Pages')
                                .items([
                                    pageItem({
                                        schemaType: 'regency.landingPage',
                                        id: 'regecy.landingPage',
                                        title: 'Landing',
                                        icon: FaHome,
                                        slug: '',
                                    }),
                                ]),
                        ),
                ]),
        )

export default () =>
    S.list()
        .title('Content')
        .id('__root__')
        .items([
            S.listItem()
                .title('Sites')
                .icon(BiSitemap)
                .child(
                    S.list().title('Sites').items([REGENCY(), HMI_INSTITUTE(), SITE_3(), SITE_4()]),
                ),
            S.divider(),
            S.documentTypeListItem('doctor').icon(VscPersonAdd).title('Doctor'),

            ...S.documentTypeListItems().filter(
                (item) => !['site', 'regency.landingPage', 'doctor'].includes(item.getId()),
            ),
        ])
