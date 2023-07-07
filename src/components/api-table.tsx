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
            { type && <tr>
                <th style={ PropertyHeadStyle }>Type</th>
                <td style={ PropertyCellStyle }>{ type }</td>
            </tr> }
            { defaultValue && <tr>
                <th style={ PropertyHeadStyle }>Default</th>
                <td style={ PropertyCellStyle }>{ defaultValue || '-' }</td>
            </tr> }
            { children }
            {/* <tr>
                <th style={ thStyle }>Is&nbsp;Exported</th>
                <td style={ tdStyle }>{ exported ? 'Yes' : 'No' }</td>
            </tr>
            <tr>
                <th style={ thStyle }>Is&nbsp;Computed</th>
                <td style={ tdStyle }>{ computed ? 'Yes' : 'No' }</td>
            </tr> */}
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

export type ParamsProps = React.ComponentProps<'table'> & {
    parameters?: ParamsRowProps[]
}

export function Params (props: ParamsProps) {
    const { parameters, children, ...otherProps } = props
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
                { parameters && parameters.map(Params.Row) }
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