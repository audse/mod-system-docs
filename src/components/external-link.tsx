import React from 'react'
import Link from '@docusaurus/Link'

import Icon, { IconProps } from './icon'

export type ExternalLinkProps = React.ComponentProps<'a'> & {
    iconProps?: Omit<IconProps, 'name'>
}


export function ExternalLink (props: ExternalLinkProps) {
    const { children, ...otherProps } = props
    return (
        <Link
            target='_blank'
            rel='noopener noreferrer'
            { ...otherProps }>
            { children }
            <Icon
                name='arrow-up-right-from-square'
                aria-label='Open in new tab'
                style={ {
                    textDecoration: 'none',
                    ...children && { marginLeft: '0.25rem' }
                } }></Icon>
        </Link>
    )
}

export type SourceLinkProps = ExternalLinkProps & {
    script: string
}

export function SourceLink (props: SourceLinkProps) {
    const { script, children, ...otherProps } = props
    return (
        <ExternalLink
            { ...otherProps }
            href={ `https://github.com/audse/mod-system/tree/main/addons/mod_system/${ script }` }
            title={ `Open source code for \`${ script }\`` }>
            { children }
            <code>{ script }</code>
        </ExternalLink>
    )
}

SourceLink.SeeTheCode = function (props: SourceLinkProps) {
    return (
        <SourceLink { ...props }>See the code at </SourceLink>
    )
}