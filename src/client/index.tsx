import { render } from 'solid-js/web'
import { Router, Routes, Route } from '@solidjs/router'
import Login from '@molecules/login'

import './index.scss'

function Root() {
    return (
        <Router>
            <Routes>
                <Route path="/" component={Login} />
            </Routes>
        </Router>
    )
}

render(() => <Root />, document.getElementById('root'))
