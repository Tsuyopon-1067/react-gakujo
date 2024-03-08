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
