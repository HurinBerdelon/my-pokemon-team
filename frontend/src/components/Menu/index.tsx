import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { ActiveLink } from "./ActiveLink";
import { MenuContainer } from "./style";

export function Menu(): JSX.Element {

    const { user } = useUser()

    return (
        <MenuContainer>

            <ActiveLink href='/' activeClassName="active">
                <a>Home</a>
            </ActiveLink>

            {user && (
                <ActiveLink href='/my-team' activeClassName="active">
                    <a>My Team</a>
                </ActiveLink>
            )}
            <ActiveLink href='/teams' activeClassName="active">
                <a>Teams</a>
            </ActiveLink>
            <ActiveLink href='/about' activeClassName="active">
                <a>About</a>
            </ActiveLink>
        </MenuContainer>
    )
}