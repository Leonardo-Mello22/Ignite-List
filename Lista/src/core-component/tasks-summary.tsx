import { Badge } from "../components/badge"
import { Text } from "../components/text"

export function TaskSummary(){
    return(
        <>
           <div className="flex items-center gap-2">
                <Text variant="body-sm-bold">
                    Tarefas criadas
                </Text>

                <Badge variant="primary">
                    5
                </Badge>
           </div>

            <div className="flex items-center gap-2">
                <Text variant="body-sm-bold">
                    concluidas
                </Text>

                <Badge variant="secondary">
                   2 de 5
                </Badge>
           </div>
        </>
    )
}