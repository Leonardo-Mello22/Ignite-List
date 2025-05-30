import { NavLink } from "react-router";
import { Text } from "../components/text";

export function Footer(){
    return(
        <footer className="my-5 md:my-10s">
        <nav className="flex items-center justify-center gap-4">
            <NavLink to="/">
                <Text variant="body-sm-bold" className="text-black-900">
                    Tarefas
                </Text>
            </NavLink>
            <NavLink to="/components">
                <Text variant="body-sm-bold" className="text-black-900">
                    Componentes
                </Text>
            </NavLink>
        </nav>
    </footer>
    )
}