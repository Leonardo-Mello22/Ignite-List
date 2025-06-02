import { Container } from "../components/container";
import { TasksList } from "../core-component/tasks-list";
import { TaskSummary } from "../core-component/tasks-summary";

export function PageHome(){
    return( 
    <Container as="article" className="space-y-3">
     <header className="flex items-center justify-between">
        <TaskSummary></TaskSummary>
     </header>
        
      <TasksList />
    </Container>
    )
}