import { useState } from 'react';
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
      name: "Front-end",
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

  const inicial = [
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[0].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[0].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[0].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[1].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[1].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[1].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[2].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[2].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[2].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[2].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[3].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[3].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[3].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[3].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[4].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[4].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[4].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[4].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[5].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[5].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[5].name,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[5].name,
      isFavorite: false,
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial);

  const addNewEmployee = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  function deleteEmployee(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
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

  function toggleFavorite(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.isFavorite = !colaborador.isFavorite;
      return colaborador;
    }))
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
