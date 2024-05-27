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

    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropDown label="Time" itens={times} />
            </form>
        </section>
    )
}

export default Form;