import Link from "next/link";
import { MenuContainer } from "./style";

export function Menu(): JSX.Element {

    return (
        <MenuContainer>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <Link href='/teams'>
                <a>Teams</a>
            </Link>

            <Link href='/my-team'>
                <a>My Team</a>
            </Link>
        </MenuContainer>
    )
}