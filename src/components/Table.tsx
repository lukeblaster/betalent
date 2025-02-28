import { ChevronDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { useState } from "react";

const data = [
  {
    photoUrl:
      "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
    name: "Pablo Marçal",
    function: "Front-end",
    date: "01/03/2022",
    phone: "+5585912341234",
  },
  {
    photoUrl:
      "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
    name: "Lula Inácio",
    function: "Front-end",
    date: "20/09/2015",
    phone: "+5585912341234",
  },
  {
    photoUrl:
      "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
    name: "Janja",
    function: "Back-end",
    date: "01/03/2011",
    phone: "+5585912341102",
  },
];

export function EmployeeTable({ searchParam }) {
  const dadosFiltrados = data.filter((item) => {
    const filtroLower = searchParam.toLowerCase();
    return (
      item.name.toLowerCase().includes(filtroLower) || // Nome contém o texto digitado
      item.function.toLowerCase().includes(filtroLower) || // Idade contém o número digitado
      item.date.toLowerCase().includes(filtroLower) || // Idade contém o número digitado
      item.phone.toLowerCase().includes(filtroLower) // Idade contém o número digitado
    );
  });

  return (
    <Table
      id="employess"
      className="bg-white h-full w-full text-black table-auto border-collapse rounded-[8px] text-center [&_tr]:border-b-gray-10"
    >
      <TableHeader className="h2 bg-blue-primary text-white rounded-t-[8px] hover:opacity-100 *:hover:bg-blue-primary">
        <TableRow className=" *:text-white *:px-regular-16 *:py-litle-8">
          <TableHead className="w-[40px] h-[80%] rounded-tl-[8px] text-left">
            FOTO
          </TableHead>
          <TableHead className="text-left w-full md:w-auto">NOME</TableHead>
          <TableHead className="md:hidden w-[40px] h-[80%] rounded-tr-[8px] text-left">
            <div className="lg:hidden flex justify-end text-center text-3xl">
              <div className="w-8">•</div>
            </div>
          </TableHead>
          <TableHead className="hidden md:table-cell">CARGO</TableHead>
          <TableHead className="hidden md:table-cell min-w-[80px]">
            DATA DE ADMISSÃO
          </TableHead>
          <TableHead className="hidden md:table-cell rounded-tr-[8px]">
            TELEFONE
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="h3">
        {dadosFiltrados?.map((employe) => (
          <Disclosure>
            <DisclosureButton
              className="w-full border-b border-b-gray-20 group not-md:data-[open]:border-none transition duration-150 ease-in-out *:px-regular-16 *:py-litle-8 last:border-none"
              as="tr"
            >
              <TableCell className="p-0">
                <img
                  src={employe.photoUrl}
                  className="w-[34px] h-[34px] rounded-full"
                />
              </TableCell>
              <TableCell className="text-left">{employe.name}</TableCell>
              <TableCell className="md:hidden items-center">
                <div className="flex justify-end">
                  <ChevronDown className="text-blue-primary text-right flex items-end w-[32px] h-[32px] stroke-[1.5px] transition duration-150 group-data-[open]:rotate-180" />
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell text-left">
                {employe.function}
              </TableCell>
              <TableCell className="hidden md:table-cell text-left">
                {employe.date}
              </TableCell>
              <TableCell className="hidden md:table-cell text-left">
                {employe.phone.toLocaleLowerCase()}
              </TableCell>
            </DisclosureButton>
            <DisclosurePanel
              transition
              className="md:hidden text-gray-500 border-b last:border-none border-b-gray-10 group-data[open]:border-none origin-top transition duration-150 ease-in ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
              as="td"
              colSpan={3}
            >
              <div className="flex flex-col gap-3 my-regular-16 px-regular-16 py-litle-8 text-black font-medium">
                <div className="flex m-litle-4 justify-between text-center border-b border-dashed border-b-gray-20 leading-3.5">
                  <span className="">Cargo</span>
                  <span className="">{employe.function}</span>
                </div>
                <div className="flex m-litle-4 justify-between text-center border-b border-dashed border-b-gray-20 leading-3.5">
                  <span className="">Data de admissão</span>
                  <span className="">{employe.date}</span>
                </div>
                <div className="flex m-litle-4 justify-between text-center border-b border-dashed border-b-gray-20 leading-3.5">
                  <span className="">Telefone</span>
                  <span className="">{employe.phone}</span>
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>
        ))}
      </TableBody>
    </Table>
  );
}
