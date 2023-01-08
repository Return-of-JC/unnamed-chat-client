export function Input(prop) {
    return <input onKeyPress={prop.onKeyPress} onInput={prop.onInput} value={prop.value} placeholder={prop.label}></input>
}