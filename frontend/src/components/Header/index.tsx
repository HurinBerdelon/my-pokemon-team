import { Popover } from "@headlessui/react";
import { signOut } from "next-auth/react";
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
                                // ? <img src={user.imageURL} alt="profile" />
                                ? <img src="/avatar/Gojou.jpg" alt="profile" />
                                : <img src="/avatar/user.png" alt="profile" />
                            }
                        </div>
                    </Popover.Button>
                    <Popover.Panel className='popoverMenuContent'>
                        <Profile />
                        {!user && (
                            <div className="logout">
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