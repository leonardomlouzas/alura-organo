import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Team from './componentes/Team';

function App() {
  const times = [
    {
      name: "Programação",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9"
    },
    {
      name: "Front-end",
      primaryColor: "#82cffa",
      secondaryColor: "#e8f8ff"
    },
    {
      name: "Data Science",
      primaryColor: "#a6d157",
      secondaryColor: "#f0f8e2"
    },
    {
      name: "Devops",
      primaryColor: "#e06b69",
      secondaryColor: "#fde7e8"
    },
    {
      name: "UX e Design",
      primaryColor: "#db6ebf",
      secondaryColor: "#fae9f5"
    },
    {
      name: "Mobile",
      primaryColor: "#ffba05",
      secondaryColor: "#fff5d9"
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#ff8a29",
      secondaryColor: "#ffeedf"
    },
  ]
  const [colaboradores, setColaboradores] = useState([]);

  const addNewEmployee = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaboradores);
  };

  return (
    <div className="App">
      <Banner />
      <Form teams={times.map(team => team.name)} onNewEmployee={colaborador => addNewEmployee(colaborador)} />
      {times.map(team => <Team name={team.name} key={team.name} primaryColor={team.primaryColor} secondaryColor={team.secondaryColor} />)}
    </div>
  );
}

export default App;
