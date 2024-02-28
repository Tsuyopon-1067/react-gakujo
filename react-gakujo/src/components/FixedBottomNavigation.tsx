import ArchiveIcon from '@mui/icons-material/Archive';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestoreIcon from '@mui/icons-material/Restore';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { UniCategory, UniClass, UniGrid, UniOnline, UniTable } from '../type';
import GuidePage from './GuidePage';
import TimeTable from './TimeTable';

export const ContextApp = React.createContext<[UniTable, (u: UniTable) => void]>([new UniTable([]), (n) => { }]);
export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  const m3 = new UniClass('name1', 'tchr', 'cc', 2, new UniOnline(0), new UniCategory(0), 3, "");
  const f2 = new UniClass('name2', 'tchr', 'cc', 2, new UniOnline(0), new UniCategory(0), 1, "");
  const f3 = new UniClass('name3', 'tchr', 'cc', 2, new UniOnline(0), new UniCategory(0), 3, "");
  const w1 = new UniClass('seri1', 'tchr', 'cc', 2, new UniOnline(0), new UniCategory(0), 1, "");
  const w2 = new UniClass('seri2', 'tchr', 'cc', 2, new UniOnline(0), new UniCategory(0), 1, "");
  const tableData = [
    [new UniGrid(), new UniGrid(), new UniGrid([m3]), new UniGrid(), new UniGrid()],
    [new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid()],
    [new UniGrid([w1, w2]), new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid()],
    [new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid()],
    [new UniGrid(), new UniGrid([f2]), new UniGrid([f3]), new UniGrid(), new UniGrid()],
    [new UniGrid([w1, w2])],
  ];

  const [table, setTable] = React.useState(new UniTable(tableData));
  const contents = [
    <TimeTable data={table} />,
    <GuidePage />,
  ];


  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <ContextApp.Provider value={[table, setTable]}>
        {contents[value]}
      </ContextApp.Provider>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
