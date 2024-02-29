import { CalendarMonth, GridOn, Map, Settings, Wifi } from '@mui/icons-material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { LocalStorageData } from '../types';
import CampusMap from './CampusMap';
import EventSchedule from './EventSchedule';
import GuidePage from './GuidePage';
import Setting from './Setting';
import TimeTable from './TimeTable';
import { UniTable } from './timeTableTypes';

export const ContextApp = React.createContext<[UniTable, (u: UniTable) => void]>([new UniTable([]), (n) => { }]);
export const MainLocalStorageData = new LocalStorageData();

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  const uniTableData = MainLocalStorageData.getUniTable();
  const [table, setTable] = React.useState(uniTableData);
  const contents = [
    <TimeTable data={table} />,
    <EventSchedule />,
    <GuidePage />,
    <CampusMap />,
    <Setting />,
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
          <BottomNavigationAction label="時間割" icon={<GridOn />} />
          <BottomNavigationAction label="行事予定" icon={<CalendarMonth />} />
          <BottomNavigationAction label="WiFi等" icon={<Wifi />} />
          <BottomNavigationAction label="構内地図" icon={<Map />} />
          <BottomNavigationAction label="設定" icon={<Settings />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
