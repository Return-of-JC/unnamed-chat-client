import './styling.css'
export function Button(prop) {
    return <button onClick={prop.onClick}>{prop.label}</button>
}
