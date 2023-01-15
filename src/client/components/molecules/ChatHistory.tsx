import { Component, For } from 'solid-js'

import { Message } from '@pages/ChatPage'

export interface ChatHistoryProps {
    history: Array<Message>
}

const ChatHistory: Component<ChatHistoryProps> = (props) => {
    return (
        <ol>
            <For each={props.history}>
                {(message) => {
                    return <li>{JSON.stringify(message)}</li>
                }}
            </For>
        </ol>
    )
}

export default ChatHistory
