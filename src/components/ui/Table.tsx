export type Column<T> = {
  label: string;
  accessor: keyof T;
};

export type TableProps<T> = {
  columns: readonly Column<T>[];
  data: readonly T[];
};

export function Table<T extends Record<string, unknown>>(
  { columns, data }: TableProps<T>
) {
  return (
    <table className="erp-table">
      <thead>
        <tr>
          {columns.map(col => (
            <th key={String(col.accessor)}>{col.label}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map(col => (
              <td key={String(col.accessor)}>
                {String(row[col.accessor])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
