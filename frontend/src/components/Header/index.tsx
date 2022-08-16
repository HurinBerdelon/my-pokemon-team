import { Popover } from "@headlessui/react";
import { signIn, signOut } from "next-auth/react";
import { Menu } from "../Menu";
import { PopoverMenu } from "../PopoverMenu";
import { Profile } from "../Profile";
import { HeaderContainer } from "./style";

export function Header(): JSX.Element {


    return (
        <HeaderContainer>
            <h2>My Pokemon Team</h2>
            <button onClick={() => signIn('google', { callbackUrl: '/auth/login_callback' })}>
                Login
            </button>
            <div className="menuContainer">
                <Menu />
                <Popover>
                    <Popover.Button className="profileButton">
                        <div className="miniImgContainer">
                            <img src="/avatar/Gojou.jpg" alt="profile" />
                        </div>
                    </Popover.Button>
                    <Popover.Panel className='popoverMenuContent'>
                        <Profile />
                        <div className="logout">
                            <button
                                className="logoutButton"
                                onClick={() => signOut({ callbackUrl: '/auth/logout_callback' })}
                            >
                                Logout
                            </button>
                        </div>
                    </Popover.Panel>
                </Popover>
            </div>
            <PopoverMenu />
        </HeaderContainer>
    )
}