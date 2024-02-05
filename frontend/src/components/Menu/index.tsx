import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { ActiveLink } from "./ActiveLink";
import { MenuContainer } from "./style";

export function Menu(): JSX.Element {
  const { user } = useUser();

  return (
    <MenuContainer>
      <ActiveLink href="/" activeClassName="active">
        <span>Home</span>
      </ActiveLink>

      {user && (
        <ActiveLink href="/my-team" activeClassName="active">
          <span>My Team</span>
        </ActiveLink>
      )}
      <ActiveLink href="/teams" activeClassName="active">
        <span>Teams</span>
      </ActiveLink>
      <ActiveLink href="/about" activeClassName="active">
        <span>About</span>
      </ActiveLink>
    </MenuContainer>
  );
}
