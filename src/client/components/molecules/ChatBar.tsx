import { Component, createSignal } from 'solid-js'
import '@styles/components/molecules/ChatBar.scss'

import Input, { InputHandler, KeyPressHandler } from '@atoms/Input'

import { Message } from '@pages/ChatPage'

export interface ChatBarProps {
    onSubmit: (message: Message) => void
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
            uid: 1,
            name: 'jesse',
            date: new Date(),
            text: message(),
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
