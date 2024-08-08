export interface Task {
    id: number;
    title: string;
  }

export type DeleteTask = (id: number) => void;
  