import { FaClosedCaptioning, FaFilter, FaHome } from "react-icons/fa";
import logo from "../assets/images/mainlogoo.png";
import { useState } from "react";
import { FaX } from "react-icons/fa6";

function Aside() {
  const [show, setShow] = useState("");
  return (
    <aside className="h-full hidden  md:flex ">
      <div
        className={`flex justify-center h-full ${
          show == "" ? "bg-background-light dark:bg-background-dark" : ""
        }`}
      >
        <div
          className="my-auto  pt-7 w-[80px]
          h-[calc(100%-100px)] rounded-lg bg-background-dark dark:bg-background-light"
        >
          <img src={logo} className="rounded-full" alt="logo" width={100} />
          <section className="mt-10 flex flex-col gap-10 justify-center items-center">
            <FaHome
              onClick={() => setShow("home")}
              width={100}
              className="text-2xl text-text-dark dark:text-text-light"
            />
            <FaFilter
              onClick={() => setShow("filter")}
              width={100}
              className="text-2xl text-text-dark dark:text-text-light"
            />
          </section>
        </div>
        {show === "home" ? (
          <HomeAside setShow={setShow} />
        ) : show === "filter" ? (
          <FilterAside setShow={setShow} />
        ) : null}
      </div>
    </aside>
  );
}

export default Aside;

function HomeAside({ setShow }) {
  return (
    <div className="flex-1 relative w-[220px] px-5 my-10 pt-10 border-r-[1px] border-text-dark ">
      <AsideSection sectionName="Categories">
        <li>Clothes</li>
        <li>Shoeses</li>
        <li>Bags</li>
      </AsideSection>
      <AsideSection sectionName="Trend">
        <li>Color</li>
        <li>Style</li>
      </AsideSection>
      <FaX
        onClick={() => setShow("")}
        className="absolute right-[10px] top-[-20px] "
      />
    </div>
  );
}
function FilterAside({ setShow }) {
  return (
    <div
      className={`flex-1  transition-all duration-1000 relative  w-[220px] px-5 my-10 pt-10
       border-r-[1px] border-text-dark `}
    >
      <AsideSection sectionName="Filter">
        <li>Color</li>
        <li>Size</li>
        <li>Price</li>
      </AsideSection>
      <AsideSection sectionName="Trend">
        <li>Color</li>
        <li>Style</li>
      </AsideSection>
      <FaX
        onClick={() => setShow("")}
        className="absolute right-[10px] top-[-20px] "
      />
    </div>
  );
}

function AsideSection({ sectionName, children }) {
  return (
    <section className="border-b-[1px] py-4">
      <h1 className="font-semibold text-[18px] text-gray-400">{sectionName}</h1>
      <ul className="pl-3 pt-2 flex flex-col gap-1">{children}</ul>
    </section>
  );
}
