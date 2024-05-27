import "./DropDown.css"

const DropDown = (props) => {
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown
