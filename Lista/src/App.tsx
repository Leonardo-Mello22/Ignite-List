import TrashIcon from "./assets/icons/trash.svg?react"
import CheckIcon from "./assets/icons/check.svg?react"
import PlusIcon from "./assets/icons/plus.svg?react"
import SpinnerIcon from "./assets/icons/spinner.svg?react"
import PencilIcon from "./assets/icons/pencil.svg?react"
import XIcon from "./assets/icons/XIcon.svg?react"
import {Icon} from "./components/Icon";
import Badge from "./components/badge";
import Button from "./components/button";
import { Text } from "./components/text"
import {ButtonIcon} from "./components/button-icon"
import { InputText } from "./components/input-text"
import { InputCheckbox } from "./components/input-checkbox"
import { Card } from "./components/card"
import { Container } from "./components/container"

export function App() {
  return (
  <Container>
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text className="text-black">Olá mundo!</Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-blue-300" />
        <Icon svg={CheckIcon} className="fill-green-500"/>
        <Icon svg={PlusIcon} className="fill-red-500"/>
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={PencilIcon} className="fill-blue-500"/>
        <Icon svg={XIcon} />
      </div>

      <div>
        <Badge variant="primary">5</Badge>
        <Badge variant="secondary">2 de 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon}/>
      </div>

      <div>
        <InputText />
      </div>

     <div>
      <InputCheckbox/>
     </div>

     <div>
        <Card size="md">Hello world!</Card>
      </div> 

    </div>
  </Container>
  );
}
