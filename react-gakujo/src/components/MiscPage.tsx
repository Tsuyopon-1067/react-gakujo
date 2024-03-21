import { Button } from "@mui/material";
import {
    BusButton,
    ClassTimerButton,
    GradeCalculatorButton,
    MailButton,
    StudentNumberButton,
    WifiButton,
} from "./FixedBottomNavigation";
import {
    AcademicAffairsButton,
    GakujoButton,
    HamaXButton,
    HandBookButton,
    OfficialSiteButton,
    OpacButton,
} from "./Links";
import styles from "./MiscPage.module.css";
import { ColorSettingsProps } from "./WindowSwitcher";

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
        <div className={styles.sub_page_button_div}>
            <div className={styles.sub_page_button_icon_p}>{icon}</div>
            <div className={styles.sub_page_button_caption_area}>
                <p
                    className={styles.sub_page_button_caption}
                    style={{ color: colorSettings.fontColor }}
                >
                    {title}
                </p>
            </div>
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
            value={GradeCalculatorButton.value}
            colorSettings={colorSettings}
            title={GradeCalculatorButton.title}
            icon={GradeCalculatorButton.icon}
        />,
        <SubPageButton
            onClick={onClick}
            value={BusButton.value}
            colorSettings={colorSettings}
            title={BusButton.title}
            icon={BusButton.icon}
        />,
        <SubPageButton
            onClick={onClick}
            value={ClassTimerButton.value}
            colorSettings={colorSettings}
            title={ClassTimerButton.title}
            icon={ClassTimerButton.icon}
        />,
        <OfficialSiteButton colorSettings={colorSettings} />,
        <HamaXButton colorSettings={colorSettings} />,
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
        <SubPageButton
            onClick={onClick}
            value={GradeCalculatorButton.value}
            colorSettings={colorSettings}
            title={GradeCalculatorButton.title}
            icon={GradeCalculatorButton.icon}
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
