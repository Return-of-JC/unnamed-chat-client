import { Button } from '@atoms/button/component'
import { Input } from '@atoms/input'
import { createSignal } from 'solid-js'

const LoginComponent = () => {
    const [loginForm, setLoginForm] = createSignal({
        username: '',
        password: '',
    })

    function OnInputHandler(event) {
        if (event.target.placeholder == 'Username')
            setLoginForm(
                Object.assign(loginForm(), { username: event.target.value })
            )
        else
            setLoginForm(
                Object.assign(loginForm(), { password: event.target.value })
            )
    }

    function CheckIfEnter(event) {
        if (event.code == 'Enter') SubmitLogin()
    }

    function SubmitLogin() {
        if (loginForm().username === '' || loginForm().password === '') return
        console.log('submitted m8')
    }

    return (
        <div>
            <Input
                onKeyPress={CheckIfEnter}
                value={loginForm().username}
                onInput={OnInputHandler}
                label={'Username'}
            />
            <Input
                onKeyPress={CheckIfEnter}
                value={loginForm().password}
                onInput={OnInputHandler}
                label={'Password'}
            />
            <Button onClick={SubmitLogin} label={'Log in'} />
        </div>
    )
}

export { LoginComponent }
