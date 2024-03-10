import { Divider } from "@mui/material";
import styles from "./WifiPage.module.css";

function WifiPage() {
    return (
        <div className={styles.main_div}>
            <h2 className={styles.h2}>WRL-SUCCES-S3</h2>
            <div className={styles.wifi_div}>
                <p
                    className={styles.wifi_p}
                    style={{ gridRow: 1, gridColumn: 1 }}
                >
                    ユーザ名
                </p>
                <p
                    className={styles.wifi_p}
                    style={{ gridRow: 1, gridColumn: 2 }}
                >
                    静大ID（学情と同じ）
                </p>
                <p
                    className={styles.wifi_p}
                    style={{ gridRow: 2, gridColumn: 1 }}
                >
                    パスワード
                </p>
                <p
                    className={styles.wifi_p}
                    style={{ gridRow: 2, gridColumn: 2 }}
                >
                    静大IDのパスワード（学情と同じ）
                </p>
            </div>
            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
            <h2 className={styles.h2}>eduroam</h2>
            <div className={styles.wifi_div}>
                <p
                    className={styles.wifi_p}
                    style={{ gridRow: 1, gridColumn: 1 }}
                >
                    ユーザ名
                </p>
                <p
                    className={styles.wifi_p}
                    style={{ gridRow: 1, gridColumn: 2 }}
                >
                    静大ID（学情と同じ）
                </p>
                <p
                    className={styles.wifi_p}
                    style={{ gridRow: 2, gridColumn: 1 }}
                >
                    パスワード
                </p>
                <p
                    className={styles.wifi_p}
                    style={{ gridRow: 2, gridColumn: 2 }}
                >
                    静大IDのパスワード（学情と同じ）
                </p>
            </div>
        </div>
    );
}

export default WifiPage;
