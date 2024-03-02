import { MenuBook } from "@mui/icons-material";
import { Button } from "@mui/material";
import styles from "./Links.module.css";
import gakujoLogo from "/gakujo.svg";


function Links() {
    return (
        <div className={styles.main_div}>
            <Button variant="contained" fullWidth sx={{ backgroundColor: "#04CBB0" }} href="https://gakujo.shizuoka.ac.jp/portal/">
                <div className={styles.button_div}>
                    <img src={gakujoLogo} width={200} style={{ marginTop: 20 }} />
                    <p className={styles.caption}>
                        学務情報<br />システム
                    </p>
                </div>
            </Button>
            <br />
            <br />
            <Button variant="contained" fullWidth sx={{ backgroundColor: "#04CBB0" }} href="https://opac.lib.shizuoka.ac.jp/simple/">
                <div className={styles.button_div}>
                    <MenuBook sx={{ fontSize: 200 }} color="action" />
                    <p className={styles.caption}>
                        OPAC
                    </p>
                </div>
            </Button>
        </div>
    );
}

export default Links;