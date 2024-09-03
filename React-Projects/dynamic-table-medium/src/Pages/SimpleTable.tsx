import { useState } from "react";
import SimpleDynamicTable, { ISimpleColumn, ISimpleRow } from "../Components/SimpleDynamicTable"

const SimpleTable = () => {
    const columns: ISimpleColumn[] = [
        { header: "Name", accessor: "name" },
        { header: "Email", accessor: "email" },
        { header: "Age", accessor: "age" },
        { header: "Gender", accessor: "gender" },
    ]

    const [data, setData] = useState<ISimpleRow[]>([
        { name: "Shrey", email: "shrey@gmail.com", age: 21, gender: "Male" },
        { name: "Vikram", email: "vicks@gmail.com", age: 22, gender: "Male" },
        { name: "Harsil", email: "harsil@gmail.com", age: 22, gender: "Male" },
        { name: "Raju", email: "raj@gmail.com", age: 24, gender: "Male" },
        { name: "Laxita", email: "lax@gmail.com", age: 25, gender: "Female" },
    ]);

    const handleEdit = (rowIndex: number) => {
        const item = data[rowIndex];
        const newName = prompt("Edit Name", item.name);
        if (newName) {
            const newData = [...data];
            newData[rowIndex].name = newName;
            setData(newData);
        }
    };

    const handleDelete = (rowIndex: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (confirmDelete) {
            const newData = data.filter((_, index) => index !== rowIndex);
            setData(newData);
        }
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Simple Dynamic Table</h1>
            <SimpleDynamicTable columns={columns} data={data} onEdit={handleEdit} onDelete={handleDelete} />
        </>
    )
}
export default SimpleTable