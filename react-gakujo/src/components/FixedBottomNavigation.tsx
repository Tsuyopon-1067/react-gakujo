import {
    Apps,
    CalendarMonth,
    DirectionsBus,
    GridOn,
    Mail,
    Map,
    PermIdentity,
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
import TimeTable from "./TimeTable";
import TitleAppBar from "./TitleAppBar";
import { ColorSettingsProps } from "./WindowSwitcher";
import { UniTable } from "./timeTableTypes";
import MiscPage from "./MiscPage";
import Setting from "./Setting";
import WifiPage from "./subPage/WifiPage";
import MailPage from "./subPage/MailPage";
import StudentNumberPage from "./subPage/StudentNumberPage";

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
    const [isSubPage, setIsSubPage] = React.useState(false);

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
            <MiscPage
                colorSettings={colorSettingsProps}
                setIsSubPage={setIsSubPage}
                setValue={setValue}
            />
        ),
        createBottomNavigationElement(
            "設定",
            <Settings />,
            <Setting colorSettingsProps={colorSettingsProps} />
        ),
        createBottomNavigationElement("六間坂上時刻表", <></>, <></>),
        createBottomNavigationElement("Wifi", <></>, <WifiPage />),
        createBottomNavigationElement("メール", <></>, <MailPage />),
        createBottomNavigationElement("学籍番号", <></>, <StudentNumberPage />),
    ];

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <TitleAppBar
                title={bottomNavigationElement[value].name}
                primaryColor={colorSettingsProps.primaryColor}
                fontColor={colorSettingsProps.fontColor}
                handleBackButton={() => {
                    setValue(3);
                    setIsSubPage(false);
                }}
                isSubPage={isSubPage}
            />
            <ContextApp.Provider value={[table, setTable]}>
                {bottomNavigationElement[value].content}
            </ContextApp.Provider>
            <Paper
                sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                elevation={2}
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

interface SubPageButtonElement {
    title: string | JSX.Element;
    icon: JSX.Element;
    value: number;
}

const fontSize = 120;
const BusButton = {
    title: (
        <>
            <span>六間坂上時刻表</span>
            <span>（浜松駅方面）</span>
        </>
    ),
    icon: (
        <DirectionsBus
            style={{
                fill: "#00000088",
                width: fontSize,
                height: fontSize,
            }}
        />
    ),
    value: 5,
} as SubPageButtonElement;

const WifiButton = {
    title: "Wi-Fi",
    icon: (
        <Wifi
            style={{
                fill: "#00000088",
                width: fontSize,
                height: fontSize,
            }}
        />
    ),
    value: 6,
} as SubPageButtonElement;

const MailButton = {
    title: "メール",
    icon: (
        <Mail
            style={{
                fill: "#00000088",
                width: fontSize,
                height: fontSize,
            }}
        />
    ),
    value: 7,
} as SubPageButtonElement;

const StudentNumberButton = {
    title: "学籍番号",
    icon: (
        <PermIdentity
            style={{
                fill: "#00000088",
                width: fontSize,
                height: fontSize,
            }}
        />
    ),
    value: 8,
} as SubPageButtonElement;

export { BusButton, WifiButton, MailButton, StudentNumberButton };
