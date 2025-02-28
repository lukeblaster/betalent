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
import { formatPhone } from "@/scripts/format-phone";

type Employee = {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};

export function EmployeeTable({
  employesData,
  searchParam,
}: {
  employesData: Employee[];
  searchParam: string;
}) {
  const filteredData = employesData.filter((employee) => {
    const lowerFilter = searchParam.toLowerCase();
    return (
      employee.name.toLowerCase().includes(lowerFilter) ||
      employee.job.toLowerCase().includes(lowerFilter) ||
      employee.admission_date.toLowerCase().includes(lowerFilter) ||
      employee.phone.toLowerCase().includes(lowerFilter)
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
        {filteredData?.map((employee) => {
          const phoneNumber = formatPhone(employee.phone);
          const date = new Date(employee.admission_date).toLocaleDateString();
          return (
            <Disclosure key={employee.id}>
              <DisclosureButton
                className="w-full border-b border-b-gray-20 group not-md:data-[open]:border-none transition duration-150 ease-in-out *:px-regular-16 *:py-litle-8 last:border-none"
                as="tr"
              >
                <TableCell className="p-0">
                  <img
                    src={employee.image}
                    className="w-[34px] h-[34px] rounded-full"
                  />
                </TableCell>
                <TableCell className="text-left">{employee.name}</TableCell>
                <TableCell className="md:hidden items-center">
                  <div className="flex justify-end">
                    <ChevronDown className="text-blue-primary text-right flex items-end w-[32px] h-[32px] stroke-[1.5px] transition duration-150 group-data-[open]:rotate-180" />
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell text-left">
                  {employee.job}
                </TableCell>
                <TableCell className="hidden md:table-cell text-left">
                  {date}
                </TableCell>
                <TableCell className="hidden md:table-cell text-left">
                  {phoneNumber}
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
                    <span className="">{employee.job}</span>
                  </div>
                  <div className="flex m-litle-4 justify-between text-center border-b border-dashed border-b-gray-20 leading-3.5">
                    <span className="">Data de admissão</span>
                    <span className="">{date}</span>
                  </div>
                  <div className="flex m-litle-4 justify-between text-center border-b border-dashed border-b-gray-20 leading-3.5">
                    <span className="">Telefone</span>
                    <span className="">{phoneNumber}</span>
                  </div>
                </div>
              </DisclosurePanel>
            </Disclosure>
          );
        })}
      </TableBody>
    </Table>
  );
}
