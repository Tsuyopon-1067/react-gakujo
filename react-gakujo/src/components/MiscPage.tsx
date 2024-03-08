import { Button, Color } from "@mui/material";
import styles from "./MiscPage.module.css";
import {
    AcademicAffairsButton,
    GakujoButton,
    HandBookButton,
    OpacButton,
} from "./Links";
import { ColorSettings } from "../types";
import { ColorSettingsProps } from "./WindowSwitcher";

interface MiscPageProps {
    colorSettings: ColorSettingsProps;
}

function MiscPage({ colorSettings }: MiscPageProps) {
    const buttons = [
        <GakujoButton colorSettings={colorSettings} />,
        <AcademicAffairsButton colorSettings={colorSettings} />,
        <OpacButton colorSettings={colorSettings} />,
        <HandBookButton colorSettings={colorSettings} />,
    ];
    return (
        <div className={styles.main_div}>
            {buttons.map((element, index) => (
                <div
                    style={{
                        gridColumn: (index % 2) + 1,
                        gridRow: index / 2 + 1,
                    }}
                >
                    {element}
                </div>
            ))}
        </div>
    );
}

export default MiscPage;
