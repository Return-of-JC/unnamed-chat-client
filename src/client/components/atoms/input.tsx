import { Component, JSX } from 'solid-js'

export type KeyPressHandler = JSX.EventHandler<HTMLInputElement, KeyboardEvent>
export type InputHandler = JSX.EventHandler<HTMLInputElement, InputEvent>

export interface InputProps {
    onKeyPress: KeyPressHandler
    onInput: InputHandler
    value: string
    label: string
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
            onKeyPress={keyPressHandler}
            onInput={inputHandler}
            value={props.value}
            placeholder={props.label}
        />
    )
}

export default Input
