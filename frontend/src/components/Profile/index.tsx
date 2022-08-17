import Link from "next/link";
import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { ProfileContainer } from "./style";

export function Profile(): JSX.Element {

    const { user } = useUser()


    return (
        <ProfileContainer>
            <div className="imgContainer">
                {user
                    ? <img src={user.imageURL} alt="profile" />
                    : <img src="/avatar/user.png" alt="profile" />
                }
            </div>
            {user && (
                <>
                    <h4 className="profileName">{user.name}</h4>
                    <Link href="/user-settings">
                        <a className="profileUpdateButton">Update Profile</a>
                    </Link>
                </>
            )}
        </ProfileContainer>
    )
}