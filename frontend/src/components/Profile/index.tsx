import Link from "next/link";
import { ProfileContainer } from "./style";

export function Profile(): JSX.Element {

    return (
        <ProfileContainer>
            <div className="imgContainer">
                <img src="/avatar/Gojou.jpg" alt="profile" />
            </div>
            <h4 className="profileName">Satoru Gojou</h4>
            <Link href="/user-settings">
                <a className="profileUpdateButton">Update Profile</a>
            </Link>
        </ProfileContainer>
    )
}