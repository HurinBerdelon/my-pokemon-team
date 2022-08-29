import Link from "next/link";
import { useUser } from "../../hooks/useUser";
import { MenuContainer } from "./style";

export function Menu(): JSX.Element {

    const { user } = useUser()

    return (
        <MenuContainer>
            <Link href='/'>
                <a>Home</a>
            </Link>

            {user && (
                <Link href='/my-team'>
                    <a>My Team</a>
                </Link>
            )}
            <Link href='/teams'>
                <a>Teams</a>
            </Link>
            <Link href='/about'>
                <a>About</a>
            </Link>
        </MenuContainer>
    )
}