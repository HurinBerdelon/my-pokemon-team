import { Popover } from "@headlessui/react";
import { DeleteAccountContainer } from "./style";

export function DeleteAccount(): JSX.Element {

    return (
        <DeleteAccountContainer>
            <Popover>
                <Popover.Button
                    className="deleteButton"
                    onClick={() => { }}
                >
                    Delete account
                </Popover.Button>
                <Popover.Panel className='confirmDeletion'>
                    <h4>Are you sure you want to delete your account?</h4>
                    <p>This cannot be reverted.</p>
                    <div className="buttons">
                        <button className="confirm">Delete</button>
                        <button className="cancel">Cancel</button>
                    </div>
                </Popover.Panel>
            </Popover>
        </DeleteAccountContainer>
    )
}