import { Container } from "../components/container";
import Logo from "../assets/img/MyIgniteWhite-removebg-preview.svg?react"

export function Header() {
    return (
        <header className="w-full mt-3 md:mt-20 bg-black-900">
            <Container>
                <Logo className="h-9 md:h-12" />
            </Container>
        </header>
    )
}
