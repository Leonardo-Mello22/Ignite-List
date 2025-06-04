import React, { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import {type Task, TASK_KEY } from "../models/task";

interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASK_KEY, []);

  const value = useMemo(() => ({ tasks, setTasks }), [tasks]);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTaskContext() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
}
