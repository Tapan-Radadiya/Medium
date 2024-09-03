import SimpleTable from "./Pages/SimpleTable"
import SortingTable from "./Pages/SortingTable"

const App: React.FC = () => {

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 uppercase text-center">Dynamic Table Example</h1>
      <SimpleTable />
      <SortingTable />
    </div>
  )
}

export default App