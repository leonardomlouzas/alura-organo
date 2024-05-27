import Button from "../Button";
import DropDown from "../DropDown";
import TextField from "../TextField";
import "./Form.css"


const Form = () => {
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const toSubmit = (event) => {
        event.preventDefault();
        console.log('Cadastrado com sucesso!');
    }

    return (
        <section className="form">
            <form onSubmit={toSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField isRequired={true} label="Nome" placeholder="Digite seu nome" />
                <TextField isRequired={true} label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropDown isRequired={true} label="Time" itens={times} />
                <Button texto="Criar Card" />
            </form>
        </section>
    )
}

export default Form;