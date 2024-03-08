import { Button } from "@mui/material";
import styles from "./MiscPage.module.css";
import {
    AcademicAffairsButton,
    GakujoButton,
    HandBookButton,
    OpacButton,
} from "./Links";
import { ColorSettingsProps } from "./WindowSwitcher";
import { MenuBook } from "@mui/icons-material";
import {
    BusButton,
    MailButton,
    StudentNumberButton,
    WifiButton,
} from "./FixedBottomNavigation";

interface SubPageButtonProps {
    colorSettings: ColorSettingsProps;
    onClick: (value: number) => void;
    value: number;
    title: string | JSX.Element;
    icon: JSX.Element;
}
const SubPageButton = ({
    colorSettings,
    onClick,
    value,
    title,
    icon,
}: SubPageButtonProps) => (
    <Button
        variant="contained"
        fullWidth
        sx={{
            marginBottom: 2,
            color: colorSettings.fontColor,
            background: colorSettings.primaryColor,
            ":hover": { background: colorSettings.primaryColorHover },
            height: "100%",
        }}
        onClick={() => {
            onClick(value);
        }}
    >
        <div>
            <p className={styles.button_icon_p}>{icon}</p>
            <p
                className={styles.button_caption}
                style={{ color: colorSettings.fontColor }}
            >
                {title}
            </p>
        </div>
    </Button>
);
interface MiscPageProps {
    colorSettings: ColorSettingsProps;
    setIsSubPage: (isSubPage: boolean) => void;
    setValue: (value: number) => void;
}

function MiscPage({ colorSettings, setIsSubPage, setValue }: MiscPageProps) {
    const onClick = (value: number) => {
        setIsSubPage(true);
        setValue(value);
    };
    const buttons = [
        <GakujoButton colorSettings={colorSettings} />,
        <AcademicAffairsButton colorSettings={colorSettings} />,
        <OpacButton colorSettings={colorSettings} />,
        <HandBookButton colorSettings={colorSettings} />,
        <SubPageButton
            onClick={onClick}
            value={BusButton.value}
            colorSettings={colorSettings}
            title={BusButton.title}
            icon={BusButton.icon}
        />,
        <SubPageButton
            onClick={onClick}
            value={WifiButton.value}
            colorSettings={colorSettings}
            title={WifiButton.title}
            icon={WifiButton.icon}
        />,
        <SubPageButton
            onClick={onClick}
            value={MailButton.value}
            colorSettings={colorSettings}
            title={MailButton.title}
            icon={MailButton.icon}
        />,
        <SubPageButton
            onClick={onClick}
            value={StudentNumberButton.value}
            colorSettings={colorSettings}
            title={StudentNumberButton.title}
            icon={StudentNumberButton.icon}
        />,
    ];
    return (
        <div className={styles.main_div}>
            {buttons.map((element, index) => {
                let col;
                if (index % 2 === 0) {
                    col = "1/2";
                } else {
                    col = "2/3";
                }
                const row = index / 2 + 1;
                return (
                    <div
                        style={{
                            gridColumn: col,
                            gridRow: row,
                        }}
                        className={styles.button_area}
                    >
                        {element}
                    </div>
                );
            })}
        </div>
    );
}

export default MiscPage;
