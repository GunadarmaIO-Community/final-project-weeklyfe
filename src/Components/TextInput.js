export default function TextInput({ type, id, placeholder, className, onChange, value }) {
    return (
        <input type={type} value={value} id={id} placeholder={placeholder} className={`border p-2 rounded mt-1 ${className}`} onChange={onChange} />
    )
}