import Logo from "./Logo";
import MainNav from "./MainNav";
// import Uploader from "../data/Uploader"
function Sidebar() {
    return (
        <aside className="flex flex-col gap-[3.2rem] bg-[var(--color-grey-0)] border-r border-solid border-[var(--color-grey-100)] row-span-full py-[3.2rem] px-[2.4rem]">
            <Logo />
            <MainNav />
            {/* <Uploader /> */}
        </aside>
    );
}

export default Sidebar;

// const StyledSidebar = styled.aside`
//   background-color: var(--color-grey-0);
//   padding: 3.2rem 2.4rem;
//   border-right: 1px solid var(--color-grey-100);

//   grid-row: 1 / -1;
//   display: flex;
//   flex-direction: column;
//   gap: 3.2rem;
// `;
