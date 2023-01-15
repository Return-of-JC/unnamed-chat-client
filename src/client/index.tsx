import { render } from 'solid-js/web'
import { Router, Routes, Route } from '@solidjs/router'
import ChatPage from '@pages/ChatPage'

import '@styles/index.scss'

function Root() {
    return (
        <Router>
            <Routes>
                <Route path="/" component={ChatPage} />
            </Routes>
        </Router>
    )
}

render(() => <Root />, document.getElementById('root'))
