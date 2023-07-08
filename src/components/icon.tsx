import React from 'react'

export type IconProps = React.ComponentProps<'span'> & {
    name: string
}

export default function Icon (props: IconProps) {
    return (
        <span
            role='img'
            style={ {
                mask: `url("/mod-system-docs/img/${ props.name }.svg")`,
                WebkitMaskImage: `url("/mod-system-docs/img/${ props.name }.svg")`,
                width: '0.9em',
                height: '0.9em',
                background: 'currentColor',
                display: 'inline-block',
                verticalAlign: 'text-top',
                ...props.style
            } } />
    )
}
