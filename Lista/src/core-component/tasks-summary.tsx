import { Badge } from "../components/badge"
import { Text } from "../components/text"
import { useTasks } from "../hooks/use-tasks"

export function TaskSummary(){
    const { tasks, tasksCount, concluedTasksCount, isLoadingTasks } = useTasks();
    
    return(
        <>
           <div className="flex items-center gap-2">
                <Text variant="body-sm-bold">
                    Tarefas criadas
                </Text>

                <Badge variant="primary" loading={isLoadingTasks}>
                    {tasksCount}
                </Badge>
           </div>

            <div className="flex items-center gap-2">
                <Text variant="body-sm-bold">
                    concluidas
                </Text>

                <Badge variant="secondary" loading={isLoadingTasks}>
                   {concluedTasksCount} de {tasksCount}
                </Badge>
           </div>
        </>
    )
}