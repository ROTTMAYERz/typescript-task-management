import { FormEvent, useEffect, useState } from 'react';
import './App.css';
import { Header, AddForm, Item } from './components';
import { Task } from './interface/interface';

function App() {
  const [tasks, setTasks] = useState<Task[]>(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  const [title, setTitle] = useState<string | undefined>('');
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (id: number) => {
    const result = tasks.filter((vaule) => vaule.id != id);
    setTasks(result);
  };

  const editTask = (id: number) => {
    setEditId(id);
    const editTask = tasks.find((value) => value.id === id);
    setTitle(editTask?.title || '');
  };

  const saveTask = (e: FormEvent) => {
    e.preventDefault();
    if (!title) {
      alert('กรุณาป้อนข้อมูลด้วยครับ');
    } else if (editId) {
      const updatetasks = tasks.map((value) => {
        if (value.id === editId) {
          return { ...value, title: title };
        }
        return value;
      });
      setTasks(updatetasks);
      setEditId(null);
      setTitle('');
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
        <AddForm
          title={title}
          setTitle={setTitle}
          saveTask={saveTask}
          editId={editId}
        />
        <section>
          {tasks.map((data) => (
            <Item
              key={data.id}
              data={data}
              deltask={deleteTask}
              edittask={editTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
