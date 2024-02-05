import Image from "next/image";
import Link from "next/link";
import { useUser } from "../../hooks/useUser";
import { ProfileContainer } from "./style";

export function Profile(): JSX.Element {

    const { user } = useUser()

    // TODO: Check if referrerPolicy is needed when deployeds

    return (
        <ProfileContainer>
            <div className="imgContainer">
                {user
                    ? user.avatarURL
                        ? <img referrerPolicy="no-referrer" src={user.avatarURL} alt="profile" />
                        : <img src="/avatar/user.png" alt="profile" />
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