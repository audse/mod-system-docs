import React from 'react'
import Link from '@docusaurus/Link'

type DocLinkProps = React.ComponentProps<'a'>

function DocLink (props: DocLinkProps) {
    const { href, children, ...otherProps } = props
    return (
        <Link href={ `/docs/${ href }` } { ...otherProps }>
            <code>{ children }</code>
        </Link>
    )
}

type ApiDocLinkProps = DocLinkProps & {
    cls: string
    method?: string
    property?: string
}

function ApiDocLink (props: ApiDocLinkProps) {
    const { href, cls, children, method, property, ...otherProps } = props
    const _Link = (linkProps: Pick<DocLinkProps, 'children' | 'href'>) => (
        <DocLink href={ `api/${ href }${ linkProps.href ? `#${ linkProps.href }` : '' }` } { ...otherProps }>
            { cls }
            { linkProps.children }
        </DocLink>
    )
    if (method) return <_Link href={ method }>.{ method }()</_Link>
    if (property) return <_Link href={ property }>.{ property }</_Link>
    return <_Link />
}

function ResourceDocLink (props: ApiDocLinkProps) {
    const { href, ...otherProps } = props
    return <ApiDocLink href={ `resources/${ href }` } { ...otherProps } />
}

function SingletonDocLink (props: ApiDocLinkProps) {
    const { href, ...otherProps } = props
    return <ApiDocLink href={ `singletons/${ href }` } { ...otherProps } />
}

export const Class = {
    Mod: (props: ApiDocLinkProps) => <ResourceDocLink href='mod' { ...props } cls='Mod' />,
    ModAsset: (props: ApiDocLinkProps) => <ResourceDocLink href='mod-asset' { ...props } cls='ModAsset' />,
    ModInstance: (props: ApiDocLinkProps) => <ResourceDocLink href='mod-instance' { ...props } cls='ModInstance' />,
    ModInstanceScript: (props: ApiDocLinkProps) => <ResourceDocLink href='mod-instance-script' { ...props } cls='ModInstanceScript' />,
    ModScript: (props: ApiDocLinkProps) => <ResourceDocLink href='mod-script' { ...props } cls='ModScript' />,
    ModSettings: (props: ApiDocLinkProps) => <ResourceDocLink href='mod-settings' { ...props } cls='ModSettings' />,
    RegisteredClass: (props: ApiDocLinkProps) => <ResourceDocLink href='registered-class' { ...props } cls='RegisteredClass' />,
    ModClassDB: (props: ApiDocLinkProps) => <SingletonDocLink href='mod-class-db' { ...props } cls='ModClassDB' />,
    ModLoader: (props: ApiDocLinkProps) => <SingletonDocLink href='mod-loader' { ...props } cls='ModLoader' />,
    ModSystem: (props: ApiDocLinkProps) => <SingletonDocLink href='mod-system' { ...props } cls='ModSystem' />,
}