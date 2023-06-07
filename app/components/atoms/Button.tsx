import { Component, JSX } from 'solid-js'

export type ClickHandler = JSX.EventHandler<HTMLButtonElement, MouseEvent>

export interface ButtonProps {
    class?: string
    label?: string
    onClick?: ClickHandler | (() => void)
}

const Button: Component<ButtonProps> = (props) => {
    const clickHandler: ClickHandler = (event) => {
        props.onClick(event)
    }

    return (
        <button class={props.class} onClick={clickHandler}>
            {props.label}
        </button>
    )
}

export default Button
