import {
    Apps,
    CalendarMonth,
    GridOn,
    Link,
    Map,
    Settings,
    Wifi,
} from "@mui/icons-material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { LocalStorageData } from "../types";
import CampusMap from "./CampusMap";
import EventSchedule from "./EventSchedule";
import GuidePage from "./GuidePage";
import TimeTable from "./TimeTable";
import TitleAppBar from "./TitleAppBar";
import { ColorSettingsProps } from "./WindowSwitcher";
import { UniTable } from "./timeTableTypes";
import MiscPage from "./MiscPage";
import Setting from "./Setting";

export const ContextApp = React.createContext<
    [UniTable, (u: UniTable) => void]
>([new UniTable([]), () => {}]);
export const MainLocalStorageData = new LocalStorageData();

interface FixedBottomNavigationProps {
    colorSettingsProps: ColorSettingsProps;
}

interface BottomNavigationElement {
    name: string;
    icon: React.ReactNode;
    content: React.ReactNode;
}

const createBottomNavigationElement = (
    name: string,
    icon: React.ReactNode,
    content: React.ReactNode
): BottomNavigationElement => {
    return { name, icon, content };
};

export default function FixedBottomNavigation({
    colorSettingsProps,
}: FixedBottomNavigationProps) {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef<HTMLDivElement>(null);

    const uniTableData = MainLocalStorageData.getUniTable();
    const [table, setTable] = React.useState(uniTableData);
    const array = [...Array(5)].map((_, i) => i);
    const bottomNavigationElement: BottomNavigationElement[] = [
        createBottomNavigationElement(
            "時間割",
            <GridOn />,
            <TimeTable data={table} />
        ),
        createBottomNavigationElement(
            "行事予定",
            <CalendarMonth />,
            <EventSchedule />
        ),
        createBottomNavigationElement("構内地図", <Map />, <CampusMap />),
        createBottomNavigationElement(
            "その他",
            <Apps />,
            <MiscPage colorSettings={colorSettingsProps} />
        ),
        createBottomNavigationElement(
            "設定",
            <Settings />,
            <Setting colorSettingsProps={colorSettingsProps} />
        ),
    ];

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <TitleAppBar
                title={bottomNavigationElement[value].name}
                primaryColor={colorSettingsProps.primaryColor}
                fontColor={colorSettingsProps.fontColor}
            />
            <ContextApp.Provider value={[table, setTable]}>
                {bottomNavigationElement[value].content}
            </ContextApp.Provider>
            <Paper
                sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                elevation={3}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(_, newValue) => {
                        setValue(newValue);
                    }}
                >
                    {array.map((i) => (
                        <BottomNavigationAction
                            label={bottomNavigationElement[i].name}
                            icon={bottomNavigationElement[i].icon}
                        />
                    ))}
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
