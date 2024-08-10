import './Item.css';
import { Task, DeleteTask, EditTask } from '../../interface/interface';
import { BiTrash, BiEdit } from 'react-icons/bi';

interface ItemProps {
  data: Task;
  deltask: DeleteTask;
  edittask: EditTask;
}

export default function Item(props: ItemProps) {
  const { data, deltask, edittask } = props;
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <div className="button-container">
        <div>
          <BiTrash className="btn" onClick={() => deltask(data.id)} />
        </div>
        <div>
          <BiEdit className="btn" onClick={() => edittask(data.id)} />
        </div>
      </div>
    </div>
  );
}
