import { useState } from "react"
import Button from "../Button";
import DropDown from "../DropDown";
import TextField from "../TextField";
import "./Form.css"


const Form = (props) => {
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");



    const toSubmit = (event) => {
        event.preventDefault();
        props.onNewEmployee({ nome, cargo, imagem, time });
    }

    return (
        <section className="form">
            <form onSubmit={toSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField
                    isRequired={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={value => setNome(value)}
                />
                <TextField
                    isRequired={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={cargo}
                    onChange={value => setCargo(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    onChange={value => setImagem(value)}
                />
                <DropDown
                    isRequired={true}
                    label="Time"
                    itens={times}
                    value={time}
                    onChange={value => setTime(value)}
                />
                <Button texto="Criar Card" />
            </form>
        </section>
    )
}

export default Form;