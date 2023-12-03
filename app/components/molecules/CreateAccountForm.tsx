import { Component, createSignal } from 'solid-js'

import Button from '@atoms/Button'
import Input, { InputHandler, KeyPressHandler } from '@atoms/Input'

import '@styles/components/molecules/CreateAccountForm.scss'

const CreateAccountForm: Component = () => {
    const [createAccountForm, setCreateAccountForm] = createSignal({
        username: '',
        password: '',
    })

    const inputHandler: InputHandler = (event) => {
        const target = event.currentTarget

        switch (target.placeholder) {
            case 'Username':
                setCreateAccountForm((prev) => ({
                    ...prev,
                    username: target.value,
                }))
                break
            case 'Password':
                setCreateAccountForm((prev) => ({
                    ...prev,
                    password: target.value,
                }))
                break
        }
    }

    const keyPressHandler: KeyPressHandler = (event) => {
        if (event.code == 'Enter') submitLogin()
    }

    const submitLogin = () => {
        const inputs = Object.entries(createAccountForm())

        for (let inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
            const value = inputs[inputIndex][1]
            if ([undefined, null].includes(value) || value.length < 1) return
        }

        setCreateAccountForm(() => ({ username: '', password: '' }))

        console.log('submitted!')
    }

    return (
        <div class="create-account-form">
            <Input
                onKeyPress={keyPressHandler}
                value={createAccountForm().username}
                onInput={inputHandler}
                placeholder={'Username'}
            />
            <Input
                onKeyPress={keyPressHandler}
                value={createAccountForm().password}
                onInput={inputHandler}
                placeholder={'Password'}
            />
            <Button onClick={submitLogin} label={'Log in'} />
        </div>
    )
}

export default CreateAccountForm
