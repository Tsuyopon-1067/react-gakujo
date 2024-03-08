import { Mail } from "@mui/icons-material";
import { Divider } from "@mui/material";
import styles from "./MailPage.module.css";

function MailPage() {
    return (
        <div className={styles.main_div}>
            <h2 className={styles.h2}>メールアドレス</h2>
            <div className={styles.mail_div}>
                <p
                    className={styles.table_p}
                    style={{ gridRow: 1, gridColumn: 1 }}
                >
                    アドレス
                </p>
                <p
                    className={styles.table_p}
                    style={{ gridRow: 1, gridColumn: 2 }}
                >
                    姓.名.入学年度@shizuoka.ac.jp
                </p>
                <p
                    className={styles.table_p}
                    style={{ gridRow: 2, gridColumn: 1 }}
                >
                    例
                </p>
                <p
                    className={styles.table_p}
                    style={{ gridRow: 2, gridColumn: 2 }}
                >
                    shizuoka.taro.24@shizuoka.ac.jp
                </p>
            </div>
            <p>※「入学年度」は入学年度（西暦）の下2桁</p>
            <Divider />
            <h2 className={styles.h2}>サーバ（ThunderBird用）</h2>
            <div className={styles.thunderbird_div}>
                <p
                    className={styles.table_p}
                    style={{ gridRow: 1, gridColumn: 1 }}
                >
                    種別
                </p>
                <p
                    className={styles.table_p}
                    style={{ gridRow: 1, gridColumn: 2 }}
                >
                    アドレス
                </p>
                <p
                    className={styles.table_p}
                    style={{ gridRow: 1, gridColumn: 3 }}
                >
                    ポート
                </p>
                <p
                    className={styles.table_p}
                    style={{ gridRow: 2, gridColumn: 1 }}
                >
                    IMAP
                </p>
                <p
                    className={styles.table_p}
                    style={{ gridRow: 2, gridColumn: 2 }}
                >
                    outlook.office365.com
                </p>
                <p
                    className={styles.table_p}
                    style={{ gridRow: 2, gridColumn: 3 }}
                >
                    993
                </p>
                <p
                    className={styles.table_p}
                    style={{ gridRow: 3, gridColumn: 1 }}
                >
                    SMTP
                </p>
                <p
                    className={styles.table_p}
                    style={{ gridRow: 3, gridColumn: 2 }}
                >
                    smtp.office365.com
                </p>
                <p
                    className={styles.table_p}
                    style={{ gridRow: 3, gridColumn: 3 }}
                >
                    587
                </p>
            </div>
        </div>
    );
}

export default MailPage;
