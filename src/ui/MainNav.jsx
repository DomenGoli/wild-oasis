// import styled from "styled-components";

import { NavLink } from "react-router";
import {
    HiOutlineCalendarDays,
    HiOutlineCog6Tooth,
    HiOutlineHome,
    HiOutlineHomeModern,
    HiOutlineUsers,
} from "react-icons/hi2";

// const NavList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
// `;

// const Link = styled.a`
//   &:link,
//   &:visited {
//     display: flex;
//     align-items: center;
//     gap: 1.2rem;

//     color: var(--color-grey-600);
//     font-size: 1.6rem;
//     font-weight: 500;
//     padding: 1.2rem 2.4rem;
//     transition: all 0.3s;
//   }

//   /* This works because react-router places the active class on the active NavLink */
//   &:hover,
//   &:active,
//   &.active:link,
//   &.active:visited {
//     color: var(--color-grey-800);
//     background-color: var(--color-grey-50);
//     border-radius: var(--border-radius-sm);
//   }

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     color: var(--color-grey-400);
//     transition: all 0.3s;
//   }

//   &:hover svg,
//   &:active svg,
//   &.active:link svg,
//   &.active:visited svg {
//     color: var(--color-brand-600);
//   }
// `;

const navLinkStyle =
    "flex text-[var(--color-grey-600)] text-center text-[1.6rem] font-medium px-15 py-10 transition-all hover:text-[var(--color-grey-800)] hover:bg-[var(--color-grey-50)] hover:rounded-[var(-border-radius-sm)] active:text-[var(--color-grey-800)] active:visited:bg-[var(--color-grey-100)] active:rounded-[var(--border-radius-sm)]";

function MainNav() {
    return (
        <nav className="flex justify-center">
            <ul className="flex flex-col gap-3 justify-center">
                <li>
                    <NavLink className={navLinkStyle} to="/dashboard">
                        <HiOutlineHome className="w-[2.4rem] h-[2.4rem] text-[var(--color-grey-400)]" />
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navLinkStyle} to="/bookings">
                        <HiOutlineHomeModern className="w-[2.4rem] h-[2.4rem] text-[var(--color-grey-400)]" />
                        <span>Bookings</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navLinkStyle} to="/cabins">
                        <HiOutlineCalendarDays className="w-[2.4rem] h-[2.4rem] text-[var(--color-grey-400)]" />
                        <span>Cabins</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navLinkStyle} to="/users">
                        <HiOutlineUsers className="w-[2.4rem] h-[2.4rem] text-[var(--color-grey-400)]" />
                        <span>Users</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navLinkStyle} to="/settings">
                        <HiOutlineCog6Tooth className="w-[2.4rem] h-[2.4rem] text-[var(--color-grey-400)]" />
                        <span>Settings</span>
                    </NavLink>
                </li>
                
            </ul>
        </nav>
    );
}

export default MainNav;
