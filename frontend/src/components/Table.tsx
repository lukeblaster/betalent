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
  // Filter the array data
  const filteredData = employesData.filter((employee) => {
    const lowerFilter = searchParam.toLowerCase();
    const date = new Date(employee.admission_date).toLocaleDateString();
    return (
      employee.name.toLowerCase().includes(lowerFilter) ||
      employee.job.toLowerCase().includes(lowerFilter) ||
      date.includes(lowerFilter) ||
      employee.phone.toLowerCase().includes(lowerFilter)
    );
  });

  return (
    <Table
      id="employess"
      className="table-auto border-collapse text-center h-full w-full bg-white text-black not-md:rounded-[8px] [&_tr]:border-b-gray-10"
    >
      <TableHeader className="h2 bg-blue-primary rounded-t-[8px] *:hover:bg-blue-primary">
        <TableRow className="*:text-white *:px-regular-16 *:py-litle-8">
          <TableHead className="w-[40px] h-[80%] text-left rounded-tl-[8px]">
            FOTO
          </TableHead>
          <TableHead className="text-left w-full md:w-auto">NOME</TableHead>
          <TableHead className="md:hidden w-[40px] h-[80%] rounded-tr-[8px] text-left">
            <div className="flex justify-end text-center text-3xl">
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
        {filteredData.length > 0 ? (
          filteredData.map((employee) => {
            // Format phone
            const phoneNumber = formatPhone(employee.phone);
            // Format admission_date
            const date = new Date(employee.admission_date).toLocaleDateString();

            return (
              <Disclosure key={employee.id}>
                <DisclosureButton
                  className="w-full not-md:data-[open]:border-none *:px-regular-16 *:py-litle-8 group border-b border-b-gray-20 transition duration-150 ease-in-out last:border-none"
                  as="tr"
                >
                  <TableCell className="w-30">
                    <img
                      src={employee.image}
                      className="w-[34px] h-[34px] rounded-full"
                    />
                  </TableCell>
                  <TableCell className="text-left min-w-42">
                    {employee.name}
                  </TableCell>
                  <TableCell className="md:hidden items-center">
                    <div className="flex justify-end">
                      <ChevronDown className="flex items-end w-[32px] h-[32px] group-data-[open]:rotate-180 text-blue-primary text-right stroke-[1px] transition duration-150" />
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell min-w-46 text-left">
                    {employee.job}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-left min-w-30">
                    {date}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-left">
                    {phoneNumber}
                  </TableCell>
                </DisclosureButton>
                <DisclosurePanel
                  transition
                  className="md:hidden text-gray-500 group-data[open]:border-none border-b border-b-gray-10 origin-top transition duration-150 ease-in ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 last:border-none"
                  as="td"
                  colSpan={3}
                >
                  <div className="flex flex-col gap-3 my-regular-16 px-regular-16 py-litle-8 font-medium text-black ">
                    <div className="flex justify-between border-b border-dashed border-b-gray-20 leading-3.5 m-litle-4   text-center">
                      <span className="">Cargo</span>
                      <span className="">{employee.job}</span>
                    </div>
                    <div className="flex justify-between border-b border-dashed border-b-gray-20 leading-3.5 m-litle-4   text-center">
                      <span className="">Data de admissão</span>
                      <span className="">{date}</span>
                    </div>
                    <div className="flex justify-between border-b border-dashed border-b-gray-20 leading-3.5 m-litle-4   text-center">
                      <span className="">Telefone</span>
                      <span className="">{phoneNumber}</span>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            );
          })
        ) : (
          <TableCell colSpan={5}>Dados não encontrados</TableCell>
        )}
      </TableBody>
    </Table>
  );
}
