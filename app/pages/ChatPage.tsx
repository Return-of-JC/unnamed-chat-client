import { Component, Show, createSignal, onMount } from 'solid-js'
import { createStore } from 'solid-js/store'

import '@styles/pages/ChatPage.scss'

import ChatBar from '@molecules/ChatBar'
import ChatHistory from '@molecules/ChatHistory'
import ChatList from '@molecules/ChatList'

export interface User {
    id: number
    name: string
    image: string
}

export interface Message {
    user: User
    date: Date
    value: string
}

export interface Room {
    id: number
    name: string
    messages: Message[]
}

const dummyUser: User = {
    id: 1,
    name: 'jesse',
    image: 'https://images3.memedroid.com/images/UPLOADED405/5d425bfb1cc2a.jpeg',
}

const dummyRooms: Room[] = [
    {
        id: 1,
        name: 'room1',
        messages: [],
    },
    {
        id: 2,
        name: 'room2',
        messages: [],
    },
    {
        id: 3,
        name: 'room3',
        messages: [],
    },
]

const ChatPage: Component = () => {
    const websocket = new WebSocket('ws://localhost:3030/messages')

    const [rooms, setRooms] = createStore<Room[]>([])
    const [selectedRoom, setSelectedRoom] = createSignal<Room>()
    const [selectedUser, setSelectedUser] = createSignal<User>()

    function changeRoom(roomId: number) {
        setSelectedRoom(rooms.find((room) => room.id === roomId))
    }

    function sendMessage(message: Message) {
        setRooms(
            (room) => room.id === selectedRoom().id,
            'messages',
            (messages) => messages.concat(message)
        )
        websocket.send(message.value)
    }

    onMount(() => {
        setRooms(dummyRooms)
        setSelectedRoom(rooms[0])
        setSelectedUser(dummyUser)
    })

    return (
        <div class="chat-page">
            <Show when={rooms.length >= 1} fallback={<>Loading...</>}>
                <div class="chat-page__left">
                    <ChatList rooms={rooms} onRoomChange={changeRoom} />
                </div>
                <div class="chat-page__right">
                    <h1>{selectedRoom().name}</h1>
                    <ChatHistory messages={selectedRoom().messages} />
                    <ChatBar onSubmit={sendMessage} user={selectedUser()} />
                </div>
            </Show>
        </div>
    )
}

export default ChatPage
