import Logout from "../features/authentication/Logout";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

function Header() {
    return (
        <header className="bg-[var(--color-grey-0)] border-b border-solid border-[var(--color-grey-100)] flex gap-[2.4rem] items-center justify-end p-[1.2rem_4.8rem]">
            <UserAvatar />
            <HeaderMenu />
        </header>
    );
}

export default Header;
