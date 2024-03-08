import { Button } from "@mui/material";
import styles from "./MiscPage.module.css";

function MiscPage() {
    const buttons = [<p>hogehoge1</p>, <p>hogehoge2</p>, <p>hogehoge3</p>];
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
