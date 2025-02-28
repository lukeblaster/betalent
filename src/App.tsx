import { Search } from "lucide-react";
import "./App.css";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import { EmployeeTable } from "./components/Table";
import { useEffect, useState } from "react";

function App() {
  const [searchParam, setSearchParam] = useState("");
  const [employesData, setEmployesData] = useState([]);

  async function getEmployesData() {
    const url = "http://localhost:3000/employees";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();

      return json;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
    const getData = async () => {
      const response = await getEmployesData();

      if (!response) {
        return;
      }
      setEmployesData(response);
    };

    getData();

    return () => {};
  }, []);

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
              className="w-full py-3.5 text-black border-0 bg-transparent outline-0 "
            />
            <Search className="text-gray-10" />
          </div>
        </div>
        <div className="mx-regular-16 md:mx-regular-28">
          <EmployeeTable
            employesData={employesData}
            searchParam={searchParam}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
