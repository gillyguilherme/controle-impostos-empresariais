import { Table } from "../../../components/ui/Table";



type TaxRow = {
  name: string;
  country: string;
  taxValue: string;
};

const columns = [
  { label: "Empresa", accessor: "name" },
  { label: "País", accessor: "country" },
  { label: "Imposto (R$)", accessor: "taxValue" },
]

const data: TaxRow[] = [
  {
    name: "Global Tech",
    country: "Brasil",
    taxValue: "480.000",
  },
  {
    name: "Europa Consultoria",
    country: "EUA",
    taxValue: "320.000",
  },
];

export function DataTableSection() {
  return <Table<TaxRow> columns={columns} data={data} />;
}
