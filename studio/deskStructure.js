import S from '@sanity/desk-tool/structure-builder'
import { GrEdit, GrView, GrNotification, GrContact, GrCatalog } from 'react-icons/gr'
import * as React from 'react'
import { FaSitemap, FaHome, FaWindowRestore } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'
import { BiSitemap } from 'react-icons/bi'
import { VscPersonAdd } from 'react-icons/vsc'

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

const regecny = () =>
    S.listItem()
        .title('Regency')
        .icon(CgWebsite)
        .child(
            S.list()
                .title('Regency')
                .items([
                    S.documentListItem()
                        .schemaType('site')
                        .id('site')
                        .title('Site Config')
                        .icon(FaSitemap)
                        .child(S.editor().schemaType('site')),
                    S.listItem()
                        .title('Notifications')
                        .icon(GrNotification)
                        .child(
                            S.list()
                                .title('Notifications')
                                .items([
                                    pageItem({
                                        schemaType: 'notification',
                                        id: 'notification',
                                        icon: GrNotification,
                                    }),
                                ]),
                        ),
                    S.divider(),
                    S.documentTypeListItem('doctor').icon(VscPersonAdd).title('Doctor'),
                    S.divider(),
                    S.listItem()
                        .title('Pages')
                        .icon(CgWebsite)
                        .child(
                            S.list()
                                .title('Pages')
                                .items([
                                    pageItem({
                                        schemaType: 'landingPage',
                                        id: 'landingPage',
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
                .child(S.list().title('Sites').items([regecny()])),

            S.divider(),
            ...S.documentTypeListItems().filter(
                (item) => !['site', 'landingPage', 'doctor'].includes(item.getId()),
            ),
        ])
