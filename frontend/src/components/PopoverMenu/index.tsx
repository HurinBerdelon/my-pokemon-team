import { List } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { PopoverMenuContainer } from "./style";
import { Menu } from '../Menu';

export function PopoverMenu(): JSX.Element {

    return (
        <PopoverMenuContainer>
            <Popover>
                <Popover.Button>
                    <List />
                </Popover.Button>
                <Popover.Panel className='popoverMenuContent'>
                    <Menu />
                </Popover.Panel>
            </Popover>
        </PopoverMenuContainer>
    )
}