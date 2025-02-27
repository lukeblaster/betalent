import { ChevronDown, CircleSmall } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
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

export function EmployeeTable() {
  return (
    <Table
      id="employess"
      className="bg-white h-full w-full text-black table-auto border-collapse rounded-[8px] text-center [&_tr]:border-b-gray-10"
    >
      <TableHeader className="h2 bg-blue-primary text-white rounded-t-[8px] hover:opacity-100">
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
        <TableRow className="hidden md:table-row w-full border-b border-b-gray-20 last:border-none group data-[open]:border-none transition duration-150 ease-in-out *:px-regular-16 *:py-litle-8">
          <TableCell className="p-0">
            <img
              src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
              className="w-[34px] h-[34px] rounded-full"
            />
          </TableCell>
          <TableCell className="text-left">Giovana L. Arruda</TableCell>
          <TableCell className="text-left">Front-end</TableCell>
          <TableCell className="text-left">00/00/0000</TableCell>
          <TableCell className="text-left">+55 (55) 55555-5555</TableCell>
        </TableRow>
        <Disclosure>
          <DisclosureButton
            className="w-full border-b border-b-gray-20 last:border-none group data-[open]:border-none transition duration-150 ease-in-out *:px-regular-16 *:py-litle-8"
            as="tr"
          >
            <TableCell className="p-0">
              <img
                src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
                className="w-[34px] h-[34px] rounded-full"
              />
            </TableCell>
            <TableCell className="text-left">Giovana L. Arruda</TableCell>
            <TableCell className="md:hidden items-center">
              <div className="flex justify-end">
                <ChevronDown className="text-blue-primary text-right flex items-end w-[32px] h-[32px] stroke-[1.5px] transition duration-150 group-data-[open]:rotate-180" />
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell text-left">
              Front-end
            </TableCell>
            <TableCell className="hidden md:table-cell text-left">
              00/00/0000
            </TableCell>
            <TableCell className="hidden md:table-cell text-left">
              +55 (55) 55555-5555
            </TableCell>
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="md:hidden text-gray-500 border-b border-b-gray-10 origin-top transition duration-150 ease-in ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
            as="td"
            colSpan={3}
          >
            <div className="flex flex-col gap-3 my-regular-16 px-regular-16 py-litle-8 text-black font-medium">
              <div className="flex m-litle-4 justify-between text-center border-b border-dashed border-b-gray-20 leading-3.5">
                <span className="">Cargo</span>
                <span className="">Front-end</span>
              </div>
              <div className="flex m-litle-4 justify-between text-center border-b border-dashed border-b-gray-20 leading-3.5">
                <span className="">Data de admissão</span>
                <span className="">00/00/0000</span>
              </div>
              <div className="flex m-litle-4 justify-between text-center border-b border-dashed border-b-gray-20 leading-3.5">
                <span className="">Telefone</span>
                <span className="">+55 (55) 55555-5555</span>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureButton
            className="md:hidden w-full border-b border-b-gray-20 last:border-none group data-[open]:border-none transition duration-150 ease-in-out *:px-regular-16 *:py-litle-8"
            as="tr"
          >
            <TableCell className="p-0">
              <img
                src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
                className="w-[34px] h-[34px] rounded-full"
              />
            </TableCell>
            <TableCell className="text-left">Giovana L. Arruda</TableCell>
            <TableCell className="items-center">
              <div className="flex justify-end">
                <ChevronDown className="text-blue-primary text-right flex items-end w-[32px] h-[32px] stroke-[1.5px] transition duration-150 group-data-[open]:rotate-180" />
              </div>
            </TableCell>
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="md:hidden text-gray-500 border-b border-b-gray-10 origin-top transition duration-150 ease-in ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
            as="td"
            colSpan={3}
          >
            <div className="flex flex-col gap-3 my-regular-16 px-regular-16 py-litle-8 text-black font-medium">
              <div className="flex m-litle-4 justify-between text-center border-b border-dashed border-b-gray-20 leading-3.5">
                <span className="">Cargo</span>
                <span className="">Front-end</span>
              </div>
              <div className="flex m-litle-4 justify-between text-center border-b border-dashed border-b-gray-20 leading-3.5">
                <span className="">Data de admissão</span>
                <span className="">00/00/0000</span>
              </div>
              <div className="flex m-litle-4 justify-between text-center border-b border-dashed border-b-gray-20 leading-3.5">
                <span className="">Telefone</span>
                <span className="">+55 (55) 55555-5555</span>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </TableBody>
    </Table>
  );
}
