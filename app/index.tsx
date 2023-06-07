import { Show } from 'solid-js'
import { render } from 'solid-js/web'
import { Router, Routes, Route, Navigate } from '@solidjs/router'

import ChatPage from '@pages/ChatPage'
import LoginPage from '@pages/LoginPage'

import '@styles/index.scss'

function Root() {
    function isAuthorized() {
        return false
    }

    return (
        <Router>
            <Routes>
                <Show
                    when={isAuthorized()}
                    fallback={<Navigate href="/login" />}
                >
                    <Route path="/" component={ChatPage} />
                </Show>
                <Route path="/login" component={LoginPage} />
            </Routes>
        </Router>
    )
}

render(() => <Root />, document.getElementById('root'))
