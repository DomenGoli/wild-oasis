import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
    return (
        <div className="grid h-screen grid-cols-[26rem_1fr] grid-rows-[auto_1fr]">
            <Sidebar />
            <Header />
            <main className="bg-[var(--color-grey-50)] p-[4rem_4.8rem_6.4rem]">
                <div className="flex flex-col gap-[3.2rem] max-w-[120rem] m-0">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default AppLayout;

// const Main = styled.main`
//   background-color: var(--color-grey-50);p-[4rem_4.8rem_6.4rem]
//   padding: 4rem 4.8rem 6.4rem;
// `;
