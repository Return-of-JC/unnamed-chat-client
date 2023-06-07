import { Component, createSignal } from 'solid-js'

import Button from '@atoms/Button'
import Input, { InputHandler, KeyPressHandler } from '@atoms/Input'

import '@styles/components/molecules/LoginForm.scss'

const LoginForm: Component = () => {
    const [loginForm, setLoginForm] = createSignal({
        username: '',
        password: '',
    })

    const inputHandler: InputHandler = (event) => {
        const target = event.currentTarget

        switch (target.placeholder) {
            case 'Username':
                setLoginForm((prev) => ({ ...prev, username: target.value }))
                break
            case 'Password':
                setLoginForm((prev) => ({ ...prev, password: target.value }))
                break
        }
    }

    const keyPressHandler: KeyPressHandler = (event) => {
        if (event.code == 'Enter') submitLogin()
    }

    const submitLogin = () => {
        const inputs = Object.entries(loginForm())

        for (let inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
            const value = inputs[inputIndex][1]
            if ([undefined, null].includes(value) || value.length < 1) return
        }

        console.log('submitted!')
    }

    return (
        <div class="login-form">
            <Input
                onKeyPress={keyPressHandler}
                value={loginForm().username}
                onInput={inputHandler}
                placeholder={'Username'}
            />
            <Input
                onKeyPress={keyPressHandler}
                value={loginForm().password}
                onInput={inputHandler}
                placeholder={'Password'}
            />
            <Button onClick={submitLogin} label={'Log in'} />
        </div>
    )
}

export default LoginForm
