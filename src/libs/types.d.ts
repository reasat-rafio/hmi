interface Site {
    _createdAt: Date
    _id: string
    _rev: string
    _type: string
    _updatedAt: Date
    contact: Contact
    emergency: Emergency
    logo: any
    primaryMenu: Menu[]
    secondaryMenu: Menu[]
}

interface Menu {
    _key: string
    _type: Type
    href: Href
    title: string
    hightlight?: boolean
    submenu?: Menu[]
}

interface Contact {
    icon: Icon
    mail: string
    title: string
}

interface Emergency {
    icon: Icon
    number: string
    title: string
}

interface Button {
    _type: string
    href: string
    title: string
}

interface PortableText {
    _key: string
    _type: string
    children: Child[]
    markDefs: any[]
    style: string
}

interface Child {
    _key: string
    _type: string
    marks: string[]
    text: string
}

interface AdditionalInfo {
    _type: string
    description: PortableText[]
    icon: Icon
}

interface Option {
    _key: string
    _type: string
    button: Button
    description: string
    entryName: string
    featuredName: string
    icon: Icon
    image?: Icon
    role: string
    title: string
}

interface Point {
    _key: string
    _type: string
    cta: Button
    name: string
}

interface HighlightedAward {
    icourln: string
    image: Image
    name: string
}

interface OtherAccreditationsAwards {
    _type: string
    accreditationsAwards: AccreditationsAward[]
    title: string
}

interface AccreditationsAward {
    _key: string
    icon: Image
    icourln: string
    name: string
}
