import { PopoverMenu } from "../PopoverMenu";
import { HeaderContainer } from "./style";

export function Header(): JSX.Element {

    return (
        <HeaderContainer>
            <h2>My Pokemon Team</h2>
            <PopoverMenu />
        </HeaderContainer>
    )
}