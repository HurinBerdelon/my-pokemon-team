import { List } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { PopoverMenuContainer } from "./style";
import { Menu } from '../Menu';
import { Profile } from '../Profile';
import { signOut } from 'next-auth/react';
import { useUser } from '../../hooks/useUser';
import { useState } from 'react';
import { LoginModal } from '../LoginModal';

export function PopoverMenu(): JSX.Element {

    const { user, revokeAuthentication } = useUser()
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

    return (
        <PopoverMenuContainer>
            <LoginModal
                isOpen={isLoginModalOpen}
                onRequestClose={() => setIsLoginModalOpen(false)}
            />
            <Popover>
                <Popover.Button>
                    <List />
                </Popover.Button>
                <Popover.Panel className='popoverMenuContent'>
                    <Profile />
                    <Menu />
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
        </PopoverMenuContainer>
    )
}