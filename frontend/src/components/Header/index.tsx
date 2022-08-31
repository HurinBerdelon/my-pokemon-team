import { Popover } from "@headlessui/react";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { LoginModal } from "../LoginModal";
import { Menu } from "../Menu";
import { PopoverMenu } from "../PopoverMenu";
import { Profile } from "../Profile";
import { HeaderContainer } from "./style";

export function Header(): JSX.Element {

    const { user, revokeAuthentication } = useUser()
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

    // TODO: Check if referrerPolicy is needed when deployed

    return (
        <HeaderContainer>
            <h2>My Pokemon Team</h2>
            <LoginModal
                isOpen={isLoginModalOpen}
                onRequestClose={() => setIsLoginModalOpen(false)}
            />

            <div className="menuContainer">
                <Menu />
                <Popover>
                    <Popover.Button className="profileButton">
                        <div className="miniImgContainer">
                            {user
                                ? user.avatarURL
                                    ? <img referrerPolicy="no-referrer" src={user.avatarURL} alt="profile" />
                                    : <img src="/avatar/user.png" alt="profile" />
                                : <img src="/avatar/user.png" alt="profile" />
                            }
                        </div>
                    </Popover.Button>
                    <Popover.Panel className='popoverMenuContent'>
                        <Profile />
                        {!user && (
                            <div className="login">
                                <button
                                    onClick={() => setIsLoginModalOpen(true)}
                                    className="loginButton"
                                >
                                    Login
                                </button>
                            </div>
                        )}
                        {user && (
                            <div className="logout">
                                <button
                                    className="logoutButton"
                                    onClick={() => revokeAuthentication()}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </Popover.Panel>
                </Popover>
            </div>
            <PopoverMenu />
        </HeaderContainer>
    )
}