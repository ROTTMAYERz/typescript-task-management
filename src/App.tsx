import { useState } from 'react';
import './App.css';
import { Header, AddForm, Item } from './components';
import { Task } from './interface/interface';

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'แก้บัคโปรแกรม' },
    { id: 2, title: 'คู่มือใช้โปรแกรม' },
    { id: 3, title: 'กดเงินที่ธนาคาร' },
  ]);

  const deleteTask = (id: number) => {
    const result = tasks.filter((vaule) => vaule.id != id);
    setTasks(result);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddForm />
        <section>
          {tasks.map((data) => (
            <Item key={data.id} data={data} deltask={deleteTask} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
