import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { LoginModal } from "../LoginModal";
import { PresentationHeaderContainer } from "./style";

export function PresentationHeader(): JSX.Element {

    const { user } = useUser()

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

    return (
        <PresentationHeaderContainer>
            <LoginModal
                isOpen={isLoginModalOpen}
                onRequestClose={() => setIsLoginModalOpen(false)}
            />

            <h2>Welcome to My Pokemon Team</h2>
            {!user &&
                <p>
                    You can see a list with all pokemons from the first, second and third generations below.
                    If you would like to create your team,
                    <span onClick={() => setIsLoginModalOpen(true)}>
                        {` click here `}
                    </span>
                    to authenticate yourself with
                    your Google or Facebook account to get access to {`"my-team"`} page and recruite your favorite pokemons.
                </p>}
        </PresentationHeaderContainer>
    )
}