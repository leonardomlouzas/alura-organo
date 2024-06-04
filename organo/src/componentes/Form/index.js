import { useState } from "react"
import Button from "../Button";
import DropDown from "../DropDown";
import Field from "../Field";
import "./Form.css"


const Form = (props) => {
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");
    const [nomeTime, setNomeTime] = useState("");
    const [corTime, setCorTime] = useState("#ffffff");


    const toSubmit = (event) => {
        event.preventDefault();
        props.onNewEmployee({ nome, cargo, imagem, time });
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    }

    return (
        <section className="form">
            <form onSubmit={toSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Field
                    isRequired={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={value => setNome(value)}
                />
                <Field
                    isRequired={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={cargo}
                    onChange={value => setCargo(value)}
                />
                <Field
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    onChange={value => setImagem(value)}
                />
                <DropDown
                    isRequired={true}
                    label="Time"
                    itens={props.teams}
                    value={time}
                    onChange={value => setTime(value)}
                />
                <Button texto="Criar Card" />
            </form>
            <form onSubmit={e => { e.preventDefault(); props.onNewTeam({ name: nomeTime, color: corTime }) }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Field
                    isRequired
                    label="Nome"
                    placeholder="Digite o nome do time"
                    value={nomeTime}
                    onChange={value => setNomeTime(value)}
                />
                <Field
                    isRequired={true}
                    label="Cor"
                    placeholder="Digite a cor do time"
                    value={corTime}
                    type="color"
                    onChange={value => setCorTime(value)}
                />
                <Button texto="Criar um novo time" />
            </form>
        </section>
    )
}

export default Form;