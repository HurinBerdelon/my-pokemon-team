import { List } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { PopoverMenuContainer } from "./style";
import { Menu } from '../Menu';
import { Profile } from '../Profile';
import { signOut } from 'next-auth/react';

export function PopoverMenu(): JSX.Element {

    return (
        <PopoverMenuContainer>
            <Popover>
                <Popover.Button>
                    <List />
                </Popover.Button>
                <Popover.Panel className='popoverMenuContent'>
                    <Profile />
                    <Menu />
                    <div className="logout">
                        <button className="logoutButton" onClick={() => {
                            console.log('logout')
                            // signOut({ callbackUrl: 'http://localhost:3000/' })
                        }}>
                            Logout
                        </button>
                    </div>
                </Popover.Panel>
            </Popover>
        </PopoverMenuContainer>
    )
}