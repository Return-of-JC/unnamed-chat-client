import { render } from 'solid-js/web'
import { Router, Routes, Route } from '@solidjs/router'
import { LoginComponent } from '@molecules/login'
import { createSignal } from 'solid-js'

import './index.scss'

function Root() {
    return (
        <Router>
            <Routes>
                <Route path="/" component={LoginComponent} />
            </Routes>
        </Router>
    )
}

render(() => <Root />, document.getElementById('root'))
