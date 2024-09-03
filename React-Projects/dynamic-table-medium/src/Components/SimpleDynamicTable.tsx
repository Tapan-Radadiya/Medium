export interface ISimpleColumn {
    header: string,
    accessor: string
}

export interface ISimpleRow {
    [key: string]: any
}

interface SimpleDynamicTableProps {
    columns: ISimpleColumn[],
    data: ISimpleRow[],
    onEdit?: (rowIndex: number) => void,
    onDelete?: (rowIndex: number) => void
}

const SimpleDynamicTable: React.FC<SimpleDynamicTableProps> = ({ columns, data, onEdit, onDelete }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {columns.map((column) => (
                        <th key={column.accessor} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {column.header}
                        </th>
                    ))}
                    {(onEdit || onDelete) && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column) => (
                            <td key={column.accessor} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {row[column.accessor]}
                            </td>
                        ))}
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {onEdit && <button
                                onClick={() => onEdit(rowIndex)}
                                className="text-indigo-600 hover:text-indigo-900 mr-4"
                            >
                                Edit
                            </button>}
                            {onDelete && <button
                                onClick={() => onDelete(rowIndex)}
                                className="text-red-600 hover:text-red-900"
                            >
                                Delete
                            </button>}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default SimpleDynamicTable