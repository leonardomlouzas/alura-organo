import "./Field.css"

const Field = (props) => {
    const onType = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <div className={`field field--${props.type || "text"}`}>
            <label>{props.label}</label>
            <input
                type={props.type || "text"}
                value={props.value}
                onChange={onType}
                required={props.isRequired}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Field;