import React from 'react'


export type PropertyProps = React.ComponentProps<'table'> & {
    type?: React.ReactNode,
    defaultValue?: React.ReactNode,
    exported?: boolean,
    computed?: boolean
}

const PropertyHeadStyle: React.CSSProperties = {
    textAlign: 'left',
    width: 'fit-content'
}

const PropertyCellStyle: React.CSSProperties = {
    textAlign: 'left',
    width: '100%'
}

export function Property (props: PropertyProps) {
    const { type, defaultValue, exported, computed, children, ...otherProps } = props
    return (
        <table { ...otherProps }>
            <tbody>
                { type && <tr>
                    <th style={ PropertyHeadStyle }>Type</th>
                    <td style={ PropertyCellStyle }>{ type }</td>
                </tr> }
                { defaultValue && <tr>
                    <th style={ PropertyHeadStyle }>Default</th>
                    <td style={ PropertyCellStyle }>{ defaultValue || '-' }</td>
                </tr> }
                { children }
            </tbody>
        </table>
    )
}

type PropertyRowProps = React.ComponentProps<'tr'> & {
    th?: React.ReactNode,
    td?: React.ReactNode,
}

Property.Row = (props: PropertyRowProps) => {
    const { children, th, td, ...otherProps } = props
    return (
        <tr { ...otherProps }>
            <th style={ PropertyHeadStyle }>{ th }</th>
            <td style={ PropertyCellStyle }>{ td }</td>
            { children }
        </tr>
    )
}

Property.Type = function (props: React.ComponentProps<'tr'>) {
    const { children, ...otherProps } = props
    return <Property.Row th='Type' td={ children } { ...otherProps } />
}

Property.Default = function (props: React.ComponentProps<'tr'>) {
    const { children, ...otherProps } = props
    return <Property.Row th='Default' td={ children } { ...otherProps } />
}

Property.Description = function (props: React.ComponentProps<'tr'>) {
    const { children, ...otherProps } = props
    return <Property.Row th='Description' td={ children } { ...otherProps } />
}

export function Params (props: React.ComponentProps<'table'>) {
    const { children, ...otherProps } = props
    const thStyle: React.CSSProperties = {
        textAlign: 'left',
    }
    return (
        <table { ...otherProps }>
            <thead>
                <tr>
                    <th style={ thStyle }>Name</th>
                    <th style={ thStyle }>Type</th>
                    <th style={ { ...thStyle, width: '100%' } }>Description</th>
                </tr>
            </thead>
            <tbody>
                { children }
            </tbody>
        </table>
    )
}

type ParamsRowProps = React.ComponentProps<'tr'> & {
    name: string,
    type?: React.ReactNode,
    description?: React.ReactNode,
}


function ParamsRow (props: ParamsRowProps) {
    const { name, type, description, children, ...otherProps } = props
    return (
        <tr { ...otherProps }>
            <td>
                <code>{ name }</code>
            </td>
            { type && <td>{ type }</td> }
            { description && <td>{ description }</td> }
            { children && Array.isArray(children) ? children.map(child => <td>{ child }</td>) : children }
        </tr>
    )
}

ParamsRow.Type = function (props: React.ComponentProps<'td'>) {
    return <td { ...props } />
}

ParamsRow.Description = function (props: React.ComponentProps<'td'>) {
    return <td { ...props } />
}

Params.Row = ParamsRow