import hexToRgba from "hex-to-rgba";
import Employee from "../Employee";
import "./Team.css"

const Team = (props) => {
    return (
        props.employees.length > 0 && <section className="team" style={{ backgroundColor: hexToRgba(props.color, 0.5) }}>
            <input type="color" className="team-color" value={props.color} onChange={e => props.onChangeColor(e.target.value, props.id)} />
            <h3 style={{ borderColor: props.color }}>{props.name}</h3>
            <div className="employees">
                {props.employees.map(employee => {
                    return (
                        <Employee
                            nome={employee.nome}
                            cargo={employee.cargo}
                            imagem={employee.imagem}
                            color={props.color}
                            key={employee.nome}
                            id={employee.id}
                            onDelete={props.onDelete}
                            isFavorite={employee.favorito}
                            onFavorite={props.onFavorite}
                        />);

                })}
            </div>
        </section>
    )
}

export default Team;