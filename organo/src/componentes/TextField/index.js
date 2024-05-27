import "./TextField.css"

const TextField = (props) => {
    const onType = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <div className="TextField">
            <label>{props.label}</label>
            <input value={props.value} onChange={onType} required={props.isRequired} placeholder={props.placeholder} />
        </div>
    )
}

export default TextField;