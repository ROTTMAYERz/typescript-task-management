import './Item.css';
import { Task, DeleteTask } from '../../interface/interface';

interface ItemProps {
  data: Task;
  deltask: DeleteTask;
}

export default function Item(props: ItemProps) {
  const { data, deltask } = props;
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <div className="button-container">
        <button className="btn" onClick={() => deltask(data.id)}>
          ลบ
        </button>
        <button className="btn">แก้ไข</button>
      </div>
    </div>
  );
}
