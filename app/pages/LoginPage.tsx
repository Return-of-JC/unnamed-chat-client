import { Component } from 'solid-js'

import LoginForm from '@molecules/LoginForm'

import '@styles/pages/LoginPage.scss'

const LoginPage: Component = () => {
    return (
        <div class="login-page">
            <LoginForm></LoginForm>
        </div>
    )
}

export default LoginPage
