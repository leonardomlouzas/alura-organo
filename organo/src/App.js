import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const addNewEmployee = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaboradores);
  };

  return (
    <div className="App">
      <Banner />
      <Form onNewEmployee={colaborador => addNewEmployee(colaborador)} />
    </div>
  );
}

export default App;
