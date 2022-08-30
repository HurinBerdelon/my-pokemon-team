import { Popover } from "@headlessui/react";
import { useUser } from "../../../hooks/useUser";
import { DeleteAccountContainer } from "./style";

export function DeleteAccount(): JSX.Element {

    const { deleteUserAccount } = useUser()

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
                    {({ close }) => (
                        <>
                            <h4>Are you sure you want to delete your account?</h4>
                            <p>This cannot be reverted.</p>
                            <div className="buttons">
                                <button
                                    className="confirm"
                                    onClick={() => deleteUserAccount()}
                                >
                                    Delete
                                </button>
                                <button
                                    className="cancel"
                                    onClick={() => close()}
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    )}
                </Popover.Panel>
            </Popover>
        </DeleteAccountContainer>
    )
}