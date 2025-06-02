import { ButtonIcon } from "../components/button-icon";
import { Card } from "../components/card";
import { InputCheckbox } from "../components/input-checkbox";
import { Text } from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react"
import PencilIcon from "../assets/icons/pencil.svg?react"
import Xicon from "../assets/icons/XIcon.svg?react"
import CheckIcon from "../assets/icons/check.svg?react"
import React from "react";
import { InputText } from "../components/input-text";

export function TaskItem(){
    const [isEditing, setIsEditing] = React.useState(false)

    function handleEditTask(){
        setIsEditing(true);
    }

    function handleExitEditTask(){
        setIsEditing(false);
    }

    return (
        <Card size="md" className="flex items-center gap-3">
            {!isEditing ? (
            <>
            
            <InputCheckbox/>
            <Text className="flex-1">🛒 Fazer compras da semana</Text>
            <div className="flex gap-1">
                <ButtonIcon icon={TrashIcon}/>
                <ButtonIcon icon={PencilIcon} variant="secondary" onClick={handleEditTask}/>
            </div>
            </>
            ):(
            <>
               <InputText className="flex-1"/>
                <div className="flex gap-1">
                    <ButtonIcon icon={Xicon} onClick={handleExitEditTask}/>
                    <ButtonIcon icon={CheckIcon} variant="tertiary" />
                </div>
            </>
            )}

        </Card>
    );
}