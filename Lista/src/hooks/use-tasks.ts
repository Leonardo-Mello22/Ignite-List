import useLocalStorage from "use-local-storage";
import { TASK_KEY, type Task } from "../models/task";

export function useTasks() {
    const [tasks] = useLocalStorage<Task[]>(TASK_KEY, []);

    return {
        tasks,
        tasksCount: tasks.length,
        concluedTasksCount: tasks.filter((task) => task.conclued).length
    };
}