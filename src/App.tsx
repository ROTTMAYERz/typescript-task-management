import { FormEvent, useState } from 'react';
import './App.css';
import { Header, AddForm, Item } from './components';
import { Task } from './interface/interface';

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'แก้บัคโปรแกรม' },
    { id: 2, title: 'คู่มือใช้โปรแกรม' },
  ]);

  const [title, setTitle] = useState<string>('');

  const deleteTask = (id: number) => {
    const result = tasks.filter((vaule) => vaule.id != id);
    setTasks(result);
  };

  const saveTask = (e: FormEvent) => {
    e.preventDefault();
    if (!title) {
      alert('กรุณาป้อนข้อมูลด้วยครับ');
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: title,
      };
      setTasks([...tasks, newTask]);
      setTitle('');
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} />
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
