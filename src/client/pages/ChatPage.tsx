import { Component, Show, createResource, createSignal } from 'solid-js'
import { createStore } from 'solid-js/store'

import '@styles/pages/ChatPage.scss'

import ChatBar from '@molecules/ChatBar'
import ChatHistory from '@molecules/ChatHistory'
import ChatList from '@molecules/ChatList'

export interface Message {
    uid: number
    name: string
    date: Date
    text: string
}

export interface Room {
    id: number
    name: string
    messages: Message[]
}

const [dummyData, setDummyData] = createStore<Room[]>([
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
])

const ChatPage: Component = () => {
    const [selectedRoom, setSelectedRoom] = createSignal<number>(0)

    const [rooms] = createResource<Room[]>(() => dummyData)

    function sendMessage(message: Message) {
        setDummyData((rooms) => {
            rooms[0].messages.push(message)
            return rooms
        })
        console.log(rooms())
    }

    function changeRoom(roomId: number) {
        setSelectedRoom(roomId)
    }

    function getHistory() {
        return rooms()[selectedRoom()].messages
    }

    return (
        <div class="chat-page">
            <Show when={!rooms.loading} fallback={<>Loading...</>}>
                <div class="chat-page__left">
                    <ChatList rooms={rooms()} onRoomChange={changeRoom} />
                </div>
                <div class="chat-page__right">
                    <ChatHistory history={getHistory()} />
                    <ChatBar onSubmit={sendMessage} />
                </div>
            </Show>
        </div>
    )
}

export default ChatPage
