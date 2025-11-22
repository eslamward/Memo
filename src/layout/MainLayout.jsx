import { Outlet } from "react-router";
import Header from "../components/Header";
import Aside from "../components/Aside";

function MainLayout() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <Header />
      <div className="flex  h-[calc(100vh-80px)] mt-20">
        <div className="">
          <Aside />
        </div>
        <main className="flex-1 bg-background-light dark:bg-background-dark overflow-y-auto hide-scrollbar shadow-lg">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;

export function Sidebar() {
  return <p className="px-8 bg-red-300">test aside</p>;
}
