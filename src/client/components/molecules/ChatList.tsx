import { Component, For } from 'solid-js'

import Button from '@atoms/Button'

import { Room } from '@pages/ChatPage'

export interface ChatListProps {
    rooms: Room[]
    onRoomChange: (roomId: Number) => void
}

const ChatList: Component<ChatListProps> = (props) => {
    return (
        <ul>
            <For each={props.rooms}>
                {(room) => (
                    <li>
                        <Button
                            class="chat-list__button"
                            label={room.name}
                            onClick={() => props.onRoomChange(room.id)}
                        />
                    </li>
                )}
            </For>
        </ul>
    )
}

export default ChatList
