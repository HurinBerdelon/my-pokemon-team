import { Dialog } from "@headlessui/react";
import { GoogleLogo, FacebookLogo } from 'phosphor-react'
import { ModalContentOverlay } from "../../styles/global";
import { LoginModalContainer } from "./style";
import { signIn } from 'next-auth/react'

interface LoginModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function LoginModal({ isOpen, onRequestClose }: LoginModalProps): JSX.Element {

    return (
        <Dialog open={isOpen} onClose={onRequestClose}>
            <ModalContentOverlay aria-hidden={true} />
            <LoginModalContainer>
                <Dialog.Panel className="dialogContent">
                    <Dialog.Title>
                        Welcome to My Pokemon Team
                    </Dialog.Title>
                    <Dialog.Description>
                        Login with your Google or Facebook account to make your team.
                    </Dialog.Description>
                    <button
                        className="authButton"
                        onClick={() => signIn("google", { callbackUrl: '/auth/login_callback' })}
                    >
                        <GoogleLogo />
                        Login with Google
                    </button>
                    <button
                        className="authButton"
                        onClick={() => signIn('facebook', { callbackUrl: '/auth/login_callback' })}
                    >
                        <FacebookLogo />
                        Login with Facebook
                    </button>
                </Dialog.Panel>
            </LoginModalContainer>
        </Dialog>
    )
}