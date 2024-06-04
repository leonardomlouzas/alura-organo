import { useEffect, useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Team from './componentes/Team';
import Footer from './componentes/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#57c278",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      color: "#82cffa",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#a6d157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#e06b69",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#db6ebf",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#ffba05",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#ff8a29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/employees")
      .then(r => r.json())
      .then(dados => setColaboradores(dados))
  }, [])

  const addNewEmployee = (colaborador) => {
    fetch("http://localhost:8000/employees", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(colaborador)
    })
      .then(r => r.json())
      .then(dados => setColaboradores([...colaboradores, dados]))
  };

  function deleteEmployee(id) {
    fetch("http://localhost:8000/employees/" + id, {
      method: "DELETE"
    })
      .then(() => { setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id)) }
      )
  }

  function changeColor(color, id) {
    setTimes(times.map(team => {
      if (team.id === id) {
        team.color = color;
      }
      return team;
    }))
  }

  function addNewTeam(newTeam) {
    setTimes([...times, { ...newTeam, id: uuidv4() }])
  }

  function toggleFavorite(id, isFavorite) {
    fetch("http://localhost:8000/employees/" + id, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ favorito: !isFavorite })
    })
      .then(() => {
        setColaboradores(colaboradores.map(colaborador => {
          if (colaborador.id === id) {
            colaborador.favorito = !colaborador.favorito;
          }
          return colaborador;
        }))
      })
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teams={times.map(team => team.name)}
        onNewEmployee={colaborador => addNewEmployee(colaborador)}
        onNewTeam={addNewTeam}
      />
      {times.map(team => <Team
        onFavorite={toggleFavorite}
        name={team.name}
        key={team.name}
        color={team.color}
        id={team.id}
        employees={colaboradores.filter(colaborador => colaborador.time === team.name)}
        onDelete={deleteEmployee}
        onChangeColor={changeColor}
      />
      )}
      <Footer />
    </div>
  );
}

export default App;
