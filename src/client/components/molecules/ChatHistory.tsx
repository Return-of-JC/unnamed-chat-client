import { Component, For } from 'solid-js'

import { Message } from '@pages/ChatPage'

import '@styles/components/molecules/ChatHistory.scss'

export interface ChatHistoryProps {
    messages: Array<Message>
}

const ChatHistory: Component<ChatHistoryProps> = (props) => {
    return (
        <ol class="chat-history">
            <For each={props.messages}>
                {(message) => (
                    <li class="chat-history__list-item">
                        <img
                            src={message.user.image}
                            class="chat-history__profile-image"
                        />
                        <div class="chat-history__top">
                            <h3 class="chat-history__username">
                                {message.user.name}
                            </h3>
                            <p class="chat-history__date">
                                {message.date.toDateString()}
                            </p>
                        </div>
                        <div class="chat-history__bottom">
                            <p class="chat-history__message">{message.value}</p>
                        </div>
                    </li>
                )}
            </For>
        </ol>
    )
}

export default ChatHistory
