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
