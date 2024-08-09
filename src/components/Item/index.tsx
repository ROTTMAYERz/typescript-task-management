import './Item.css';
import { Task, DeleteTask, EditTask } from '../../interface/interface';

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
        <button className="btn" onClick={() => deltask(data.id)}>
          ลบ
        </button>
        <button className="btn" onClick={() => edittask(data.id)}>
          แก้ไข
        </button>
      </div>
    </div>
  );
}
