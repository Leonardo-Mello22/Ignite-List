import { ButtonIcon } from "../components/button-icon";
import { Card } from "../components/card";
import { InputCheckbox } from "../components/input-checkbox";
import { Text } from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import Xicon from "../assets/icons/XIcon.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import React from "react";
import { InputText } from "../components/input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import { useTask } from "../hooks/use-task";
import { Skeleton } from "../components/skeleton";

interface TaskItemProps {
    task: Task;
    loading?: boolean;
}

export function TaskItem({ task, loading }: TaskItemProps) {
    const [isEditing, setIsEditing] = React.useState(task?.state === TaskState.Creating);

    const [taskTitle, setTaskTitle] = React.useState(task.title || "");

    const { updateTask, updateTaskStatus, deleteTask, isUpdatingTask, isDeletingTask } = useTask();



    function handleEditTask() {
        setTaskTitle(task.title ?? "");
        setIsEditing(true);
    }

    function handleExitEditTask() {
        if (task.state === TaskState.Creating){
            deleteTask(task.id);
        }
        setIsEditing(false);
    }

    function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value || "");
    }

    async function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (taskTitle.trim() !== "") {
            await updateTask(task.id, { title: taskTitle.trim() });
            setIsEditing(false);
        }
    }

    function handleUpdateTaskStatus(e: React.ChangeEvent<HTMLInputElement>){
        const checked = e.target.checked;
        updateTaskStatus(task.id, checked)
    }

    async function handleClickDeleteTask(){
       await deleteTask(task.id);
    }

    return (
        <Card size="md">
            {!isEditing ? (
                <div className="flex items-center gap-3">
                    <InputCheckbox 
                        checked={task?.conclued} 
                        onChange={handleUpdateTaskStatus}
                        loading={loading}
                        />
                    {!loading ?<Text
                        className={cx("flex-1", {
                            "line-through": task?.conclued,
                        })}
                    >
                        {task?.title}
                    </Text> : 
                        <Skeleton className="flex-1 h-6"/>
                    }
                    <div className="flex gap-1">
                        <ButtonIcon 
                            type="button" 
                            icon={TrashIcon} 
                            onClick={handleClickDeleteTask} 
                            loading={loading}
                            handling={isDeletingTask}
                        />
                        <ButtonIcon
                            type="button"
                            icon={PencilIcon}
                            variant="secondary"
                            onClick={handleEditTask}
                            loading={loading}
                        />
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSaveTask} className="flex items-center gap-3">
                    <InputText
                        className="flex-1"
                        value={taskTitle}
                        onChange={handleChangeTaskTitle}
                        required
                        autoFocus
                    />
                    <div className="flex gap-1">
                        <ButtonIcon
                            type="button"
                            icon={Xicon}
                            onClick={handleExitEditTask}
                        />
                        <ButtonIcon type="submit" icon={CheckIcon} variant="tertiary" handling={isUpdatingTask} />
                    </div>
                </form>
            )}
        </Card>
    );
}
