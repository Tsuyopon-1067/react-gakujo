import { MenuBook } from "@mui/icons-material";
import { Button } from "@mui/material";
import { CSSProperties } from "react";
import { MainLocalStorageData } from "./FixedBottomNavigation";
import styles from "./Links.module.css";

interface PropsType {
    style?: CSSProperties;
    color?: string;
}

const GakujoIcon = (props: PropsType) => {
    return (
        <svg width="37.078" height="30.295" viewBox="0 0 9.81 8.016" xmlns="http://www.w3.org/2000/svg" style={props.style ? props.style : undefined}>
            <path d="M.138 6.39h-5.276v5.276H.138zm-2.246 6.851-3.954 3.954.48.48 3.954-3.954zm-.76-.348h-3.498V9.49l-2.914 2.914v3.403h3.497z" transform="scale(1.27979 .60179) rotate(-45 -5.779 -1.142)" />
        </svg>
    )
}


function Links() {
    const primaryColor = MainLocalStorageData.getColor().getPrimaryColor();
    const primaryColorHover = MainLocalStorageData.getColor().getPrimaryColorHover();
    const fontColor = MainLocalStorageData.getColor().getFontColor();
    return (
        <div className={styles.main_div}>
            <Button variant="contained" fullWidth sx={{ backgroundColor: primaryColor, ":hover": { background: primaryColorHover } }} href="https://gakujo.shizuoka.ac.jp/portal/">
                <div className={styles.button_div}>
                    <GakujoIcon style={{ fill: "#00000088", width: 200, height: 200, marginTop: 20, marginBottom: -20 }} />
                    <p className={styles.caption}>
                        学務情報<br />システム
                    </p>
                </div>
            </Button>
            <br />
            <br />
            <Button variant="contained" fullWidth sx={{ backgroundColor: primaryColor, ":hover": { background: primaryColorHover } }} href="https://opac.lib.shizuoka.ac.jp/simple/">
                <div className={styles.button_div}>
                    <MenuBook sx={{ fontSize: 200 }} color="action" />
                    <p className={styles.caption} style={{ color: fontColor }}>
                        OPAC
                    </p>
                </div>
            </Button>
        </div>
    );
}

export default Links;