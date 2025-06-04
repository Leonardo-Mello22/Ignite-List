import TrashIcon from "../assets/icons/trash.svg?react"
import CheckIcon from "../assets/icons/check.svg?react"
import PlusIcon from "../assets/icons/plus.svg?react"
import SpinnerIcon from "../assets/icons/spinner.svg?react"
import PencilIcon from "../assets/icons/pencil.svg?react"
import XIcon from "../assets/icons/XIcon.svg?react"
import {Icon} from "../components/Icon";
import {Badge} from "../components/badge";
import {Button} from "../components/button";
import { Text } from "../components/text"
import {ButtonIcon} from "../components/button-icon"
import { InputText } from "../components/input-text"
import { InputCheckbox } from "../components/input-checkbox"
import { Card } from "../components/card"
import { Container } from "../components/container"
import { Skeleton } from "../components/skeleton"

export function PageComponents() {
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

      <div className="flex gap-1">
        <Badge variant="primary">5</Badge>
        <Badge variant="secondary">2 de 5</Badge>
        <Badge loading>5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
        <Button icon={PlusIcon} handling>creating...</Button>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon}/>
        <ButtonIcon icon={TrashIcon} loading/>
        <ButtonIcon icon={TrashIcon} handling/>
      </div>

      <div>
        <InputText />
      </div>

     <div>
      <InputCheckbox/>
      <InputCheckbox loading/>
     </div>

     <div>
        <Card size="md">Hello world!</Card>
      </div> 

      <div className="space-y-2">
        <Skeleton className="h-5"/>
        <Skeleton />
        <Skeleton className="w-96"/>
      </div>

    </div>
  </Container>
  );
}