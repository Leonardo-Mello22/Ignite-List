import {useLocalStorage} from "./useLocalStorage";
import { TASK_KEY, TaskState, type Task } from "../models/task";
import React from "react";
import { delay } from "../helpers/utils";

export function useTasks() {
    const [tasksData] = useLocalStorage<Task[]>(TASK_KEY, []);
    const[tasks, setTasks] = React.useState<Task[]>([]);
    const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

    async function fetchTasks(){
        if(isLoadingTasks){
            await delay(2000)
            setIsLoadingTasks (false)
        }
    setTasks(tasksData)
    }

    React.useEffect(()=>{
        fetchTasks();
    }, [tasksData])

    return {
        tasks,
        tasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
        concluedTasksCount: tasks.filter((task) => task.conclued).length,
        isLoadingTasks,
    };
}