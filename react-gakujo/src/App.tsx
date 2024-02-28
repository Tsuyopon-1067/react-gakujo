import { createContext, useState } from 'react';
import './App.css';
import TimeTable from './components/TimeTable';
import { UniCategory, UniClass, UniGrid, UniOnline, UniTable } from './type';

export const ContextApp = createContext<[UniTable, (u: UniTable) => void]>([new UniTable([]), (n) => { }]);

function App() {
  const m3 = new UniClass('name1', 'tchr', 'cc', 2, new UniOnline(0), new UniCategory(0), 3, "");
  const f2 = new UniClass('name2', 'tchr', 'cc', 2, new UniOnline(0), new UniCategory(0), 1, "");
  const f3 = new UniClass('name3', 'tchr', 'cc', 2, new UniOnline(0), new UniCategory(0), 3, "");
  const tableData = [
    [new UniGrid(), new UniGrid(), new UniGrid(m3), new UniGrid(), new UniGrid()],
    [new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid()],
    [new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid()],
    [new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid()],
    [new UniGrid(), new UniGrid(f2), new UniGrid(f3), new UniGrid(), new UniGrid()],
  ];

  const [table, setTable] = useState(new UniTable(tableData));

  return (
    <>
      <ContextApp.Provider value={[table, setTable]}>
        <TimeTable data={table} />
      </ContextApp.Provider>
    </>
  )
}

export default App
