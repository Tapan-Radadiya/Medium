import { useMemo, useState } from "react"

export interface ISortingColumn {
    header: string,
    accessor: string
    sortable?: boolean
}

export interface ISortingRow {
    [key: string]: any
}

interface SortingDynamicTableProps {
    columns: ISortingColumn[],
    data: ISortingRow[],
    onEdit: (rowIndex: number) => void,
    onDelete: (rowIndex: number) => void
}

const SortingDynamicTable: React.FC<SortingDynamicTableProps> = ({ columns, data, onEdit, onDelete }) => {
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null)

    const sortedData = useMemo(() => {
        if (!sortConfig) return data
        const sortedArray = [...data].sort((a, b) => {
            const aValue = a[sortConfig.key]
            const bValue = b[sortConfig.key]
            if (aValue < bValue) {
                return sortConfig.direction === 'asc' ? -1 : 1
            }
            if (aValue > bValue) {
                return sortConfig.direction === 'asc' ? 1 : -1
            }
            return 0;
        })
        return sortedArray
    }, [data, sortConfig])

    const requestSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc'
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc'
        }
        setSortConfig({ key, direction })
    }

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column.accessor}
                            scope="col"
                            className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${column.sortable ? 'cursor-pointer' : ''}`}
                            onClick={() => column.sortable && requestSort(column.accessor)}
                        >
                            {column.header}
                            {sortConfig?.key === column.accessor ? (
                                sortConfig.direction === 'asc' ? '🔼' : '🔽'
                            ) : null}
                        </th>
                    ))}
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {sortedData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column) => (
                            <td key={column.accessor} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {row[column.accessor]}
                            </td>
                        ))}
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                                onClick={() => onEdit(rowIndex)}
                                className="text-indigo-600 hover:text-indigo-900 mr-4"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(rowIndex)}
                                className="text-red-600 hover:text-red-900"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default SortingDynamicTable