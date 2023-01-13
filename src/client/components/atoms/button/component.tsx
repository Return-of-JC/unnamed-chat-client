import { Component, JSX } from 'solid-js'

import './styling.css'

export type ClickHandler = JSX.EventHandler<HTMLButtonElement, MouseEvent>

export interface ButtonProps {
    label: string
    onClick: ClickHandler
}

const Button: Component<ButtonProps> = (props) => {
    const clickHandler: ClickHandler = (event) => {
        props.onClick(event)
    }

    return <button onClick={clickHandler}>{props.label}</button>
}

export default Button
