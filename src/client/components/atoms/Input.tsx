import { Component, JSX } from 'solid-js'

export type KeyPressHandler = JSX.EventHandler<HTMLInputElement, KeyboardEvent>
export type InputHandler = JSX.EventHandler<HTMLInputElement, InputEvent>

export interface InputProps {
    value?: string
    placeholder?: string
    class?: string
    onKeyPress?: KeyPressHandler
    onInput?: InputHandler
}

const Input: Component<InputProps> = (props) => {
    const keyPressHandler: KeyPressHandler = (event) => {
        props.onKeyPress(event)
    }

    const inputHandler: InputHandler = (event) => {
        props.onInput(event)
    }

    return (
        <input
            class={props.class}
            value={props.value}
            placeholder={props.placeholder}
            onKeyPress={keyPressHandler}
            onInput={inputHandler}
        />
    )
}

export default Input
