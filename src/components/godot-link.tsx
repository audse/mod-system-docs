import React from 'react'
import { ExternalLink, ExternalLinkProps } from './external-link'

const DocsPath = 'https://docs.godotengine.org/en/stable'

export type GodotClassLinkProps = ExternalLinkProps & {
    cls: string,
}

function convertToDocsUrl (path: string): string {
    return path.toLowerCase().replace(/#([_-\w]+)/igm, str => str.replace(/_/igm, '-'))
}

export function GodotClassLink (props: GodotClassLinkProps) {
    const { cls, ...otherProps } = props
    return (
        <ExternalLink
            { ...otherProps }
            style={ { ...otherProps.style, whiteSpace: 'nowrap' } }
            href={ convertToDocsUrl(`${ DocsPath }/classes/class_${ cls }.html`) }
            title={ `Open Godot Documentation for \`${ cls }\`` }>
            <code>{ cls }</code>
        </ExternalLink >
    )
}

export type GodotMethodLinkProps = ExternalLinkProps & {
    cls: string,
    method: string
}

export function GodotMethodLink (props: GodotMethodLinkProps) {
    const { cls, method, ...otherProps } = props
    return (
        <ExternalLink
            { ...otherProps }
            href={ convertToDocsUrl(`${ DocsPath }/classes/class_${ cls }.html#class-${ cls }-method-${ method }`) }
            title={ `Open Godot Documentation for \`${ cls }.${ method }()\`` }>
            <code>{ cls }.{ method }()</code>
        </ExternalLink>
    )
}

export type GodotPropertyLinkProps = ExternalLinkProps & {
    cls: string,
    property: string
}

export function GodotPropertyLink (props: GodotPropertyLinkProps) {
    const { cls, property, ...otherProps } = props
    return (
        <ExternalLink
            { ...otherProps }
            href={ convertToDocsUrl(`${ DocsPath }/classes/class_${ cls }.html#class-${ cls }-property-${ property }`) }
            title={ `Open Godot Documentation for \`${ cls }.${ property }\`` }>
            <code>{ cls }.{ property }</code>
        </ExternalLink>
    )
}