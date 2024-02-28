import { Mail, Wifi } from "@mui/icons-material";
import { Card, CardContent, Divider } from "@mui/material";
import styles from "./GuidePage.module.css";

function GuidePage() {
    return (
        <div className={styles.main_div}>
            <Card sx={{ mb: 2 }}>
                <CardContent>
                    <div className={styles.title}>
                        <div className={styles.wifi_svg}>
                            <Wifi sx={{ gridColumn: 1, fontSize: 80, verticalAlign: "middle" }} />
                        </div>
                        <p className={styles.title_p}>
                            WiFi
                        </p>
                    </div>
                    <h2 className={styles.h2}>WRL-SUCCES-S3</h2>
                    <div className={styles.wifi_div}>
                        <p className={styles.wifi_p} style={{ gridRow: 1, gridColumn: 1 }}>ユーザ名</p>
                        <p className={styles.wifi_p} style={{ gridRow: 1, gridColumn: 2 }}>静大ID（学情と同じ）</p>
                        <p className={styles.wifi_p} style={{ gridRow: 2, gridColumn: 1 }}>パスワード</p>
                        <p className={styles.wifi_p} style={{ gridRow: 2, gridColumn: 2 }}>静大IDのパスワード（学情と同じ）</p>
                    </div>
                    <Divider />
                    <h2 className={styles.h2}>eduroam</h2>
                    <div className={styles.wifi_div}>
                        <p className={styles.wifi_p} style={{ gridRow: 1, gridColumn: 1 }}>ユーザ名</p>
                        <p className={styles.wifi_p} style={{ gridRow: 1, gridColumn: 2 }}>静大ID（学情と同じ）</p>
                        <p className={styles.wifi_p} style={{ gridRow: 2, gridColumn: 1 }}>パスワード</p>
                        <p className={styles.wifi_p} style={{ gridRow: 2, gridColumn: 2 }}>静大IDのパスワード（学情と同じ）</p>
                    </div>
                </CardContent >
            </Card >
            <Card sx={{ mb: 2 }}>
                <CardContent>
                    <div className={styles.title}>
                        <div className={styles.wifi_svg}>
                            <Mail sx={{ gridColumn: 1, fontSize: 80, verticalAlign: "middle" }} />
                        </div>
                        <p className={styles.title_p}>
                            静大メール
                        </p>
                    </div>
                    <h2 className={styles.h2}>メールアドレス</h2>
                    <div className={styles.mail_div}>
                        <p className={styles.wifi_p} style={{ gridRow: 1, gridColumn: 1 }}>アドレス</p>
                        <p className={styles.wifi_p} style={{ gridRow: 1, gridColumn: 2 }}>姓.名.入学年度@shizuoka.ac.jp</p>
                        <p className={styles.wifi_p} style={{ gridRow: 2, gridColumn: 1 }}>例</p>
                        <p className={styles.wifi_p} style={{ gridRow: 2, gridColumn: 2 }}>shizuoka.taro.24@shizuoka.ac.jp</p>
                    </div>
                    <p>※「入学年度」は入学年度（西暦）の下2桁</p>
                    <Divider />
                    <h2 className={styles.h2}>サーバ（ThunderBird用）</h2>
                    <div className={styles.thunderbird_div}>
                        <p className={styles.wifi_p} style={{ gridRow: 1, gridColumn: 1 }}>種別</p>
                        <p className={styles.wifi_p} style={{ gridRow: 1, gridColumn: 2 }}>アドレス</p>
                        <p className={styles.wifi_p} style={{ gridRow: 1, gridColumn: 3 }}>ポート</p>
                        <p className={styles.wifi_p} style={{ gridRow: 2, gridColumn: 1 }}>IMAP</p>
                        <p className={styles.wifi_p} style={{ gridRow: 2, gridColumn: 2 }}>outlook.office365.com</p>
                        <p className={styles.wifi_p} style={{ gridRow: 2, gridColumn: 3 }}>993</p>
                        <p className={styles.wifi_p} style={{ gridRow: 3, gridColumn: 1 }}>SMTP</p>
                        <p className={styles.wifi_p} style={{ gridRow: 3, gridColumn: 2 }}>smtp.office365.com</p>
                        <p className={styles.wifi_p} style={{ gridRow: 3, gridColumn: 3 }}>587</p>
                    </div>
                </CardContent >
            </Card >
        </div >
    );
}

export default GuidePage;