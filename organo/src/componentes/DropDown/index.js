import "./DropDown.css"

const DropDown = (props) => {
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select required={props.isRequired} value={props.value} onChange={event => props.onChange(event.target.value)}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown
