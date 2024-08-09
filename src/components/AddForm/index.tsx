import { FormEvent } from 'react';
import './AddForm.css';

interface AddFormProps {
  title: string | undefined;
  setTitle: (title: string) => void;
  saveTask: (e: FormEvent) => void;
  editId: number | null;
}

export default function AddForm(props: AddFormProps) {
  const { title, setTitle, saveTask, editId } = props;
  return (
    <>
      <h2>แอพบริหารจัดการงาน</h2>
      <form onSubmit={saveTask}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {editId ? 'อัพเดต' : 'เพิ่ม'}
          </button>
        </div>
      </form>
    </>
  );
}
