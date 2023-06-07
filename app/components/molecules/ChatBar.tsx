import { Component, createSignal } from 'solid-js'
import '@styles/components/molecules/ChatBar.scss'

import Input, { InputHandler, KeyPressHandler } from '@atoms/Input'

import { Message, User } from '@pages/ChatPage'

export interface ChatBarProps {
    onSubmit: (message: Message) => void
    user: User
}

const ChatBar: Component<ChatBarProps> = (props) => {
    const [message, setMessage] = createSignal('')

    const inputHandler: InputHandler = (event) => {
        const target = event.currentTarget
        setMessage(target.value)
    }

    const keyPressHandler: KeyPressHandler = (event) => {
        switch (event.key) {
            case 'Enter':
                submit()
                break
        }
    }

    const submit = () => {
        props.onSubmit({
            user: props.user,
            date: new Date(),
            value: message(),
        })
        setMessage('')
    }

    return (
        <div class="chat-bar">
            <Input
                class="chat-bar__input"
                placeholder="Message"
                value={message()}
                onInput={inputHandler}
                onKeyPress={keyPressHandler}
            />
        </div>
    )
}

export default ChatBar
