import { Search } from "lucide-react";
import "./App.css";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import { EmployeeTable } from "./components/Table";
import { useState } from "react";

function App() {
  const [searchParam, setSearchParam] = useState("");

  return (
    <div className="flex flex-col h-screen text-black">
      <div className="flex flex-col text-black bg-gray-00 h-full">
        <Header>
          <Logo />
        </Header>
        <div className="flex flex-col md:flex-row justify-between items-baseline p-regular-20 md:p-regular-28 gap-3">
          <h1 className="h1 text-black">Funcionários</h1>
          <div className="w-full md:w-96 flex justify-between px-regular-16 bg-white border border-gray-10 rounded-[8px] text-black items-center md:h-12">
            <input
              id="search-input"
              placeholder="Pesquisar"
              type="text"
              onChange={(e) => setSearchParam(e.target.value)}
              className="py-3.5 text-black border-0 bg-transparent outline-0 "
            />
            <Search className="text-gray-10" />
          </div>
        </div>
        <div className="mx-regular-16 md:mx-regular-28">
          <EmployeeTable searchParam={searchParam} />
        </div>
      </div>
    </div>
  );
}

export default App;
