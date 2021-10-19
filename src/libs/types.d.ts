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
