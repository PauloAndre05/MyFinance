import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar/Index";

export const Layout = () => {
    return(
        <div className="h-screen overflow-hidden flex">
            <div className="w-60">
                <Sidebar />
            </div>
            <div className="border flex-1">
                <div>Header</div>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}